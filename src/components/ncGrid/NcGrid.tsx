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
        <div id='homeGrid' className={style.grid}> 
            <div className={style.grid__point} style={{left: `${xGraph}px`, bottom: `${-yGraph}px`}}></div>
        </div>
    );
};

export default NcGrid;