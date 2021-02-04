
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
    //alert("Obrigado por clicar ")
}

function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
    
}

function funcaoChance(elemento){
    elemento.value
}


/*
var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}

//var idade = prompt("Qual sua idade ? ");
validaIdade(idade)
console.log(validar);
*/



/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10))
*/

/*
var d = new Date();
alert(d);
alert(d.getDay())
alert(d.getHours())
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count)
};
*/

/*
var count = 0
while(count <= 5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade ? ")
//var idade = 18;
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
};
*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas)


//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome)


//array
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop()

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



//var nome = "Charles Miranda ";
//var idade = 27;
//var frase = " Japão é o melhor time do mundo "
//alert(nome + " tem " + idade + " anos ");
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());