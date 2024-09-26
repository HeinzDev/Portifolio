import React, { FC } from 'react'
import './Bubble.css'

interface BubbleProps {
    icon: string;
    image: string;
    text: string;
    description: string;
    onClick: () => void;
}

const Bubble: FC<BubbleProps> = ({icon, image, text, description, onClick}) => {
  return (
        <div className='bubble' onClick={onClick}>
            <img className='icon' src={icon} alt="" />
            <img className='bubble-image' src={image} alt="" />
            <div className='text-overlay'>
                <h3>{text}</h3>
                <p className='bubble-description'>{description}</p>
            </div>
        </div>
  )
}

export default Bubble