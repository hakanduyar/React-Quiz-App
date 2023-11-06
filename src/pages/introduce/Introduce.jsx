import React from "react";
import "./Introduce.css";
import Dropdown from "../../../components/dropdown/Dropdown";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://scontent.fist6-1.fna.fbcdn.net/v/t39.30808-6/266063662_547905400024321_545818210580367969_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n_999t_OeFsAX-_qpih&_nc_ht=scontent.fist6-1.fna&oh=00_AfDIxeK-tyis5p9RAZLBlGwu1rH2Hs9cyVbrIJax4SlL8A&oe=654D194D"
          alt=""
        />
        <Dropdown />
      </div>
    </div>
  );
};

export default Introduce;
