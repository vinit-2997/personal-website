import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MS Artificial Intelligence @Northwestern",
          "Ex - Software Developer @Barclays",
          "Looking for Internships for Summer '22",
          "Do checkout my projects:)"
          ,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 80
      }}
    />
  );
}

export default Type;
