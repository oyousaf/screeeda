import React from "react";
import Youtube from "react-youtube";

const Banner = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      mute: 1,
    },
  };
  return (
    <div
      id="banner"
      className="w-full h-screen flex items-center justify-center text-center"
    >
      <div className="max-w-[1240px] m-auto">
        <h3 className="lg:text-7xl md:text-5xl text-3xl py-4">
          Like, Comment + Subscribe
        </h3>
        <Youtube
          className="lg:h-[409px] md:h-[273px] h-[170px]"
          videoId="FkVi8nAkmW8"
          opts={opts}
        />
      </div>
    </div>
  );
};

export default Banner;
