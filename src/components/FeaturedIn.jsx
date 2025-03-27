import React from "react";
// import assets
import DiscordPicture from "../assets/social/discord.png";
import RedditPicture from "../assets/social/reddit.png";
import AmazonPicture from "../assets/social/amazon.png";
import NetflixPicture from "../assets/social/netflix.png";
import SpotifyPicture from "../assets/social/spotify.png";

function FeaturedIn() {
  return (
    <section>
      <div className="container flex justify-between gap-10 items-center">
        <img src={NetflixPicture} alt="netflix logo" className="w-1/6" />
        <img src={RedditPicture} alt="reddit logo" className="w-1/6" />
        <img src={AmazonPicture} alt="amazon logo" className="w-1/6" />
        <img src={DiscordPicture} alt="discord logo" className="w-1/6" />
        <img src={SpotifyPicture} alt="spotify logo" className="w-1/6" />
      </div>
    </section>
  );
}

export default FeaturedIn;
