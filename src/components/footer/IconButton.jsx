import {useTranslation} from "react-i18next";

/**
 * React component representing a list of links to different anchor points in a page
 * @param {Object} props - The props object.
 * @param {string} props.id - Icon and text id */
const IconButton = (props) => {
    const {t} = useTranslation()

    return (
        <div className="flex flex-col">

            <div className="text-sm">{t(`${props.id}.name`)}</div>
        </div>
    )
}

export default IconButton;