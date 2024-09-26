import React, { FC } from 'react'
import './Button.css';

interface ButtonProps {
    icon: string;
    text: string;
    number: string;
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({icon, text, number, onClick}) => {
  return (
    <button className='section-button' onClick={onClick}>
        <i className={icon}></i>
        <h4>{text}</h4>
        <p>{number} projects</p>
    </button>
  )
}

export default Button