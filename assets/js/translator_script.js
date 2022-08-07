let btnTranslate = document.getElementById("btn__translate");
let output = document.getElementById("display__img");

btnTranslate.addEventListener("click", () => {
  let text = document.getElementById("inputText").value;
  const letters = text.toUpperCase().split("").map(replaceSpace);
  console.log(letters);
  let displayImage = "";
  letters.forEach((letter) => {
    displayImage += `<img src="assets/img/${letter}.png" title="${letter} class="swiper-slide"/>`;
  });
  output.innerHTML = `${displayImage}`;
  console.log(letters);
});

function replaceSpace(element) {
  if (element === " ") {
    return "space";
  } else {
    return element;
  }
}

/*==================== SWIPER ====================*/
// var swiper = new Swiper('.swiper', {
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     autoplay:{
//         disableOnInteraction:false
//     }
// });
