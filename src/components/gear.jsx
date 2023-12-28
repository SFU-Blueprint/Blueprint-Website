import  React, { useEffect, useState } from 'react';


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


function Gear(Gear) {
    const { imageURL, top, left, initialAngle = 0, ratio, direction } = Gear;

    const [rotation, setRotation] = useState(initialAngle);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const rotationAmount = (direction === 'left' ? -1 : 1) * scrollY * 0.1 / ratio;
        setRotation(initialAngle + rotationAmount);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [initialAngle, direction, ratio, handleScroll]);

    const style = {
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        transform: `rotate(${rotation}deg)`,
    };

    return (
        <div style={style}>
            <img src={imageURL} alt="Gear Image" />
        </div>
    );
}

export default Gear;
