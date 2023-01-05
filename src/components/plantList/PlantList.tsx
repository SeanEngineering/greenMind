import { useState, useEffect } from 'react';
import style from './PlantList.module.scss';
import { getPlants, plant, plantProps } from '../../service/plants';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import PlantCard from '../plantCard/PlantCard';

interface PlantListProps {
    plants: plantProps[];
}

const PlantList:React.FunctionComponent<PlantListProps> = () => { 
    const [plantList, setPlantList] = useState<Array<any> | null>([]);

    useEffect(() => {
        (async () => {
            try {
                const plants = await getPlants();;
                setPlantList(plants);
            } catch (err) {
                console.log(err);
            }
        })()

    },[])
    if (plantList!=null && plantList.length != 0){
        return (
            <div className={style.cardList}>
             {plantList.map(item => {
                return <PlantCard key={item.id} image={item.image} name={item.name} dailyWaterUsage={item.dailyWaterUsage} lightIntensity={item.lightIntensity}/>
            })}
            </div>
           
        );
    } else {
        return <h1>Loading</h1>
    }
};

export default PlantList;