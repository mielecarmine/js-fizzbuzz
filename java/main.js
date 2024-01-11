// Creo un ciclo For con i; i<=100; i++;
// - All'interno del For faccio 3 controlli
//   - Se i è un multiplo di 15 allora stampa FizzBuzz
//   - Altrimenti se i è un multiplo di 5 allora stampa Buzz
//   - Altrimenti se i è un multiplo di 3 allora stampa Fizz
// - Fine

const boxContainerElement = document.getElementById("box-container");

for (let i = 1; i <= 100; i++) {
  const boxElement = document.createElement("div");
  boxElement.className = "box p-2 text-center";

  if (i % 15 == 0) {
    boxElement.classList.add("fizzbuzz");
    boxElement.innerText = "FizzBuzz";
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    boxElement.classList.add("buzz");
    boxElement.innerText = "Buzz";
    console.log("Buzz");
  } else if (i % 3 == 0) {
    boxElement.classList.add("fizz");
    boxElement.innerText = "Fizz";
    console.log("Fizz");
  } else {
    boxElement.innerText = i;
    console.log(i);
  }

  boxContainerElement.append(boxElement);
}
