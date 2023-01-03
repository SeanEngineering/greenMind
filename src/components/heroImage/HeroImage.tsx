import React from 'react';
import plant from '../../assets/images/plant.webp';
import style from './HeroImage.module.scss';

const HeroImage = () => {
    return (
        <div className={style.heroImage}>
            <img src={plant} alt="plant" />
        </div>
    );
};

export default HeroImage;