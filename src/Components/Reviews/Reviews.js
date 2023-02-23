import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Reviews.css";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function clickForwards() {
    const groups = document.querySelectorAll(".card-group");

    const nextIndex =
      activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      setActiveIndex(nextIndex);
    });
  }

  function clickBackwards() {
    const groups = document.querySelector(".card-group");

    const nextIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      setActiveIndex(nextIndex);
    });
  }

  return (
    <section className="reviews">
      <h1 className="reviews-heading">But don't take our word for it.</h1>
      <div className="card-swiper">
        <div className="card-groups">
          <div className="card-group" data-index="0" data-status="active">
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
          </div>
          <div className="card-group" data-index="1" data-status="unknown">
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
          </div>
          <div className="card-group" data-index="2" data-status="unknown">
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
            <div className="little-card card"></div>
            <div className="big-card card"></div>
          </div>
        </div>
        <div className="card-swiper-buttons">
          <button onClick={clickBackwards}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={clickForwards}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
