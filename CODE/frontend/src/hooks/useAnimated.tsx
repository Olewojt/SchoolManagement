import { useState, useEffect } from "react";

const useAnimated = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        const animated = localStorage.getItem("isAnimated") === "true";
        setState(animated);
    }, []);

    return state;
};

export default useAnimated;
