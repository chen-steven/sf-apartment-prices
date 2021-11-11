import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

export function PricePlot() {
    const [apartmentData, setApartmentData] = useState({})
    useEffect(() => {
        console.log('hello world')
        axios.get("https://36ej55h6pc.execute-api.us-east-1.amazonaws.com/Prod/get-apartment-data/")
        .then((res) => {
            const apartments = {
                strata: {x: [], y: []},
                windsor: {x: [], y: []}, 
                "340-fremont": {x: [], y: []},
                azure: {x: [], y: []}

            }
            res.data.sort((a,b) => a.date.localeCompare(b.date))
            res.data.forEach((entry) => {
                apartments[entry.name].x.push(entry.date)
                apartments[entry.name].y.push(entry.min_price)
            })
            console.log(apartments)
            setApartmentData(apartments)
        })
    }, [])


    const trace1 = {
        ...apartmentData.windsor,
        mode: "lines",
        name: "windsor"
    }
    const trace2 = {
        ...apartmentData.azure,
        mode: "lines",
        name: "azure"
    }
    const trace3 = {
        ...apartmentData.strata,
        mode: "lines",
        name: "strata"
    }
    const trace4 = {
        ...apartmentData["340-fremont"],
        mode: "lines",
        name: "340-fremont"
    }
    return <Plot data={[trace1, trace2, trace3, trace4]}/>
}