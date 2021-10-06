export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 200,
    },

    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },

    exit: {
        opacity: 0,
        transition: {
            duration: 0.55,
        },
    },
};

export const titleAnimation = {
    hidden: { y: 200 },
    show: {
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

//fade for button and p tag

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.8,
        },
    },
};

export const PhotoAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.8 },
    },
};

export const LineAnimation = {
    hidden: {
        width: "0%",
    },

    show: {
        width: "100%",
        transition: { duration: 1 },
    },
};

export const slider = {
    hidden: {
        x: "-130%",
        skew: "45deg",
    },
    show: {
        x: "100%",
        skew: "0deg",
        transition: { ease: "easeOut", duration: 1 },
    },
};

export const SliderContainer = {
    hidde: {
        opacity: 1,
    },

    show: {
        opacity: 1,
        transition: { staggerChildren: 0.3, ease: "easeOut" },
    },
};