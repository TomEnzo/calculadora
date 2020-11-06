let num0;
let num1;
let num2;
let num3;
let num4;
let num5;
let num6;
let num7;
let num8;
let num9;
let resultado;
let flagNovo = true;
let flagPrimeiraVez = true;
let flagPrimeiraVezResul = true;
let flagPrimeiraVez0 = true;
let operacao;
let ultimoValor;

limpar();

function button0(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }
    let display = document.getElementById("idNumber").value;

    
    num0 = 0;
    console.log(num0);

    document.getElementById("idNumber").value = display + num0;
}


function button1(){


    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num1 = 1;
    console.log(num1);

    document.getElementById("idNumber").value = display + num1;
    
}

function button2(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num2 = 2;
    console.log(num2);

    document.getElementById("idNumber").value = display + num2;
}

function button3(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num3 = 3;
    console.log(num3);

    document.getElementById("idNumber").value = display + num3;
}

function button4(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num4 = 4;
    console.log(num4);

    document.getElementById("idNumber").value = display + num4;
}

function button5(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num5 = 5;
    console.log(num5);

    document.getElementById("idNumber").value = display + num5;
}

function button6(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num6 = 6;
    console.log(num6);
    document.getElementById("idNumber").value = display + num6;
}

function button7(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num7 = 7;
    console.log(num7);

    document.getElementById("idNumber").value = display + num7;
}

function button8(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }

    let display = document.getElementById("idNumber").value;
    num8 = 8;
    console.log(num8);

    document.getElementById("idNumber").value = display + num8;
}

function button9(){

    if (flagNovo) {
        flagNovo = false;
        limparTela();
    }


    let display = document.getElementById("idNumber").value;
    num9 = 9;
    console.log(num9);

    document.getElementById("idNumber").value = display + num9;
}

function somar(){
    
    let display = document.getElementById("idNumber").value;

    resultado = resultado + Number(display);
    document.getElementById("idNumber").value = resultado;
    flagNovo = true;
    operacao = "+";
    console.log(operacao);



}

function subtrair(){

    let display = document.getElementById("idNumber").value;

    if (flagPrimeiraVez) {
        flagPrimeiraVez = false;
        resultado = Number(display);
    }else{
        resultado = resultado - Number(display);

    }
    document.getElementById("idNumber").value = resultado;
    flagNovo = true;
    operacao = "-"
    console.log(operacao);

}

function dividir(){

    let display = document.getElementById("idNumber").value;

    
    if (flagPrimeiraVez) {
        flagPrimeiraVez = false;
        resultado = Number(display);
    }else{
        resultado = resultado / Number(display);

    }
    document.getElementById("idNumber").value = resultado;
    flagNovo = true;
    operacao = "/";
    console.log(operacao);

}

function multiplicar(){

    let display = document.getElementById("idNumber").value;

    if (flagPrimeiraVez) {
        flagPrimeiraVez = false;
        resultado = 1;
    }
    resultado = resultado * Number(display);
    document.getElementById("idNumber").value = resultado;
    flagNovo = true;
    operacao = "*";
    console.log(operacao);

}

function limpar(){
    resultado = 0;
    document.getElementById("idNumber").value = 0;
    flagNovo = true;
    flagPrimeiraVez = true;
    flagPrimeiraVezResul = true;

}

function limparTela(){

    document.getElementById("idNumber").value = "";

}

function ponto(){

    var display = document.getElementById("idNumber").value;

    document.getElementById("idNumber").value = display + ".";

}

function potenciacao(){

    let display = document.getElementById("idNumber").value;

    if (flagPrimeiraVez) {
        flagPrimeiraVez = false;
        resultado = Number(display);
    }else{
        resultado = Number(display) * Number(display);

    }
    document.getElementById("idNumber").value = resultado;
    flagNovo = true;
    operacao = "x²";
    console.log(operacao);


}

function raizQuadrada(){

    let display = document.getElementById("idNumber").value;

    if (flagPrimeiraVez) {
        flagPrimeiraVez = false;
        resultado = Number(display);
    }else{
        resultado = Math.sqrt(display);

    }
    document.getElementById("idNumber").value = resultado;
    flagNovo = true;
    operacao = "√";
    console.log(operacao);


}

function porcentagem(){
    let display = document.getElementById("idNumber").value;

    if (flagPrimeiraVez) {
        flagPrimeiraVez = false;
        resultado = Number(display);
    }else{
        resultado = Number(display) / 100;
    }
    document.getElementById("idNumber").value = resultado;
    flagNovo = true;
    operacao = "%";
    console.log(operacao);


}
        
function resultado1(){
    if (flagPrimeiraVezResul) {
        flagPrimeiraVezResul = false;
        ultimoValor = Number(document.getElementById("idNumber").value);

    }
    
    switch (operacao) {
        case "+":
            resultado = resultado + ultimoValor;
            break;

        case "-":
            resultado = resultado - ultimoValor;
            break;

        case "*":
            resultado = resultado * ultimoValor;
            break;

        case "/":
            resultado = resultado / ultimoValor;
            break;

        case "√":
            resultado = Math.sqrt(ultimoValor);
            break;
        case "x²":
            resultado = resultado * resultado;
            break;
        case "%":
            resultado = resultado / 100;
            break;
    }   
    document.getElementById("idNumber").value = resultado;
}