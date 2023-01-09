import {useState, useEffect} from 'react';
import ProgressRing from '../progressRing/ProgressRing';
import style from './Control.module.scss';
import { moveBy, getPosition, position, forward, backward, left, right } from '../../service/control';

const Control: React.FunctionComponent = () => {
    const [localPosition, setLocalPosition] = useState<position>({x: 0, y: 0, z: 0});
    const [checkState, setCheckState] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const idPosition = await getPosition(2);
                setLocalPosition({x: Math.round(idPosition.x), y: Math.round(idPosition.y), z: Math.round(idPosition.z)});
                console.log(localPosition);
            } catch (err) {
                throw err;
            };
        })();
    }, [checkState]);

    const progress = (direction: position) => {
        moveBy(direction, 2);
        setCheckState(!checkState);
    }

    
    return (
        <div className={style.control}>
            <div className={style.control__stats}>
                <h2>Statistics</h2>
                <h3 className={style.control__stats__cat}>Water Level <ProgressRing radius={20} stroke={2} progress={99} colour={"#005F60"}/></h3>
                <h3 className={style.control__stats__cat}>Moisture Level <ProgressRing radius={20} stroke={2} progress={10} colour={"#333"}/></h3>
                <h3 className={style.control__stats__cat}>Light Intensity <ProgressRing radius={20} stroke={2} progress={10} colour={"#FAAB36"}/></h3>
            </div>
            <div className={style.control__position}>
                <h2>Position</h2> 
                <h3 className={style.control__position__coord}>X <span className={style.control__position__coord__dim}>{localPosition.x}</span></h3>
                <h3 className={style.control__position__coord}>Y <span className={style.control__position__coord__dim}>{localPosition.y}</span></h3>
                <h3 className={style.control__position__coord}>Z <span className={style.control__position__coord__dim}>{localPosition.z}</span></h3>
            </div>

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