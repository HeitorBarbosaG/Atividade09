var n1 = prompt("Digite o primeiro número: ")
var n2 = prompt("Digite o segundo número: ")
var n3 = prompt("Digite o terceiro número: ")
var n4 = prompt("Digite o quarto número: ")
let media = 0
let soma = 0
soma = parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4)
media = soma/4
document.write("A soma dos números é: ",soma+'\n')
document.write("A média dos números é: ",media+'\n')
var cont = prompt("Digite o número de números que quer digitar agora: ")
var i = 0
var adicao = 0
for(i;i<cont;i++){
    var num0 = prompt("Digite o número: ")
    adicao = parseInt(adicao) + parseInt(num0)
}
document.write("A soma dos números é: ",adicao+'\n')
document.write("A média dos números é: ",adicao/cont+'\n')
var num1 = prompt("Digite um número: ")
var num2 = prompt("Digite um número maior que o anterior: ")
var k = 0
var total = 0
k = parseInt(num1)+1
while(k<num2){
    if(k%2 === 1){
        total += k
    }
    k++
} document.write("A soma dos números ímpares entre esse dois números é: ",total)
