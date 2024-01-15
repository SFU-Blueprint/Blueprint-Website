import React from 'react';
import './GearSection.css'

const gearsData = [
    { imageURL: '/gears/gear-4.svg', innerText: "PEOPLE FIRST", diameter: 254 },
    { imageURL: '/gears/gear-1.svg', innerText: "PERPETUAL GROWTH", yOffset: -110, diameter: 424, angleToPrevious: 225, initialAngle: 16, rotationSpeed: 0.82 },
    { imageURL: '/gears/gear-2.svg', innerText: "CHERISH EACH OTHER", yOffset: -260, diameter: 325, angleToPrevious: 315, initialAngle: 20, rotationSpeed: 0.95 },
    { imageURL: '/gears/gear-3.svg', innerText: "ALWAYS INNOVATE", yOffset: -410, diameter: 333, angleToPrevious: 225, initialAngle: 23},
    { imageURL: '/gears/gear-5.svg', innerText: "BE HUMBLE", yOffset: -560, diameter: 256, angleToPrevious: 315, initialAngle: 30},
];

const MobileGearSection = () => {
    return (
        <div>
            Mobile View
        </div>

    );
};

export default MobileGearSection;