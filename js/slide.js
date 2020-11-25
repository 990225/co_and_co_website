"use strict";

const wordSlidePrevBtn = document.querySelector(".word__slide__btn-prev");
const wordSlideNextBtn = document.querySelector(".word__slide__btn-next");

const wordSlideItem = document.querySelectorAll(".word__slide__item");

let wordSlideIndex = 0;

wordSlidePrevBtn.addEventListener("click", () => {
  if (wordSlideIndex > 0) {
    wordSlideMove(wordSlideIndex - 1);
  } else {
    wordSlideMove(wordSlideItem.length - 1);
  }
});

wordSlideNextBtn.addEventListener("click", () => {
  if (wordSlideIndex < wordSlideItem.length - 1) {
    wordSlideMove(wordSlideIndex + 1);
  } else {
    wordSlideMove(0);
  }
});

function wordSlideMove(num) {
  const wordSlideContainer = document.querySelector(".word__slide");
  const wordSlideItemWidth = wordSlideItem[0].clientWidth;
  const WORD_MARGIN = 20;

  wordSlideContainer.style.right = `calc(
      ${wordSlideItemWidth * num}px +
      ${WORD_MARGIN * num}vw
      )`;

  const wordSlideProgressBar = document.querySelector(
    ".word__slide__progressBar"
  );
  const WORD_PERCENT = 100 / (wordSlideItem.length - 1);

  wordSlideProgressBar.style.width = `${WORD_PERCENT * num}%`;

  wordSlideIndex = num;
}

const seeSlidePrevBtn = document.querySelector(".see__slide__btn-prev");
const seeSlideNextBtn = document.querySelector(".see__slide__btn-next");

const seeSlideItem = document.querySelectorAll(".see__slide__item");

let seeSlideIndex = 0;

seeSlidePrevBtn.addEventListener("click", () => {
  if (seeSlideIndex > 0) {
    seeSlideMove(seeSlideIndex - 1);
  } else {
    seeSlideMove(seeSlideItem.length - 1);
  }
});

seeSlideNextBtn.addEventListener("click", () => {
  if (seeSlideIndex < seeSlideItem.length - 1) {
    seeSlideMove(seeSlideIndex + 1);
  } else {
    seeSlideMove(0);
  }
});

function seeSlideMove(num) {
  const seeSlideContainer = document.querySelector(".see__slide");
  const seeSlideItemWidth = seeSlideItem[0].clientWidth;
  const SEE_MARGIN = 80;

  seeSlideContainer.style.right = `calc(
    ${seeSlideItemWidth * num}px + 
    ${SEE_MARGIN * num}px
    )`;

  const seeSlideProgressBar = document.querySelector(
    ".see__slide__progressBar"
  );
  const SEE_PERCENT = 100 / (seeSlideItem.length - 1);

  seeSlideProgressBar.style.width = `${SEE_PERCENT * num}%`;

  seeSlideIndex = num;
}
