import React from "react";

//GLobal Style
import GlobalStyle from "./components/GlobalStyle";
//IMPORT PAGES
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

//ANimtion
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>{" "}
          <Route path="/work" exact>
            <OurWork />
          </Route>{" "}
          <Route path="/contact">
            <ContactUs />
          </Route>{" "}
          <Route path="/work/:id">
            <MovieDetail />
          </Route>{" "}
        </Switch>{" "}
      </AnimatePresence>{" "}
    </div>
  );
}

export default App;
