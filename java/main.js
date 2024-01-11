// Creo un ciclo For con i; i<=100; i++;
// - All'interno del For faccio 3 controlli
//   - Se i è un multiplo di 15 allora stampa FizzBuzz
//   - Altrimenti se i è un multiplo di 5 allora stampa Buzz
//   - Altrimenti se i è un multiplo di 3 allora stampa Fizz
// - Fine

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else console.log(i);
}
