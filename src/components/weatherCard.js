import * as React from 'react';
// import '../styles/components/weatherCard.scss' Moved to pocasi.scss
import { Fragment, useState, useEffect } from 'react';
import { Link } from "gatsby";
// import useSWR from 'swr';
import { getTemp, getImg, compareDates } from './weatherFunctions';
// import * as icons from '../../assets/prettyWeatherIcons.js';
import wind_icon from '../../assets/wind_icon.png';
import arrow from '../../assets/arrow.png'
import translations from './translations.js'

const MONTHS = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
const DAYS = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];

// #region imports
import clearsky_day from "../../assets/prettyWeatherIcons/clearsky_day.svg"
import clearsky_night from "../../assets/prettyWeatherIcons/clearsky_night.svg"
import clearsky_polartwilight from "../../assets/prettyWeatherIcons/clearsky_polartwilight.svg"
import cloudy from "../../assets/prettyWeatherIcons/cloudy.svg"
import fair_day from "../../assets/prettyWeatherIcons/fair_day.svg"
import fair_night from "../../assets/prettyWeatherIcons/fair_night.svg"
import fair_polartwilight from "../../assets/prettyWeatherIcons/fair_polartwilight.svg"
import fog from "../../assets/prettyWeatherIcons/fog.svg"
import heavyrain from "../../assets/prettyWeatherIcons/heavyrain.svg"
import heavyrainandthunder from "../../assets/prettyWeatherIcons/heavyrainandthunder.svg"
import heavyrainshowersandthunder_day from "../../assets/prettyWeatherIcons/heavyrainshowersandthunder_day.svg"
import heavyrainshowersandthunder_night from "../../assets/prettyWeatherIcons/heavyrainshowersandthunder_night.svg"
import heavyrainshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/heavyrainshowersandthunder_polartwilight.svg"
import heavyrainshowers_day from "../../assets/prettyWeatherIcons/heavyrainshowers_day.svg"
import heavyrainshowers_night from "../../assets/prettyWeatherIcons/heavyrainshowers_night.svg"
import heavyrainshowers_polartwilight from "../../assets/prettyWeatherIcons/heavyrainshowers_polartwilight.svg"
import heavysleet from "../../assets/prettyWeatherIcons/heavysleet.svg"
import heavysleetandthunder from "../../assets/prettyWeatherIcons/heavysleetandthunder.svg"
import heavysleetshowersandthunder_day from "../../assets/prettyWeatherIcons/heavysleetshowersandthunder_day.svg"
import heavysleetshowersandthunder_night from "../../assets/prettyWeatherIcons/heavysleetshowersandthunder_night.svg"
import heavysleetshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/heavysleetshowersandthunder_polartwilight.svg"
import heavysleetshowers_day from "../../assets/prettyWeatherIcons/heavysleetshowers_day.svg"
import heavysleetshowers_night from "../../assets/prettyWeatherIcons/heavysleetshowers_night.svg"
import heavysleetshowers_polartwilight from "../../assets/prettyWeatherIcons/heavysleetshowers_polartwilight.svg"
import heavysnow from "../../assets/prettyWeatherIcons/heavysnow.svg"
import heavysnowandthunder from "../../assets/prettyWeatherIcons/heavysnowandthunder.svg"
import heavysnowshowersandthunder_day from "../../assets/prettyWeatherIcons/heavysnowshowersandthunder_day.svg"
import heavysnowshowersandthunder_night from "../../assets/prettyWeatherIcons/heavysnowshowersandthunder_night.svg"
import heavysnowshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/heavysnowshowersandthunder_polartwilight.svg"
import heavysnowshowers_day from "../../assets/prettyWeatherIcons/heavysnowshowers_day.svg"
import heavysnowshowers_night from "../../assets/prettyWeatherIcons/heavysnowshowers_night.svg"
import heavysnowshowers_polartwilight from "../../assets/prettyWeatherIcons/heavysnowshowers_polartwilight.svg"
import lightrain from "../../assets/prettyWeatherIcons/lightrain.svg"
import lightrainandthunder from "../../assets/prettyWeatherIcons/lightrainandthunder.svg"
import lightrainshowersandthunder_day from "../../assets/prettyWeatherIcons/lightrainshowersandthunder_day.svg"
import lightrainshowersandthunder_night from "../../assets/prettyWeatherIcons/lightrainshowersandthunder_night.svg"
import lightrainshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/lightrainshowersandthunder_polartwilight.svg"
import lightrainshowers_day from "../../assets/prettyWeatherIcons/lightrainshowers_day.svg"
import lightrainshowers_night from "../../assets/prettyWeatherIcons/lightrainshowers_night.svg"
import lightrainshowers_polartwilight from "../../assets/prettyWeatherIcons/lightrainshowers_polartwilight.svg"
import lightsleet from "../../assets/prettyWeatherIcons/lightsleet.svg"
import lightsleetandthunder from "../../assets/prettyWeatherIcons/lightsleetandthunder.svg"
import lightsleetshowers_day from "../../assets/prettyWeatherIcons/lightsleetshowers_day.svg"
import lightsleetshowers_night from "../../assets/prettyWeatherIcons/lightsleetshowers_night.svg"
import lightsleetshowers_polartwilight from "../../assets/prettyWeatherIcons/lightsleetshowers_polartwilight.svg"
import lightsnow from "../../assets/prettyWeatherIcons/lightsnow.svg"
import lightsnowandthunder from "../../assets/prettyWeatherIcons/lightsnowandthunder.svg"
import lightsnowshowers_day from "../../assets/prettyWeatherIcons/lightsnowshowers_day.svg"
import lightsnowshowers_night from "../../assets/prettyWeatherIcons/lightsnowshowers_night.svg"
import lightsnowshowers_polartwilight from "../../assets/prettyWeatherIcons/lightsnowshowers_polartwilight.svg"
import lightssleetshowersandthunder_day from "../../assets/prettyWeatherIcons/lightssleetshowersandthunder_day.svg"
import lightssleetshowersandthunder_night from "../../assets/prettyWeatherIcons/lightssleetshowersandthunder_night.svg"
import lightssleetshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/lightssleetshowersandthunder_polartwilight.svg"
import lightssnowshowersandthunder_day from "../../assets/prettyWeatherIcons/lightssnowshowersandthunder_day.svg"
import lightssnowshowersandthunder_night from "../../assets/prettyWeatherIcons/lightssnowshowersandthunder_night.svg"
import lightssnowshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/lightssnowshowersandthunder_polartwilight.svg"
import partlycloudy_day from "../../assets/prettyWeatherIcons/partlycloudy_day.svg"
import partlycloudy_night from "../../assets/prettyWeatherIcons/partlycloudy_night.svg"
import partlycloudy_polartwilight from "../../assets/prettyWeatherIcons/partlycloudy_polartwilight.svg"
import rain from "../../assets/prettyWeatherIcons/rain.svg"
import rainandthunder from "../../assets/prettyWeatherIcons/rainandthunder.svg"
import rainshowersandthunder_day from "../../assets/prettyWeatherIcons/rainshowersandthunder_day.svg"
import rainshowersandthunder_night from "../../assets/prettyWeatherIcons/rainshowersandthunder_night.svg"
import rainshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/rainshowersandthunder_polartwilight.svg"
import rainshowers_day from "../../assets/prettyWeatherIcons/rainshowers_day.svg"
import rainshowers_night from "../../assets/prettyWeatherIcons/rainshowers_night.svg"
import rainshowers_polartwilight from "../../assets/prettyWeatherIcons/rainshowers_polartwilight.svg"
import sleet from "../../assets/prettyWeatherIcons/sleet.svg"
import sleetandthunder from "../../assets/prettyWeatherIcons/sleetandthunder.svg"
import sleetshowersandthunder_day from "../../assets/prettyWeatherIcons/sleetshowersandthunder_day.svg"
import sleetshowersandthunder_night from "../../assets/prettyWeatherIcons/sleetshowersandthunder_night.svg"
import sleetshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/sleetshowersandthunder_polartwilight.svg"
import sleetshowers_day from "../../assets/prettyWeatherIcons/sleetshowers_day.svg"
import sleetshowers_night from "../../assets/prettyWeatherIcons/sleetshowers_night.svg"
import sleetshowers_polartwilight from "../../assets/prettyWeatherIcons/sleetshowers_polartwilight.svg"
import snow from "../../assets/prettyWeatherIcons/snow.svg"
import snowandthunder from "../../assets/prettyWeatherIcons/snowandthunder.svg"
import snowshowersandthunder_day from "../../assets/prettyWeatherIcons/snowshowersandthunder_day.svg"
import snowshowersandthunder_night from "../../assets/prettyWeatherIcons/snowshowersandthunder_night.svg"
import snowshowersandthunder_polartwilight from "../../assets/prettyWeatherIcons/snowshowersandthunder_polartwilight.svg"
import snowshowers_day from "../../assets/prettyWeatherIcons/snowshowers_day.svg"
import snowshowers_night from "../../assets/prettyWeatherIcons/snowshowers_night.svg"
import snowshowers_polartwilight from "../../assets/prettyWeatherIcons/snowshowers_polartwilight.svg"
const icons = {
    clearsky_day,
    clearsky_night,
    clearsky_polartwilight,
    cloudy,
    fair_day,
    fair_night,
    fair_polartwilight,
    fog,
    heavyrain,
    heavyrainandthunder,
    heavyrainshowersandthunder_day,
    heavyrainshowersandthunder_night,
    heavyrainshowersandthunder_polartwilight,
    heavyrainshowers_day,
    heavyrainshowers_night,
    heavyrainshowers_polartwilight,
    heavysleet,
    heavysleetandthunder,
    heavysleetshowersandthunder_day,
    heavysleetshowersandthunder_night,
    heavysleetshowersandthunder_polartwilight,
    heavysleetshowers_day,
    heavysleetshowers_night,
    heavysleetshowers_polartwilight,
    heavysnow,
    heavysnowandthunder,
    heavysnowshowersandthunder_day,
    heavysnowshowersandthunder_night,
    heavysnowshowersandthunder_polartwilight,
    heavysnowshowers_day,
    heavysnowshowers_night,
    heavysnowshowers_polartwilight,
    lightrain,
    lightrainandthunder,
    lightrainshowersandthunder_day,
    lightrainshowersandthunder_night,
    lightrainshowersandthunder_polartwilight,
    lightrainshowers_day,
    lightrainshowers_night,
    lightrainshowers_polartwilight,
    lightsleet,
    lightsleetandthunder,
    lightsleetshowers_day,
    lightsleetshowers_night,
    lightsleetshowers_polartwilight,
    lightsnow,
    lightsnowandthunder,
    lightsnowshowers_day,
    lightsnowshowers_night,
    lightsnowshowers_polartwilight,
    lightssleetshowersandthunder_day,
    lightssleetshowersandthunder_night,
    lightssleetshowersandthunder_polartwilight,
    lightssnowshowersandthunder_day,
    lightssnowshowersandthunder_night,
    lightssnowshowersandthunder_polartwilight,
    partlycloudy_day,
    partlycloudy_night,
    partlycloudy_polartwilight,
    rain,
    rainandthunder,
    rainshowersandthunder_day,
    rainshowersandthunder_night,
    rainshowersandthunder_polartwilight,
    rainshowers_day,
    rainshowers_night,
    rainshowers_polartwilight,
    sleet,
    sleetandthunder,
    sleetshowersandthunder_day,
    sleetshowersandthunder_night,
    sleetshowersandthunder_polartwilight,
    sleetshowers_day,
    sleetshowers_night,
    sleetshowers_polartwilight,
    snow,
    snowandthunder,
    snowshowersandthunder_day,
    snowshowersandthunder_night,
    snowshowersandthunder_polartwilight,
    snowshowers_day,
    snowshowers_night,
    snowshowers_polartwilight,
}

