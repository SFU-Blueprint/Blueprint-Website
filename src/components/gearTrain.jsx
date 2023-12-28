import Gear from './gear.jsx'; // If the Gear component is in a separate file with a .jsx extension
import { ConvertToRadians } from "../utils/convertToRadians";
import React from "react";

/**
 * Represents a gear train.
 *
 * @typedef {Object} GearTrainProps
 * @property {Gear[]} gears - An array of gear objects.
 */

function GearTrain(props) {
    const { gears } = props;

    const minDiameter = gears.reduce((min, gear) => Math.min(min, gear.diameter), gears[0].diameter);

    for (let index = 0; index < gears.length; index++) {
        if (index === 0) continue;
        let gear = gears[index];

        const { xOffset, yOffset, diameter } = gears[index - 1] ?? {};
        const radius = (diameter ?? 0) / 2;
        const xCenter = (xOffset ?? 0) + radius;
        const yCenter = (yOffset ?? 0) + radius;

        const offset = gears[index - 1] ? (100) * minDiameter / gear.diameter : 0;
        const xAng = Math.cos(ConvertToRadians(gear.angleToPrevious ?? 270));
        const yAng = Math.sin(ConvertToRadians(gear.angleToPrevious ?? 270));

        gears[index] = {
            ...gear,
            xOffset: xCenter - gear.diameter / 2 + xAng * radius,
            yOffset: yCenter - yAng * radius - offset,
            initialAngle: gear.initialAngle,
            ratio: gear.diameter / minDiameter
        };
    }

    const gearHtml = gears.map((gear, index) => (
        <Gear
            imageURL={gear.imageURL}
            top={gear.yOffset}
            left={gear.xOffset}
            ratio={gear.ratio ?? 1}
            direction={index % 2 ? 'left' : 'right'}
            initialAngle={gear.initialAngle}
        />
    ));

    console.log(gears);

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {gearHtml}
            </div>
        </>
    );
}

export default GearTrain;
