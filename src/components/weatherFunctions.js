import * as icons from "../../assets/weatherIcons.mjs";


export const compareDates = (a, b) => {
    let now = new Date();
    return Math.abs(new Date(a.time).getTime() - now.getTime()) - Math.abs(new Date(a.time).getTime() - now.getTime())
}
export const getTemp = (data) => {
    // console.log(data)
    return data.properties.timeseries.sort(compareDates)[0].data.instant.details.air_temperature;
}

//handle next 1 hours not existing
export const getImg = data => getSymbol(data.properties.timeseries.sort(compareDates)[0].data.next_1_hours.summary.symbol_code);

export const getSymbol = (symbolCode) => {
    if (symbolCode.includes("heavyrain")) return icons.rain_heavy
    if (symbolCode.includes("sleet")) return icons.rain_and_snow
    if (symbolCode.includes("heavysnow")) return icons.snow_heavy
    if (symbolCode.includes("rain")) return icons.rain_light
    if (symbolCode.includes("snow")) return icons.snow_light
    if (symbolCode.includes("cloudy") || symbolCode.includes("fog")) return icons.cloudy

    var date = new Date();
    if (date.getHours() > 22 || date.getHours() < 6) {
        //its night
        if (symbolCode.includes("clearsky")) return icons.sunny_night
        if (symbolCode.includes("fair")) return icons.partly_cloudy_night
    } else {
        //its day
        if (symbolCode.includes("clearsky")) return icons.sunny_day
        if (symbolCode.includes("fair")) return icons.partly_cloudy_day
    }
    console.error("There is no icon for symbol code:", symbolCode)
    return icons.cloudy;
}