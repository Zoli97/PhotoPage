import React, { useState } from "react";
import { motion } from "framer-motion";

//// **if its toggle render out the children otherwise empty dont render out

const ContactToggle = ({ children, title }) => {
  const [contactToggle, setToggle] = useState(true);

  return (
    <motion.div layout onClick={() => setToggle(!contactToggle)}>
      <motion.h2 layout className="h2">
        {title}
      </motion.h2>
      {contactToggle ? children : ""}
    </motion.div>
  );
};

export default ContactToggle;
