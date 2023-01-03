import React from 'react';
import style from './Nav.module.scss'
import { useNavigate } from 'react-router-dom';

interface NavProps {
    title: Array<string>;
}

const Nav: React.FunctionComponent<NavProps> = (props) => {
    const navigate = useNavigate();

    const changeNavigate = (e: Event, title: String) => {
        e.preventDefault;
        if (title == 'home') {
            navigate('/');
        } else {
            console.log(title);
            navigate(`/${title}`);
        }

    }

    return (
        <nav className={style.navbar}>
            {props.title.map((title, index: number) => {
                return <button key={index} onClick={() => {changeNavigate('click', title)}}>{title}</button>
            })}
        </nav>
    );
};

export default Nav;