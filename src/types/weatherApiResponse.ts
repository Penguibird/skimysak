import { icons } from "../components/weatherCard";

export declare module WeatherApiResponse {
    export type SymbolCode = keyof typeof icons;

    export interface Geometry {
        type: string;
        coordinates: number[];
    }

    export interface Units {
        air_pressure_at_sea_level: string;
        air_temperature: string;
        cloud_area_fraction: string;
        precipitation_amount: string;
        relative_humidity: string;
        wind_from_direction: string;
        wind_speed: string;
    }

    export interface Meta {
        updated_at: Date;
        units: Units;
    }

    export interface Details {
        air_pressure_at_sea_level: number;
        air_temperature: number;
        cloud_area_fraction: number;
        relative_humidity: number;
        wind_from_direction: number;
        wind_speed: number;
    }

    export interface Instant {
        details: Details;
    }

    export interface Summary {
        symbol_code: SymbolCode;
    }

    export interface Next12Hours {
        summary: Summary;
    }

    export interface Summary2 {
        symbol_code: SymbolCode;
    }

    export interface Details2 {
        precipitation_amount: number;
    }

    export interface Next1Hours {
        summary: Summary2;
        details: Details2;
    }

    export interface Summary3 {
        symbol_code: SymbolCode;
    }

    export interface Details3 {
        precipitation_amount: number;
    }

    export interface Next6Hours {
        summary: Summary3;
        details: Details3;
    }

    export interface Data {
        instant: Instant;
        next_12_hours: Next12Hours;
        next_1_hours: Next1Hours;
        next_6_hours: Next6Hours;
    }

    export interface Timesery {
        time: Date;
        data: Data;
    }

    export interface Properties {
        meta: Meta;
        timeseries: Timesery[];
    }

    export interface RootObject {
        type: string;
        geometry: Geometry;
        properties: Properties;
    }

}


