// mentioned skills
let skills = [
  "ccpp",
  "python",
  "js",
  "react",
  "next",
  "mysql",
  "express",
  "ml",
  "mongo",
  "git",
];

// all skill wrappers
let skillWrapper = skills.map((i) => document.querySelector(`#${i}-wrap`));

// setTimeout id
let animatorId = 0;

// skills already animated
let shownSet = new Set();

// distance from top
function Calc_Dist(element) {
  return (
    element.getBoundingClientRect().top -
    window.innerHeight +
    element.getBoundingClientRect().height
  );
}

function skillAnimator() {
  clearTimeout(animatorId);
  setTimeout(() => {
    for (let i = 0; i < skills.length; i++) {
      if (Calc_Dist(skillWrapper[i]) < 10) {
        let text = document.querySelector(
          `#${skills[i]}-wrap .skillBar`
        ).innerText;
        document
          .querySelector(`#${skills[i]}`)
          .style.setProperty("--width", text);
        shownSet.add(skills[i]);
      }
    }
  }, 200);

  // remove event listener
  if (shownSet.size === skills.length) {
    document.removeEventListener("scroll", skillAnimator);
  }
}

document.addEventListener("scroll", skillAnimator);
