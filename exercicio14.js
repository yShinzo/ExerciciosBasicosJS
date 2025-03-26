//Positivo ou Negativo
numero_PN = parseFloat(prompt("Qual número deseja verificar se é positivo ou negativo?"))

if(numero_PN > 0){
    console.log("Seu número é positivo; Todo número maior que zero, é considerado um número positivo")
}
else if(numero_PN < 0){
    console.log("Seu número é negativo; Todo número menor que zero, é considerado um número negativo")
}
else if(numero_PN == 0){
    console.log("Seu número é zero, de valor zero e representa zero; Sem graça")
}