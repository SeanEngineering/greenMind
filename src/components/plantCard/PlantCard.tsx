import React from 'react';
import { plantProps } from '../../service/plants';
import style from './PlantCard.module.scss';

const PlantCard:React.FunctionComponent<plantProps> = ({image, name, dailyWaterUsage, lightIntensity}) => {
    return (
        <div className={style.card}>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>{dailyWaterUsage}L per day</h4>
            <h4>Suited for: {lightIntensity}</h4>
        </div>
    );
};

export default PlantCard;