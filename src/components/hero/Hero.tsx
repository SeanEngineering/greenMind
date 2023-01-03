import React from 'react';
import HeroContent from '../heroContent/HeroContent';
import HeroImage from '../heroImage/HeroImage';
import style from './Hero.module.scss';

const Hero:React.FunctionComponent = () => {
    return (
        <div className={style.hero}>
            <HeroImage />
            <HeroContent />
        </div>
    );
};

export default Hero;