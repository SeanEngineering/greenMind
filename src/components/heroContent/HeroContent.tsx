import React from 'react';
import style from './HeroContent.module.scss';

const HeroContent:React.FunctionComponent = () => {
    return (
        <div className={style.content}>
            <h1>Green Mind</h1>
            <h3>Your adaptive plant monitoring system</h3>
            <p>Our automated self watering plant system is the ultimate solution for busy plant lovers. No more daily watering or worrying about over or under watering your plants. Our system uses sensors to monitor the soil moisture levels and automatically provides the right amount of water to your plants when they need it. The water is delivered directly to the root zone, ensuring that your plants get the hydration they need to thrive. With our system, you'll have more time to enjoy your plants and less time worrying about their care. Plus, our sleek and modern design will look great in any home or office. Try our automated self watering plant system today and see the difference it can make for your plants!</p>
        </div>
    );
};

export default HeroContent;