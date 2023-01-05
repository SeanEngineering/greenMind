import {useEffect, useState} from 'react';
import style from './Monitor.module.scss';
import { getCurrentPosition } from '../../service/weather';

const Monitor = () => {
    const [temperature, setTemperature] = useState([]);
    const [rain, setRain] = useState([]);

    useEffect(() => {
        (async () => {
          const position:any = await getCurrentPosition();
          console.log(position.coords.latitude);
          const temperature = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${
              Math.round(position.coords.latitude * 100) / 100
            }&longitude=${
              Math.round(position.coords.longitude * 100) / 100
            }&hourly=temperature_2m&current_weather=true`
          );
          const rain = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${
              Math.round(position.coords.latitude * 100) / 100
            }&longitude=${
              Math.round(position.coords.longitude * 100) / 100
            }&hourly=rain`
          );
          const decodedTemperature = await temperature.json();
          const decodedRain = await rain.json();
          setTemperature(await decodedTemperature);
          console.log(decodedTemperature);
          setRain(decodedRain);
        })();
      }, []);

    return (
        <div className={style.monitor}>
            <h1>Monitor</h1>
            <h3>Location</h3>
            <h3>{temperature.current_weather ? `The temperature is ${temperature.current_weather.temperature}°C`: 'getting location data...'}</h3>
            <h3>Water Supply</h3>
            <h3>Humidity</h3>
            <h3>Soil Moisture</h3>
        </div>
    );
};

export default Monitor;