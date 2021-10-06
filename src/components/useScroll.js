//reusable hook

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
    const controlsAnim = useAnimation();
    const [element, view] = useInView({ threshold: 0.5 });

    if (view) {
        controlsAnim.start("show");
    } else {
        controlsAnim.start("hidden");
    }

    return [element, controlsAnim];
};