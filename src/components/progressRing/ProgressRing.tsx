import * as React from 'react';
import style from './ProgressRing.module.scss';

interface Props {
  radius: number;
  stroke: number;
  progress: number;
  colour: string;
}

const ProgressRing: React.FC<Props> = ({ radius, stroke, progress, colour }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className={style.circle}>
      <circle
        className={style.circle__ring}
        stroke={colour}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default ProgressRing;
