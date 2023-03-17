import { newColorArray, concatArr, shuffle } from "./base.js";
import { createCards } from "./createCards.js";
const game = () => {
  settingGame();
};

// **! settingGame --
export const settingGame = () => {
  const title = document.createElement("h2");
  const difContainer = document.querySelector(".difficulty__container");
  difContainer.innerHTML = " ";
  const changeDifficulty = (difficulty) => {
    const button = document.createElement("button");

    button.classList.add("btn-difficulty", "btn", "btn-primary");
    button.textContent = `${difficulty} плиток`;
    button.addEventListener("click", () => startGame(difficulty));
    return button;
  };

  difContainer.append(
    title,
    changeDifficulty(10),
    changeDifficulty(12),
    changeDifficulty(14),
    changeDifficulty(16),
    changeDifficulty(18),
    changeDifficulty(20)
  );
};
// *! startGame --
export const startGame = (difficult) => {
  let firstCard = null;
  let secondCard = null;
  let clickable = true;

  const difContainer = document.querySelector(".difficulty__container");
  const gameTable = document.createElement("div");
  const cards = newColorArray(difficult);
  const duplicateCards = concatArr(cards);
  const restartBtn = document.createElement("button");

  difContainer.innerHTML = "";

  restartBtn.textContent = "Рестарт";
  gameTable.classList.add(
    "game-table",
    "row",
    "row-cols-3",
    "justify-content-md-center"
  );
  gameTable.style.cssText = `--bs-columns: 2`;
  restartBtn.classList.add("btn", "btn-primary", "btn-lg");
  shuffle(duplicateCards);

  duplicateCards.forEach((item) => {
    gameTable.append(createCards(item));
  });

  difContainer.append(gameTable, restartBtn);

  const cardsPlate = document.querySelectorAll(".main");

  let interval = (difficult / 1.5) * 100;

  for (let i = 0; i < gameTable.childNodes.length; i++) {
    gameTable.childNodes[i].classList.add("flip");
  }
  setTimeout(() => {
    for (let i = 0; i < gameTable.childNodes.length; i++) {
      gameTable.childNodes[i].classList.remove("flip");
    }
  }, interval);

  restartBtn.addEventListener("click", settingGame);

  cardsPlate.forEach((card, index) =>
    card.addEventListener("click", () => {
      if (clickable == true && !card.classList.contains("success")) {
        card.classList.add("flip");

        if (firstCard == null) {
          firstCard = index;
        } else {
          if (index != firstCard) {
            secondCard = index;
            clickable = false;
          }
        }
        if (
          firstCard != null &&
          secondCard != null &&
          firstCard != secondCard
        ) {
          if (
            cardsPlate[firstCard].lastElementChild.className ===
            cardsPlate[secondCard].lastElementChild.className
          ) {
            setTimeout(() => {
              cardsPlate[firstCard].classList.add("success");
              cardsPlate[secondCard].classList.add("success");
              firstCard = null;
              secondCard = null;
              clickable = true;
            }, 1000);
          } else {
            setTimeout(() => {
              cardsPlate[firstCard].classList.remove("flip");
              cardsPlate[secondCard].classList.remove("flip");
              firstCard = null;
              secondCard = null;
              clickable = true;
            }, 500);
          }
        }
      }
    })
  );
};
game();
