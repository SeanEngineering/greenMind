import React, { Children } from 'react';
import HeroContent from '../heroContent/HeroContent';
import HeroImage from '../heroImage/HeroImage';
import style from './Hero.module.scss';

type Props = {
    children: Array<JSX.Element> | JSX.Element,
}

const Hero = ({children}: Props) => {
    return (
        <div className={style.hero}>
            {children}
        </div>
    );
};

export default Hero;