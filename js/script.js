//script ser axecutado assim que a página estiver carregada
window.addEventListener('load',start);
//variavel global para armazenar nomes
var globalNames = ['um','dois','tres'];

//função de start
function start() {
    //funcão para não recarregar a pagina ao add no form
    preventFormSubmit();

}  

//criar funcao prevent
function preventFormSubmit () {

    //impelentar fuction
    function handleFormSubmit(event){
    //evitar que a pagina seja recarregada
    event.preventDefault();
    }

    //referenciar o form
    const form = document.querySelector('form');
    //adc evento no form
    form.addEventListener('submit', handleFormSubmit);
}