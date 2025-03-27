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
      <div className="container grid grid-cols-5 items-center mx-auto  md:grid-cols-3">
        <img src={NetflixPicture} alt="netflix logo" className="w-2/3" />
        <img src={RedditPicture} alt="reddit logo" className="w-2/3" />
        <img src={AmazonPicture} alt="amazon logo" className="w-2/3" />
        <div className="flex gap-30 mx-auto md:w-2/3 md:col-start-1 md:col-end-3">
          <img src={DiscordPicture} alt="discord logo" className="w-2/3" />
          <img src={SpotifyPicture} alt="spotify logo" className="w-2/3" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
