import React from "react";
// import assets
import FirstUserPicture from "../../assets/user/user-1.png";
import { IoStar } from "react-icons/io5";
import './Testimonial.scss'

function Testimonial() {
  return (
    <figure className=" border-2 border-border rounded-3xl p-10 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src={FirstUserPicture} alt="" />
          <div className="author">
            <h5 className="text-black font-medium text-3xl">Viezh Robert</h5>
            <address className="text-xl">Warsaw, Poland</address>
          </div>
        </div>
        <div className="score flex items-center gap-3">
          <span className="text-2xl text-black">4.5</span>
          <IoStar size={16} color="#FEA250" />
        </div>
      </div>
      <figcaption className="text-black text-2xl leading-10">
        “Wow... I am very happy to use this VPN, it turned out to be more than
        my expectations and so far there have been no problems. LaslesVPN always
        the best”.
      </figcaption>
    </figure>
  );
}

export default Testimonial;
