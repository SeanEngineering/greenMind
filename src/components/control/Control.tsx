import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import ProgressRing from '../progressRing/ProgressRing';
import style from './Control.module.scss';
import { moveBy, getPosition, position, forward, backward, left, right, setZeroPosition } from '../../service/control';
import { dayName, amOrPm } from '../../service/calendar';
import { getPlantPlaces, plantPlace } from '../../service/plants';
import PlaceList from '../placeList/PlaceList';

interface ControlPros {
    setGraphPosition: Dispatch<SetStateAction<position>>;
}

const Control: React.FunctionComponent<ControlPros> = ({setGraphPosition}) => {
    const [localPosition, setLocalPosition] = useState<position>({x: 0, y: 0, z: 0});
    const [checkState, setCheckState] = useState(false);
    const [todayName, setTodayName] = useState<string>('');
    const [isAfternoon, setIsAfternoon] = useState<string>('');
    const [placeList, setPlaceList] = useState<Array<any> | null>([]);

    useEffect(() => {
        let time: Date = new Date();
        let hour: number = time.getHours();
        let day: number = time.getDay();
        setTodayName(dayName(day));
        setIsAfternoon(amOrPm(hour));

        (async () => {
            try {
                const idPosition = await getPosition(2);
                setLocalPosition({x: Math.round(idPosition.x), y: Math.round(idPosition.y), z: Math.round(idPosition.z)});
                setGraphPosition(idPosition);
                console.log(localPosition);
            } catch (err) {
                throw err;
            };
        })();
    }, [checkState]);

    useEffect(() => {
        (async () => {
            try {
                console.log('attempting to get places')
                const places = await getPlantPlaces();
                console.log("successfully received positions")
                setPlaceList(places);
            } catch (e) {
                console.log("failed to get places")
                console.log(e);
            }
        })();
    },[])

    const progress = (direction: position) => {
        moveBy(direction, 2);
        setCheckState(!checkState);
    }

    // const moveToPosition = (e:Event) => {
    //     e.preventDefault();
    //     const x:number = (document.getElementById('x')?.innerText ? parseInt(document.getElementById('x')?.innerText) : 0);
    //     const y = document.getElementById('x')?.innerText;
    //     const z = document.getElementById('x')?.innerText;
    //     if (x) {
    //         const xNum = parseInt(x);
    //     }
    //     if (y) {
    //         const yNum = parseInt(y);
    //     }
    //     if (z) {
    //         const yNum = parseInt(z);
    //     }

    //     const updatedPosition: position = {
    //         x: x,
    //         y: yNum,
    //         z: zNum,
    //     }
    // }

    
    return (
        <div className={style.control}>
            <h1>{isAfternoon == 'am' ? 'Good morning' : 'Good afternoon'}</h1>
                <h2>Today is {todayName}</h2>
                <PlaceList placeList={placeList} />
            <div className={style.control__position}>
                <h2>Position</h2> 
                <label className={style.control__position__coord}>X</label>
                <input id='x' type='text' className={style.control__position__coord__dim} defaultValue={localPosition.x.toString()}/>
                <label className={style.control__position__coord}>Y</label>
                <input id='y' type='text' className={style.control__position__coord__dim} defaultValue={localPosition.y.toString()}/>
                <label className={style.control__position__coord}>Z</label>
                <input id='z' type='text' className={style.control__position__coord__dim} defaultValue={localPosition.z.toString()}/>
                <button onSubmit={(e) => {}}>Update Position</button>
                <button onClick={() => {setZeroPosition(2)}}>Set 0 Position</button>
            </div>
            <br />

            <div className={style.control__arrows}>
                <section className={style.control__arrows__item}>
                    <button onClick={() => {progress(forward)}}>↑</button>
                </section>
                <section className={style.control__arrows__item}>
                    <button onClick={() => {progress(left)}}>←</button>
                    <button onClick={() => {progress(backward)}}>↓</button>
                    <button onClick={() => {progress(right)}}>→</button>
                </section>
            </div>
        </div>
        
    );
};

export default Control;