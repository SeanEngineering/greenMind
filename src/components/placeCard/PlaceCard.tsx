import React from 'react';
import style from './PlaceCard.module.scss';
import ProgressRing from '../progressRing/ProgressRing';
import { placeProps } from '../../service/plants';

const PlaceCard:React.FunctionComponent<placeProps> = ({name, image, moLevel, liLevel, place}) => {
    const colorArray: string[] = ['orange','red','blue','green'];

    return (
        <div className={style.control} style={{backgroundColor:colorArray[place]}}>
            <h2>{name}</h2>
            <img src={image} alt="Plant Image" />
            <p className={style.control__stats}>Moisture Level <ProgressRing radius={20} stroke={2} progress={moLevel} colour={"#333"}/></p>
            <p className={style.control__stats} >Light Intensity <ProgressRing radius={20} stroke={2} progress={liLevel} colour={"#FAAB36"}/></p>
        </div>
    );
};

export default PlaceCard;