// import assets
import DiscordPicture from "../assets/social/discord.png";
import RedditPicture from "../assets/social/reddit.png";
import AmazonPicture from "../assets/social/amazon.png";
import NetflixPicture from "../assets/social/netflix.png";
import SpotifyPicture from "../assets/social/spotify.png";

function FeaturedIn() {
  return (
    <section>
      <div className="container flex justify-between gap-10 items-center sm:justify-center">
        {/* print all image: but not with loop */}
        <img
          src={NetflixPicture}
          alt="netflix logo"
          className="w-1/6"
          width={200}
          height={114}
          loading="lazy"
        />
        <img
          src={RedditPicture}
          alt="reddit logo"
          className="w-1/6"
          width={157}
          height={52}
          loading="lazy"
        />
        <img
          src={AmazonPicture}
          alt="amazon logo"
          className="w-1/6"
          width={278}
          height={210}
          loading="lazy"
        />
        <img
          src={DiscordPicture}
          alt="discord logo"
          className="w-1/6"
          width={188}
          height={64}
          loading="lazy"
        />
        <img
          src={SpotifyPicture}
          alt="spotify logo"
          className="w-1/6"
          width={172}
          height={52}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default FeaturedIn;
