let txtLetter = document.getElementById("text");
let txtResult = document.getElementById("display");
let pageNumber = document.getElementById("pageNumber");
let characters = document.getElementById("characters");

let pageCount = 0;

let characterCount;
txtLetter.addEventListener("keypress", countwords);

function countwords() {
  let letter = txtLetter.value;
  let cleanTxt = letter.replace(/\s+/g, " ");
  let splitWords = cleanTxt.split("");
  let characterCount = splitWords.length;

  if (characterCount > 0) {

    characters.innerHTML = `${characterCount++}`;
    // for (var i = 0; i < numbers.length; i++) {
    //   if (numbers[i] % num === 0) {
    //     multiples.push(numbers[i]);
    //   }
    // }


    while (characterCount % 160 == 0) {
      console.log(pageCount)
      pageCount += 1;
      characterCount++;

    }
  }
  pageNumber.innerHTML = pageCount;
}