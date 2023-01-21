import { useEffect, useState } from 'react';
import { buildSquare } from '../../service/grid';
import { position } from '../../service/control';
import style from './NcGrid.module.scss';

interface NcGridProps {
    relPosition: position;
}

const NcGrid:React.FunctionComponent<NcGridProps> = ({relPosition}) => {
    const [xGraph, setXGraph] = useState<number>(0);
    const [yGraph, setYGraph] = useState<number>(0);

    useEffect(() => {
        setXGraph(relPosition.x);
        setYGraph(relPosition.y);
    },[relPosition]);
    
    return (
        <div className={style.box}>
            <div id='homeGrid' className={style.grid}> 
                <div className={style.grid__point} style={{left: `${xGraph}px`, bottom: `${-yGraph}px`}}></div>
            </div>
            <div className={style.box__gridSection}>
                <div className={[style.box__gridSection__position__1, style.box__gridSection__position].join(" ")}>1</div>
                <div className={[style.box__gridSection__position__2, style.box__gridSection__position].join(" ")}>2</div>
                <div className={[style.box__gridSection__position__3, style.box__gridSection__position].join(" ")}>3</div>
            </div>
        </div>
        
    );
};

export default NcGrid;