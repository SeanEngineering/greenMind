import {
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    setDoc,
    deleteDoc,
    updateDoc,
    increment,
} from 'firebase/firestore';
import { createContext } from 'react';
import db from '../config/firebase';

export type plant = {
    id: string;
    data: any;
};

export interface placeProps extends plantPlace {}

export type plantPlace = {
    image: string;
    liLevel: number;
    moLevel: number;
    name: string;
    place: number;
};

export interface plantProps {
    name: string;
    image: string;
    dailyWaterUsage: number;
    lightIntensity: string;
    // fertilizerUsage: string;
    // yieldsCrops: boolean;
    // growthRate: number;
}

export const getPlants = async () => {
    const collectionRef = collection(db, 'plants');
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((rawDocs) => {
        return { id: rawDocs.id, ...rawDocs.data() };
    });
};

export const getPlantPlaces = async () => {
    const collectionRef = collection(db, 'plantPlace');
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((rawDocs) => {
        return { id: rawDocs.id, ...rawDocs.data() };
    });
};
