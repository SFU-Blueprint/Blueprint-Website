import React from 'react';

const OutlineButton = (
    {
        innerText = "undefined",
        onClick = ()=>console.log("On click not defined"),
    }
) => {
    return (
        <button className="btn btn-outline" onClick={()=>onClick()}>
            {innerText}
        </button>
    );
};

export default OutlineButton;