import {useTranslation} from "react-i18next";

/**
 * React component representing a list of links to different anchor points in a page
 * @param {Object} props - The props object.
 * @param {string} props.page - The page id
 */
const AnchorList = (props) => {
    const {t} = useTranslation()

    const navigateToAnchor = (page, section) => {
        // Construct the URL with the page path and the anchor point
        const url = `/${page}#${section}`;
        // Navigate to the constructed URL
        window.location.href = url;
    };

    const replaceDashesWithSpaces = (str) => str.replace(/-/g, ' ');

    return (
        <div className="flex flex-col gap-2">
            <div className="text-xl mb-6 font-semibold">{t(`${props.page}.name`)}</div>
            {t(`${props.page}.anchors`).map((anchor)=>
                <div
                    className="text-sm text-hover w-fit"
                    key={anchor}
                    onClick={(e) => navigateToAnchor(props.page,anchor)}
                >{replaceDashesWithSpaces(anchor)}</div>
            )}
        </div>
    )
}

export default AnchorList;