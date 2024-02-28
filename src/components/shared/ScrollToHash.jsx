import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    // Use useMemo to perform the scroll operation only when location changes
    useMemo(() => {
        setTimeout(() => {
            // Get the hash from the current location
            const hash = location.hash;
            // Function to remove the '#' character from the hash
            const removeHashCharacter = (str) => str.slice(1);
            // Find the DOM element with the ID matching the hash
            const item = document.getElementById(removeHashCharacter(hash));
            // Scroll to the found element if it exists
            if (item) {
                item.scrollIntoView({
                    behavior: "smooth",
                    inline: "nearest",
                });
            }
        }, 500);
    }, [location]); // Depend on location to re-run useMemo when it changes

    // Return null because this component doesn't render anything
    return null;
};

export default ScrollToHashElement;
