import athlete from "./img/athlete-small.png";
import daria from "./img/dariashevtsova.jpg";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import daria2 from "./img/dariashevtsova2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
    return [{
            title: "The Athlete",
            mainImg: athlete,
            secondaryImg: athlete2,
            url: "/work/the-athlete",

            awards: [{
                    title: "Truly A masterpiece",
                    description: "Lorem Ipsum is simply dummy text of the print",
                },
                {
                    title: "It's okay lmao.",
                    description: "Lorem Ipsum is simply dummy text of the print",
                },
            ],
        },

        {
            title: "Good Times",
            mainImg: daria,
            secondaryImg: daria2,
            url: "/work/good-times",

            awards: [{
                    title: "Truly A masterpiece",
                    description: "Lorem Ipsum is simply dummy text of the print",
                },
                {
                    title: "It's okay lmao.",
                    description: "Lorem Ipsum is simply dummy text of the print",
                },
            ],
        },
        {
            title: "The Racer",
            mainImg: theracer,
            secondaryImg: theracer2,
            url: "/work/the-racer",

            awards: [{
                    title: "Truly A masterpiece",
                    description: "Lorem Ipsum is simply dummy text of the print",
                },
                {
                    title: "It's okay lmao.",
                    description: "Lorem Ipsum is simply dummy text of the print",
                },
            ],
        },
    ];
};