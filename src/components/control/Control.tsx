import React from 'react';
import ProgressRing from '../progressRing/ProgressRing';
import style from './Control.module.scss';

const Control: React.FunctionComponent = () => {
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
                <h3 className={style.control__position__coord}>X <span className={style.control__position__coord__dim}>0</span></h3>
                <h3 className={style.control__position__coord}>Y <span className={style.control__position__coord__dim}>0</span></h3>
                <h3 className={style.control__position__coord}>Z <span className={style.control__position__coord__dim}>0</span></h3>
            </div>

            <div className={style.control__arrows}>
                <section className={style.control__arrows__item}>
                    <button>↑</button>
                </section>
                <section className={style.control__arrows__item}>
                    <button>←</button>
                    <button>↓</button>
                    <button>→</button>
                </section>
            </div>
        </div>
        
    );
};

export default Control;