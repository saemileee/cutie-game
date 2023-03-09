const character = document.getElementById("character");
const block = document.getElementById("block");

document.addEventListener("click", () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
});

const checkDead = setInterval(function () {
  //셋인터벌을 사용했기 때문에 캐릭터가 점프할 때 거의 프레임단위로 탑 포지션을 받아올 수 있음
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose.");
  }
}, 10);