//#endregion

// import cloudy from '../../assets/weatherIcons/cloudy.png';
import partly_cloudy_day from '../../assets/weatherIcons/partly_cloudy_day.png';
import partly_cloudy_night from '../../assets/weatherIcons/partly_cloudy_night.png';
import rain_and_snow from '../../assets/weatherIcons/rain_and_snow.png';
import rain_heavy from '../../assets/weatherIcons/rain_heavy.png';
import rain_light from '../../assets/weatherIcons/rain_light.png';
import snow_heavy from '../../assets/weatherIcons/snow_heavy.png';
import snow_light from '../../assets/weatherIcons/snow_light.png';
import sunny_day from '../../assets/weatherIcons/sunny_day.png';
import sunny_night from '../../assets/weatherIcons/sunny_night.png';

const getSymbol = (symbolCode) => {
    if (symbolCode.includes("heavyrain")) return rain_heavy
    if (symbolCode.includes("sleet")) return rain_and_snow
    if (symbolCode.includes("heavysnow")) return snow_heavy
    if (symbolCode.includes("rain")) return rain_light
    if (symbolCode.includes("snow")) return snow_light
    if (symbolCode.includes("cloudy") || symbolCode.includes("fog")) return cloudy

    var date = new Date();
    if (date.getHours() > 22 || date.getHours() < 6) {
        //its night
        if (symbolCode.includes("clearsky")) return sunny_night
        if (symbolCode.includes("fair")) return partly_cloudy_night
    } else {
        //its day
        if (symbolCode.includes("clearsky")) return sunny_day
        if (symbolCode.includes("fair")) return partly_cloudy_day
    }
    console.error("There is no icon for symbol code:", symbolCode)
    return cloudy;
}

export default function WeatherCard({ title, data }) {
    const rain_icon = icons.rain;
    // const wind_icon = icons.fog;
    // let temperature = getTemp(data) //get highest for the day

    const translateSymbolCode = symbolCode => translations[symbolCode];
    (data)
    let date = new Date(data[0].time);
    //todo refactor
    if (!title) title = DAYS[date.getDay()];
    // console.log("title", date.getDay())
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
        // console.log(key)
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc;
    }, {})).sort((a, b) => a[1].length - b[1].length)[0]
    // console.log(thing)
    const weatherSymbol = getSymbol(thing[0]);

    // console.log("icons", icons);
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
                    {date.getDate()}.&nbsp;{MONTHS[date.getMonth()]} {date.getFullYear()}
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
