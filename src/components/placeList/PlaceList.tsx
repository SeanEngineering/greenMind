import {useState, useEffect, Key} from 'react';
import { getPlantPlaces, placeProps, plantPlace } from '../../service/plants';
import PlaceCard from '../placeCard/PlaceCard';
import style from './PlaceList.module.scss';

interface PlaceProps {
    placeList: Array<any> | null;
}

const PlaceList:React.FunctionComponent<PlaceProps> = ({placeList}: PlaceProps) => {

    if (placeList!=null && placeList.length != 0 ){
        return (
            <div className={style.placeList}>
                {placeList.map((item: { id: Key | null | undefined; name: string; image: string; liLevel: number; moLevel: number; place: number; }) => {
                    return <PlaceCard key={item.id} name={item.name} image={item.image} liLevel={item.liLevel} moLevel={item.moLevel} place={item.place}/>
                })}

            </div>
        )
    } else {
        return (
            <div>
                Loading plant orientation...
            </div>
        );
    }
};

export default PlaceList;