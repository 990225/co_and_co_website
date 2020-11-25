"use strict";

window.addEventListener("load", () => {
  const videoApperItem1 = document.querySelector(".video__marketing__title");
  const videoApperItem2 = document.querySelector(
    ".video > .wrap > .video__link"
  );

  setTimeout(() => {
    videoApperItem1.classList.add("animate");
  }, 300);

  setTimeout(() => {
    videoApperItem2.classList.add("animate");
  }, 500);

  pageWidth();
  apperItem();
});

window.addEventListener("resize", pageWidth);

window.addEventListener("scroll", () => {
  pageWidth();
  apperItem();
});

let width = 0;

function pageWidth() {
  width = window.innerWidth;
}

function apperItem() {
  const screenPos = window.innerHeight / 1.1;

  const textApperItem1 = document.querySelector(".text__title");
  const textApperItem2 = document.querySelector(".text__description");

  const textApperItem1Pos = textApperItem1.getBoundingClientRect().top;
  const textApperItem2Pos = textApperItem2.getBoundingClientRect().top;

  if (width >= 1024) {
    if (screenPos > textApperItem1Pos) {
      textApperItem1.classList.add("animate");

      setTimeout(() => {
        textApperItem2.classList.add("animate");
      }, 200);
    }
  } else if (width < 1024) {
    if (screenPos > textApperItem1Pos) {
      textApperItem1.classList.add("animate");
    }

    if (screenPos > textApperItem2Pos) {
      textApperItem2.classList.add("animate");
    }
  }

  const bestApperItem1 = document.querySelector(".best__title");
  const bestApperItem2 = document.querySelectorAll(".best__article");

  const bestApperItem1Pos = bestApperItem1.getBoundingClientRect().top;
  const bestApperItem2Pos1 = bestApperItem2[0].getBoundingClientRect().top;
  const bestApperItem2Pos2 = bestApperItem2[1].getBoundingClientRect().top;
  const bestApperItem2Pos3 = bestApperItem2[2].getBoundingClientRect().top;
  const bestApperItem2Pos4 = bestApperItem2[3].getBoundingClientRect().top;

  if (screenPos > bestApperItem1Pos) {
    bestApperItem1.classList.add("animate");
  }

  if (width >= 640) {
    if (screenPos > bestApperItem2Pos1) {
      bestApperItem2[0].classList.add("animate");

      setTimeout(() => {
        bestApperItem2[1].classList.add("animate");
      }, 200);
    }

    if (screenPos > bestApperItem2Pos3) {
      bestApperItem2[2].classList.add("animate");

      setTimeout(() => {
        bestApperItem2[3].classList.add("animate");
      }, 200);
    }
  } else if (width < 640) {
    if (screenPos > bestApperItem2Pos1) {
      bestApperItem2[0].classList.add("animate");
    }

    if (screenPos > bestApperItem2Pos2) {
      bestApperItem2[1].classList.add("animate");
    }

    if (screenPos > bestApperItem2Pos3) {
      bestApperItem2[2].classList.add("animate");
    }

    if (screenPos > bestApperItem2Pos4) {
      bestApperItem2[3].classList.add("animate");
    }
  }

  const wordApperItem1 = document.querySelector(".word__title");
  const wordApperItem2 = document.querySelector(".word__slide");

  const wordApperItem1Pos = wordApperItem1.getBoundingClientRect().top;
  const wordApperItem2Pos = wordApperItem2.getBoundingClientRect().top;

  if (screenPos > wordApperItem1Pos) {
    wordApperItem1.classList.add("animate");
  }

  if (screenPos > wordApperItem2Pos) {
    wordApperItem2.classList.add("animate");
  }

  const folkApperItem1 = document.querySelector(".folk__image > .init");
  const folkApperItem2 = document.querySelector(".folk__title");
  const folkApperItem3 = document.querySelectorAll(".folk__list__item");

  const folkApperItem1Pos = folkApperItem1.getBoundingClientRect().top;
  const folkApperItem2Pos = folkApperItem2.getBoundingClientRect().top;
  const folkApperItem3Pos1 = folkApperItem3[0].getBoundingClientRect().top;
  const folkApperItem3Pos2 = folkApperItem3[2].getBoundingClientRect().top;

  if (screenPos > folkApperItem1Pos) {
    folkApperItem1.classList.add("animate");
  }

  if (screenPos > folkApperItem2Pos) {
    folkApperItem2.classList.add("animate");
  }

  if (width >= 1024) {
    if (screenPos > folkApperItem3Pos1) {
      folkApperItem3[0].classList.add("animate");

      setTimeout(() => {
        folkApperItem3[1].classList.add("animate");
      }, 150);

      setTimeout(() => {
        folkApperItem3[2].classList.add("animate");
      }, 300);

      setTimeout(() => {
        folkApperItem3[3].classList.add("animate");
      }, 450);
    }
  } else if (width < 1024) {
    if (screenPos > folkApperItem3Pos1) {
      folkApperItem3[0].classList.add("animate");

      setTimeout(() => {
        folkApperItem3[1].classList.add("animate");
      }, 150);
    }

    if (screenPos > folkApperItem3Pos2) {
      folkApperItem3[2].classList.add("animate");

      setTimeout(() => {
        folkApperItem3[3].classList.add("animate");
      }, 150);
    }
  }

  const seeApperItem1 = document.querySelector(".see__title");
  const seeApperItem2 = document.querySelector(".see__slide");

  const seeApperItem1Pos = seeApperItem1.getBoundingClientRect().top;
  const seeApperItem2Pos = seeApperItem2.getBoundingClientRect().top;

  if (screenPos > seeApperItem1Pos) {
    seeApperItem1.classList.add("animate");
  }

  if (screenPos > seeApperItem2Pos) {
    seeApperItem2.classList.add("animate");
  }

  const footerApperItem1 = document.querySelector(".footer__logo");
  const footerApperItem2 = document.querySelector(".footer__menu__title");

  const footerApperItem1Pos = footerApperItem1.getBoundingClientRect().top;

  if (screenPos > footerApperItem1Pos) {
    footerApperItem1.classList.add("animate");
    footerApperItem2.classList.add("animate");
  }
}

