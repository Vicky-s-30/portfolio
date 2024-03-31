import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="">
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Front-end Developer",
          "Freelancer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
