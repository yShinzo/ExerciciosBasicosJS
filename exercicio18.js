//Ver se é maior ou menor de idade

userage = parseFloat(prompt("Qual sua idade"))

if(userage > 18){
    console.log("Parabens, você é maior de idade e já pode ir preso")
}
else if(userage < 18){
    console.log("Ainda é menor de idade")
}
else if(userage == 18){
    console.log("Fez 18 anos em até 12 meses atrás")
}