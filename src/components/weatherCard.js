import * as React from 'react';
// import '../styles/components/weatherCard.scss' Moved to pocasi.scss
import { Fragment, useState, useEffect } from 'react';
import { Link } from "gatsby";
// import useSWR from 'swr';
import { getTemp, getImg, getSymbol } from './weatherFunctions';
import * as icons from '../../assets/prettyWeatherIcons.js';
import wind_icon from '../../assets/wind_icon.png';
import arrow from '../../assets/arrow.png'
import translations from './translations.js'

const MONTHS = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
const DAYS = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];

export default function WeatherCard({ title, data }) {
    const rain_icon = icons.rain;
    // const wind_icon = icons.fog;
    // let temperature = getTemp(data) //get highest for the day

    const translateSymbolCode = symbolCode => translations[symbolCode];
    console.log(data)
    let date = new Date(data[0].time);
    //todo refactor
    if (!title) title = DAYS[date.getDay()];
    console.log("title", date.getDay())
    const getRain = data => {
        if (data.next_1_hours) return data.next_1_hours.details.precipitation_amount
        if (data.next_6_hours) return data.next_6_hours.details.precipitation_amount;
        return "error"
    }
    const getSymbolCode = data => {
        if (data.next_1_hours) return data.next_1_hours.summary.symbol_code
        if (data.next_6_hours) return data.next_6_hours.summary.symbol_code
        if (data.next_12_hours) return data.next_12_hours.summary.symbol_code
        return "error"
    }

    let thing = Object.entries(data.reduce((acc, obj) => {
        let key = getSymbolCode(obj.data);
        console.log(key)
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc;
    }, {})).sort((a, b) => a[1].length - b[1].length)[0]
    console.log(thing)
    const weatherSymbol = getSymbol(thing[0]);

    console.log("icons", icons);
    const getPrettyPic = symbolCode => icons[symbolCode];

    const getAverage = (arr, func) => {
        let reduction = getOccurrences(arr, func)
        return Math.round(reduction.sum / reduction.count)
    }
    const getOccurrences = (arr, func) => arr
        .filter(data => new Date(data.time).getHours() >= 8 || new Date(data.time).getHours() <= 18)
        .reduce(({ sum, count }, b) => {
            // console.log("inside", sum, count)
            return { sum: sum + func(b), count: count + 1 }
        }, { sum: 0, count: 0 })


    const getWindDay = data => getAverage(data, a => a.data.instant.details.wind_speed);
    const getWindDirDay = data => {
        let dir = getAverage(data, a => a.data.instant.details.wind_from_direction)
        return dir >= (360 - 22.5) || dir < 22.5 ? 'e S'
            : dir >= 22.5 && dir < (90 - 22.5) ? 'e SV'
                : dir >= (90 - 22.5) && dir < (90 + 22.5) ? ' V'
                    : dir >= (90 + 22.5) && dir < (180 - 22.5) ? ' JV'
                        : dir >= (180 - 22.5) && dir < (180 + 22.5) ? ' J'
                            : dir >= (180 + 22.5) && dir < (270 - 22.5) ? ' JZ'
                                : dir >= (270 - 22.5) && dir < (270 + 22.5) ? 'e Z'
                                    : dir >= (270 + 22.5) && dir < (360 - 22.5) ? 'e SZ' : 'error'
    }
    const getRainDay = data => getAverage(data, a => getRain(a.data))
    const getTemperatureDay = data => getAverage(data, a => a.data.instant.details.air_temperature)
    // console.log(getTemperatureDay)
    const filteredData4 = data.filter(data => new Date(data.time).getHours() % 4 == 0)
    let dataByHours = filteredData4.length < 6
        ? data.length < 6
            ? data
            : new Date(data[0].time).getHours() % 2 == 0
                ? data.filter(data => new Date(data.time).getHours() % 2 == 0).slice(0, 6)
                : [data[0], ...data.filter(data => new Date(data.time).getHours() % 2 == 0).slice(0, 5)]
        : filteredData4
    return <div className="weather-card">
        <div className="card-header">
            <div className="card-title-wrapper">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className="card-date title-date">
                    {date.getDate()}.&nbsp;{MONTHS[date.getMonth() - 1]} {date.getFullYear()}
                </p>
                <h1 className="card-temperature">
                    {getTemperatureDay(data)}°C
                </h1>
            </div>
            <div className="card-title-icon">
                <img src={weatherSymbol} alt="ikona pocasi" className="" />
            </div>
        </div>
        <div className="card-subheader">
            <div className="wrapper-rain card-subheader-container">
                <div className="card-symbol-small rain-icon">
                    <img src={rain_icon} alt="rain icon" />
                </div>
                <p className="rain-text card-subheader-text">Srážky: <strong>{getTemperatureDay(data)}&nbsp;mm</strong></p>
            </div>
            <div className="wrapper-wind card-subheader-container">
                <div className="card-symbol-small wind-icon">
                    <img src={wind_icon} alt="wind icon" />
                </div>
                <p className="wind-text card-subheader-text">Vítr rychlosti <strong>{getWindDay(data)}</strong> m/s z{getWindDirDay(data)}</p>
            </div>
        </div>
        <table className="card-forecast">
            <thead>
                <tr>
                    <th>čas</th>
                    <th className="pushed-front">Předpověď</th>
                    <th>Teplota</th>
                    <th>Srážky</th>
                    <th>Vítr</th>
                </tr>
            </thead>
            <tbody>
                {dataByHours.map((data, i) => <tr key={i}>
                    <td key={Math.random() + i} className="time">{new Date(data.time).getHours()}:00</td>
                    <td key={Math.random() + i} className="icon"><img src={getPrettyPic(getSymbolCode(data.data))} alt={translateSymbolCode(getSymbolCode(data.data))} title={translateSymbolCode(getSymbolCode(data.data))} /></td>
                    <td key={Math.random() + i} className="temp">{data.data.instant.details.air_temperature} °C</td>
                    <td key={Math.random() + i} className="rain">{getRain(data.data)}&nbsp;mm</td>
                    <td key={Math.random() + i} className="wind">
                        <div>
                            {data.data.instant.details.wind_speed} m/s
                        </div>
                        <img className="arrow-icon" src={arrow} style={{ transform: `rotate(-${data.data.instant.details.wind_from_direction}deg)` }} />
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div >
}
