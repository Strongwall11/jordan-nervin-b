import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Full Stack Developer",
          "Senior Front-end Developer",
          "Senior Back-end Developer",
          "Senior Blockchain Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
