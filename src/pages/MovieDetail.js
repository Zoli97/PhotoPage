import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const MovieDetail = () => {
  //get that movie that i looking for.
  //import the movies here and i can check the url where i am to see if it matches the url object from moviestate

  const history = useHistory();
  const url = history.location.pathname;

  //create moviestate
  const [movies, setMovies] = useState(MovieState);

  //extract that specific movie based on url

  const [movie, setMovie] = useState(null);

  //i want this run as soon as the component mounts(click load up the specific movie)
  //verify the url from statemovie url with the url browser that where i am.
  //url changes or history i want execute this useffect

  useEffect(() => {
    const current_movie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(current_movie[0]);
  }, [movies, url]);

  //if the movie not available yet dont render it(fraction)

  return (
    <AwardStyle>
      {" "}
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <Headline>
            <h2> {movie.title} </h2>{" "}
            <img src={movie.mainImg} alt="the athlete" />
          </Headline>{" "}
          <Awards>
            {" "}
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}{" "}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secodnaryimg" />
          </ImageDisplay>{" "}
        </Details>
      )}{" "}
    </AwardStyle>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
//map over each individual award in this awards
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <div>
      <h3> {title} </h3> <div className="line"> </div> <p> {description} </p>{" "}
    </div>
  );
};

export default MovieDetail;
