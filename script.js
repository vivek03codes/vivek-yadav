"use strict";
const aboutMeTab = document.querySelector(".about-me");
const aboutMeSection = document.querySelector(".about");

const allSectionsTab = document.querySelectorAll("#nav-btn");
// console.log(allSectionsTab);

allSectionsTab.forEach((section, i) => {
  section.addEventListener("click", function (e) {
    document
      .querySelector(`.section--${i + 1}`)
      .scrollIntoView({ behavior: "smooth" });
  });
});
