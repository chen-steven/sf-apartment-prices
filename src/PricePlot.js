import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import {Select} from "antd";

const { Option } = Select;

const nameMap = {
    "strata": "Strata",
    "windsor": "Windsor",
    "340-fremont": "340 Fremont",
    "azure": "Azure",
    "avalon-mb": "Avalon Mission Bay"
}
export function PricePlot() {
    const [apartmentData, setApartmentData] = useState()
    const [key, setKey] = useState("min_price")
    useEffect(() => {
        axios.get("https://36ej55h6pc.execute-api.us-east-1.amazonaws.com/Prod/get-apartment-data/")
        .then((res) => {
            const apartments = {}
            res.data.sort((a,b) => a.date.localeCompare(b.date))
            res.data.forEach((entry) => {
                if (!apartments[entry.name]) {
                    apartments[entry.name] = {date: [], min_price: [], max_price: [], mean_price: [], median_price: []}
                }
                apartments[entry.name].date.push(entry.date)
                apartments[entry.name].min_price.push(entry.min_price)
                apartments[entry.name].max_price.push(entry.max_price)
                apartments[entry.name].mean_price.push(entry.mean_price)
                apartments[entry.name].median_price.push(entry.median_price)
            })
            setApartmentData(apartments)
        })
    }, [])
    
    const onChange = (val) => {
        setKey(val);
    }

    if (!apartmentData) {
        return <h1>Loading...</h1>
    }

    const plotData = []
    for (const [name, val] of Object.entries(apartmentData)) {
        plotData.push({
            x: val.date,
            y: val[key],
            mode: "lines",
            name: (nameMap[name] ? nameMap[name] : name)
        })
      }
    
    return (<>
        <Select defaultValue="min_price" onChange={onChange}> 
        <Option value="min_price">Min Price</Option>
        <Option value="max_price">Max Price</Option>
        <Option value="mean_price" >
            Mean Price
        </Option>
        <Option value="median_price" >
            Median Price
        </Option>
        </Select>
        <Plot data={plotData}/>
        
        </>)
}