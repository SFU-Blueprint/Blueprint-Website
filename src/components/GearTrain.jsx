import Gear from './Gear.jsx'; // If the Gear component is in a separate file with a .jsx extension
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
    let diameterSum = 0;

    for (let index = 0; index < gears.length; index++) {
        let gear = gears[index];

        const { xOffset, yOffset, diameter } = gears[index - 1] ?? {};
        console.log("Previous gear: ",gears[index - 1])
        const radius = (diameter ?? 0) / 2;
        const xCenter = (xOffset ?? 0) + radius;
        const yCenter = (yOffset ?? 0) + radius;

        const offset = gears[index - 1] ? (100) * minDiameter / gear.diameter : 0;
        const xAng = Math.cos(ConvertToRadians(gear.angleToPrevious ?? 270));
        const yAng = Math.sin(ConvertToRadians(gear.angleToPrevious ?? 270));

        if(index > 0){
            gears[index] = {
                ...gear,
                xOffset: xCenter - gear.diameter / 2 + xAng * radius,
                yOffset: gears[index-1].yOffset + yCenter - yAng * radius,//yCenter - yAng * radius,
                // top: -100 * index,
                top: 0,
                left: gear.xOffset,
                direction: index % 2 ? 'left' : 'right',
            };
        }
        console.log(gear.diameter, gear.xOffset)
        diameterSum += gear.diameter??0;
    }

    const gearHtml = gears.map((gear, index) => (
        <Gear key={index} gear={gear}/>
    ));

    return (
        <>
            {gearHtml}
        </>
    );
}

export default GearTrain;
