import Gear from './Gear.jsx'; // If the Gear component is in a separate file with a .jsx extension
import { ConvertToRadians } from "../../../utils/convertToRadians";
import React from "react";

/**
 * Represents a gear train.
 *
 * @typedef {Object} GearTrainProps
 * @property {Gear[]} gears - An array of gear objects.
 */

function GearTrain(props) {
    const { gears } = props;

    for (let index = 0; index < gears.length; index++) {
        let gear = gears[index];

        const { xOffset, diameter } = gears[index - 1] ?? {};
        const radius = (diameter ?? 0) / 2;
        const xCenter = (xOffset ?? 0) + radius;
        const xAng = Math.cos(ConvertToRadians(gear.angleToPrevious ?? 270));

        if(index > 0){
            gears[index] = {
                ...gear,
                xOffset: xCenter - gear.diameter / 2 + xAng * radius,
                yOffset: gear.yOffset,
                direction: index % 2 ? 'left' : 'right',
            };
        }
    }

    const gearHtml = gears.map((gear, index) => (
        <Gear key={index} gear={gear}/>
    ));

    return (
        <>{gearHtml}</>
    );
}

export default GearTrain;
