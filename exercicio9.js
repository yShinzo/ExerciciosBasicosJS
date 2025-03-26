//comparação
let numero1 = parseFloat(prompt("Me diga, qual número deseja comparar"))
let numero2 = parseFloat(prompt("Quer comparar com"))

if(numero1 > numero2){
    console.log("O número", numero1 + " é maior que o número", numero2)
}
else if(numero1 < numero2){
    console.log("O número", numero1 + " é menor que o número", numero2)
}
else if(numero1 == numero2){
    console.log("Ambos os número são iguais, portanto, não há um maior ou um menor")
}