import {useTranslation} from "react-i18next";
import React, {Suspense} from "react";

/**
 * React component representing a list of links to different anchor points in a page
 * @param {Object} props - The props object.
 * @param {string} props.id - Icon and text id */
const IconButton = (props) => {
    const {t} = useTranslation()

    const ImportedSVG = React.lazy(() => import(`../assets/${props.id}.svg`));

    return (
        <div>
            {/* Use the dynamically imported SVG component */}
            <Suspense fallback={<div>Loading...</div>}>
                <ImportedSVG />
            </Suspense>
        </div>
    );
}

export default IconButton;