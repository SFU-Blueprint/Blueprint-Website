import { useTranslation } from "react-i18next";

/**
 * React component representing a list of links to different anchor points in a page
 * @param {Object} props - The props object.
 * @param {string} props.page - The page id
 */
const AnchorList = (props) => {
    const { t } = useTranslation();

    // Function to navigate to an anchor point in the same page
    const navigateToAnchor = (page, section) => {
        // Construct the URL with the page path and the anchor point
        const url = `/${page}#${section}`;
        window.location.href = url;
    };

    // Function to replace dashes with spaces in a string
    const replaceDashesWithSpaces = (str) => str.replace(/-/g, ' ');

    return (
        <div className="flex flex-col gap-2">
            {/* Render the page name */}
            <div className="text-xl mb-6 font-semibold">{t(`${props.page}.name`)}</div>
            {/* Map over the anchors and render them as clickable links */}
            {t(`${props.page}.anchors`).map((anchor) => (
                <div
                    className="text-sm text-hover w-fit"
                    key={anchor}
                    onClick={(e) => navigateToAnchor(props.page, anchor)}
                >
                    {/* Render the anchor with dashes replaced by spaces */}
                    {replaceDashesWithSpaces(anchor)}
                </div>
            ))}
        </div>
    );
};

export default AnchorList;
