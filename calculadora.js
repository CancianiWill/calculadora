var valorVisor = 0;
var numeroA;
var numeroB;
var operacao;


function botao(dado) {
    var auxiliar = document.getElementById("visor").value; // auxiliar recebe o valor pressionado no visor
    document.getElementById("visor").value = auxiliar + dado; // visor recebe o valor de auxiliar e concatena com dado
    valorVisor = document.getElementById("visor").value = auxiliar + dado;
};

function btn_soma(caracter){
    numeroA = valorVisor;
    operacao = "+";
    limpar();
};

function btn_subtrai(caracter){
  numeroA = valorVisor;
  operacao = "-";
  limpar();
};

function btn_multiplica(caracter){
  numeroA = valorVisor;
  operacao = "*";
  limpar();
};

function btn_divide(caracter){
  numeroA = valorVisor;
  operacao = "/";
  limpar();
};
function reset() {
    // limpa o visor
    document.getElementById('visor').value = '';
    valorVisor = 0;
    operacao = "";
};
function limpar(){
    document.getElementById('visor').value = '';  
};

function btn_igual(){
    numeroB = valorVisor;
    calcular();
};

function calcular() {
    // fazendo o calculo e colocando no visor
    var total = 0;
    var ultimoTotal = 0;
      switch(operacao){
        case "+":
          total = parseFloat(numeroA) + parseFloat(numeroB);
          break;
        case "-":
            total = parseFloat(numeroA) - parseFloat(numeroB);
            break;
        case "*":
          total = parseFloat(numeroA) * parseFloat(numeroB);
          break;
        case "/":
          total = parseFloat(numeroA) / parseFloat(numeroB);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('visor').value = total;
      valorVisor = ultimoTotal;
};