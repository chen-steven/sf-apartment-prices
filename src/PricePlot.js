import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import {Select} from "antd";

const { Option } = Select;
export function PricePlot() {
    const [apartmentData, setApartmentData] = useState()
    const [key, setKey] = useState("min_price")
    useEffect(() => {
        axios.get("https://36ej55h6pc.execute-api.us-east-1.amazonaws.com/Prod/get-apartment-data/")
        .then((res) => {
            const apartments = {
                strata: {date: [], min_price: [], max_price: [], mean_price: []},
                windsor: {date: [], min_price: [], max_price: [], mean_price: []}, 
                "340-fremont": {date: [], min_price: [], max_price: [], mean_price: []},
                azure: {date: [], min_price: [], max_price: [], mean_price: []}

            }
            res.data.sort((a,b) => a.date.localeCompare(b.date))
            res.data.forEach((entry) => {
                apartments[entry.name].date.push(entry.date)
                apartments[entry.name].min_price.push(entry.min_price)
                apartments[entry.name].max_price.push(entry.max_price)
                apartments[entry.name].mean_price.push(entry.mean_price)
            })
            console.log(apartments)
            setApartmentData(apartments)
        })
    }, [])
    
    const onChange = (val) => {
        setKey(val);
    }

    if (!apartmentData) {
        return <h1>Loading...</h1>
    }

    const windsor = {
        x: apartmentData.windsor.date,
        y: apartmentData.windsor[key],
        mode: "lines",
        name: "Windsor"
    }
    const azure = {
        x: apartmentData.azure.date,
        y: apartmentData.azure[key],
        mode: "lines",
        name: "Azure"
    }
    const strata = {
        x: apartmentData.strata.date,
        y: apartmentData.strata[key],
        mode: "lines",
        name: "Strata"
    }
    const threeFortyFremont = {
        x: apartmentData["340-fremont"].date,
        y: apartmentData["340-fremont"][key],
        mode: "lines",
        name: "340 Fremont"
    }
    
    return (<>
        <Select defaultValue="min_price" onChange={onChange}> 
        <Option value="min_price">Min Price</Option>
        <Option value="max_price">Max Price</Option>
        <Option value="mean_price" >
            Mean Price
        </Option>
        </Select>
        <Plot data={[windsor, azure, strata, threeFortyFremont]}/>
        
        </>)
}