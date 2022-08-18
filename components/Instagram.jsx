import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <div
      id="insta"
      className="w-full h-screen flex items-center justify-center text-center"
    >
      <h3 className="lg:text-7xl md:text-5xl text-3xl py-4">
        Follow me on Instagram
        <InstagramEmbed
          className="m-auto mt-8"
          url="https://www.instagram.com/p/BlsQWbKFmQ1/"
          width={328}
        />
      </h3>
    </div>
  );
};

export default Instagram;
