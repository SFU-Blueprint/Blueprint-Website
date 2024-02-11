import {useTranslation} from "react-i18next";

/**
 * React component representing a list of links to different anchor points in a page
 * @param {Object} props - The props object.
 * @param {string} props.page - The page id
 */
const AnchorList = (props) => {
    const {t} = useTranslation()

    const navigateToAnchorPoint = (anchor) => {
        console.log("Navigate to: ",anchor);
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="text-xl mb-6 font-semibold">{t(`${props.page}.name`)}</div>
            {t(`${props.page}.anchors`).map((anchor)=>
                <div
                    className="text-sm"
                    onClick={navigateToAnchorPoint(anchor)}
                >{anchor}</div>
            )}
        </div>
    )
}

export default AnchorList;