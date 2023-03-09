const character = document.getElementById("character");
const block = document.getElementById("block");
const score = document.getElementById("score");
const startBtn = document.getElementById("start-btn");
let scoreCount = 0;

startBtn.addEventListener("click", () => {
  block.classList.add("block-moving");
  scoreCount = 0;
});

function detectLanding() {
  character.classList.remove("animate");

  score.innerHTML = `<strong>score : ${scoreCount}</strong>`;
}

document.addEventListener("click", () => {
  if (block.classList == "block-moving") {
    if (character.classList != "animate") {
      character.classList.add("animate");
      scoreCount += 1;
    }
    setTimeout(detectLanding, 500);
  }
});

const characterFixedTop = parseInt(
  window.getComputedStyle(character).getPropertyValue("top")
);

const checkDead = setInterval(function () {
  //셋인터벌을 사용했기 때문에 캐릭터가 점프할 때 거의 프레임단위로 탑 포지션을 받아올 수 있음
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const characterWidth = parseInt(
    window.getComputedStyle(character).getPropertyValue("width")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  const blockHeight = parseInt(
    window.getComputedStyle(block).getPropertyValue("height")
  );

  if (
    blockLeft < characterWidth &&
    blockLeft > 0 &&
    characterTop >= characterFixedTop - blockHeight
  ) {
    block.style.animation = "none";
    block.style.display = "none";
  }
}, 10);

detectLanding();
