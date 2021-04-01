//script ser axecutado assim que a página estiver carregada
window.addEventListener('load',start);
//variavel global para armazenar nomes
var globalComent = ['um','dois','tres','quatro'];

//função de start
function start() {
    
    inputComent = document.querySelector('#inputComent');   //AQUI
    //funcão para não recarregar a pagina ao add no form
    preventFormSubmit();
    activateInput();
  
 

}  


//criar funcao prevent
function preventFormSubmit () { 
    function handleFormSubmit(event){ //impelentar fuction
     event.preventDefault();  //evitar que a pagina seja recarregada
    } 

    var form = document.querySelector('form');  //referenciar o form
     form.addEventListener('submit', handleFormSubmit);    //adc evento no form
}  



function activateInput(){
    function insertComent(newComent){ //adc novo coomentário
        globalComent.push(newComent); 
        render(); 
            console.log(globalComent);
         
    }
//capturar texto quando usuário pressionar a tecla "ENTER"
function  handleTyping(event){
    if (event.key === 'Enter') {
         insertComent(event.target.value); //inserir nome
        }
      }

    //monitorar digitação
     inputComent.addEventListener('keyup', handleTyping);

} 

//montar lista - renderizar comentários
function render(){
    var divComents = document.querySelector('#coments');
     divComents.innerHTML = '';   //limpar a div

    var ul = document.createElement('ul');

    for(var i = 0; i < globalComent.length; i++) {
        var currentComent = globalComent[i];

        var li = document.createElement('li');
        var button = document.createElement('button');
        button.textContent = 'x';
        li.textContent = currentComent;
        ul.appendChild(li);
    }
    divComents.appendChild(ul);
    clearInput();
}

//limpar campo depois de comentar
function clearInput(){
    inputComent.value = '';
}
