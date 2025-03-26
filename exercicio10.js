//Verificar se o número é Par
let numeropar = parseFloat(prompt("Será que seu número é Par?"))

if (numeropar % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número inserido não é um número par. Por não ter uma divisão exata por 2, classificamos este número como 'Ímpar'.");
}
