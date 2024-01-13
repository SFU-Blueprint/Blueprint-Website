import  React, { useEffect, useState } from 'react';
import './Gear.css'

/**
 * Represents a gear in the gear train.
 *
 * @typedef {Object} Gear
 * @property {string} imageURL - The URL of the gear image.
 * @property {number} diameter - The diameter of the gear.
 * @property {number} [ratio] - The ratio of the gear.
 * @property {number} [initialAngle] - The initial angle of the gear.
 * @property {number} [angleToPrevious] - The angle to the previous gear.
 * @property {number} [yOffset] - The vertical offset of the gear.
 * @property {number} [xOffset] - The horizontal offset of the gear.
 */


function Gear(props) {
    const { imageURL, initialAngle = 0, ratio, direction, diameter, rotationSpeed, xOffset, yOffset } = props.gear;
    const [rotation, setRotation] = useState(initialAngle);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const rotationAmount = (direction === 'left' ? -1 : 1) * scrollY * 40 / diameter * (rotationSpeed??1);
        setRotation(initialAngle + rotationAmount);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [initialAngle, direction, ratio, handleScroll]);

    const gearPosition = {
        top: `${yOffset}px`,
        left: `${xOffset}px`,
    };

    const imageRotation = {
        transform: `rotate(${rotation}deg)`,
    }

    return (
        <div>
            <div className="gear" style={gearPosition}>
                <img style={imageRotation} src={imageURL} alt="Gear Image" />
                <div className="text">Inner Text</div>
            </div>
        </div>
    );
}

export default Gear;
