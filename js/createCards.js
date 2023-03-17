export const createCards = (open) => {
  const card = document.createElement("div");
  card.classList.add("card", "main", "g-col-6");

  const openCard = document.createElement("div");
  const hiddenCard = document.createElement("div");

  openCard.classList.add("card", `${open}`, "ok");
  hiddenCard.classList.add("card", "close");

  openCard.style.backgroundColor = open;
  card.append(hiddenCard, openCard);

  return card;
};