const footerTopBtn = document.querySelector(".footer__btn");

footerTopBtn.addEventListener("click", (ev) => {
  ev.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navBtn = document.querySelector(".nav__btn");

navBtn.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  const navBg1 = document.querySelector(".nav__bg-1");
  const navBg2 = document.querySelector(".nav__bg-2");
  const navConatiner = document.querySelector(".nav > .wrap");
  const navItem = document.querySelectorAll(".nav__link__item");
  const navContact = document.querySelector(".nav__contact");

  if (nav.classList[1]) {
    navBtn.classList.add("active");
    nav.classList.remove("hide");

    setTimeout(() => {
      navBg1.classList.add("appear");
      navBg2.classList.add("appear");
    }, 100);

    setTimeout(() => {
      navItem[0].classList.add("appear");
      navItem[1].classList.add("appear");
      navItem[2].classList.add("appear");
      navItem[3].classList.add("appear");
      navContact.classList.add("appear");
    }, 600);
  } else {
    navBtn.classList.remove("active");
    navConatiner.classList.add("disappear");

    setTimeout(() => {
      navBg2.classList.remove("appear");
    }, 250);

    setTimeout(() => {
      navBg1.classList.remove("appear");
    }, 450);

    setTimeout(() => {
      nav.classList.add("hide");
      navItem[0].classList.remove("appear");
      navItem[1].classList.remove("appear");
      navItem[2].classList.remove("appear");
      navItem[3].classList.remove("appear");
      navContact.classList.remove("appear");
      navConatiner.classList.remove("disappear");
    }, 750);
  }
});
