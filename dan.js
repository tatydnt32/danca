console.clear()
const prompt = require('prompt-sync')();

console.log( 
    "Era uma vez... uma menina que sonhava em participar do torneio mundial de dança.Para poder Representar o pais ela precisa passar por 5 cidades.Vamos começar?" );
    var sim = 0; // (precisa começar como 0)
var resposta = ""; //(precisa começar em branco)

console.log()
 
resposta = prompt("SP:Você esta no inicio da caminhada você sabe dançar?");/* (Esse prompt serve pra mostrar uma mensagem e esperar uma resposta) */

if(resposta == "sim")
{
sim = sim +1; /* (ele só vai adicionar caso a pessoa responda sim, se não é igual a zero então não precisamos comprar, a menos que você queira adicionar um aviso de resposta incorreta) */
console.log("Parabéns você ja é uma dançarina")
}
resposta = prompt("Chegamos na 2º cidade RJ você conhece o FUNK?");
if(resposta == "sim")
{
sim = sim +1;
console.log("Você esta no caminho certo.")
}
resposta = prompt("Chegamos na 3ª Cidade PE você sabe dançar FORRO?");
if(resposta == "sim")
{sim = sim +1;
    console.log("Estamos encantado com a sua apresentação")
}

resposta = prompt("Estamos na 4 cidade PR e ai ja sabe dançar Sertanejo?")
if(resposta =="sim")
{sim = sim +1;
console.log("É isso ai você arrassou no dança")}

resposta = prompt("Chegamos na ultima cidade BH e queremos saber você sabe dançar em grupo?")
if(resposta =="sim")
{sim = sim +1 
console.log("Trabalhar em equipe é Muito importante")}

if(sim == 5) //(no fim de tudo é feito a comparação) 
{
console.log("Prepare as Malas você vai para Turquia PARTICIPAR DO TORNEIO MUNDIAL");
}
else if(sim == 4)
{
console.log("Prepare as Malas você foi selecionada para ficar em Stand by");
}
else if(sim == 3)
{console.log("Não fique triste , Faltou pouco para você ser Selecionada.")}

else if (sim == 2 )
console.log("Não Desista de Dançar.")

else if (sim == 1)
console.log("Não Desista de Dançar.")

else
console.log("Não foi dessa vez , Faça mais aulas.")
