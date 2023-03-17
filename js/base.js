export const newColorArray = (arrCount) => {
  const colorArray = [
    "#713a4d",
    "#fbdba8",
    "#9f7c29",
    "#AF2B1E",
    "#1E90FF",
    "#F19CBB",
    "#633A34",
    "#014554",
    "#FF5349",
    "#8A2BE2",
  ];
  return colorArray.slice(0, arrCount / 2);
};

export const concatArr = (array) =>
  array.reduce((a, b) => a.concat([b, b]), []);

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
