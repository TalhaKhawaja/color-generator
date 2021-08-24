const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//const RGBAvalue = 255;

// btn.addEventListener('click', () => {
//     let hexColor = '#';

//     for(let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNumber()]
//     }
//     document.body.style.backgroundColor = hexColor;
// })

export function random_hex(hexCode) {
  let hexColor = "#";

  if (hexCode) {
    hexCode = hexCode.replace("#", "");
    hexColor += hexCode;
  }
  else {
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
  }

  document.body.style.backgroundColor = hexColor;

  return hexColor;
}

// btn.addEventListener("click", () => {
//     const RBGAcolor = random_rgba();
//     document.body.style.backgroundColor = RBGAcolor;
//   });

// function random_rgba() {
//   const RBGAcolor = random_rgba();
//   document.body.style.backgroundColor = RBGAcolor;

//   return `rgba(${Math.floor(Math.random() * RGBAvalue)}, ${Math.floor(
//     Math.random() * RGBAvalue
//   )}, ${Math.floor(Math.random() * RGBAvalue)}, ${Math.random().toFixed(1)})`;
// }
