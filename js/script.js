//script ser axecutado assim que a página estiver carregada
window.addEventListener("load", start);

var globalComent = ["Suas artes são lindas, parabéns!"]; //variavel global para armazenar nomes
var isEditing = false;
var currentIdex = null;
//função de start
function start() {
  inputComent = document.querySelector("#inputComent"); //AQUI
  preventFormSubmit();
  activateInput();
}

//criar funcao prevent
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault(); //evitar que a pagina seja recarregada
  }

  var form = document.querySelector("form"); //referenciar o form
  form.addEventListener("submit", handleFormSubmit); //adc evento no form
}

function activateInput() {
  function insertComent(newComent) {
    //adc novo coomentário
    globalComent.push(newComent);
    console.log(globalComent);
  }

  function updateComent(newComent) {
    globalComent[currentIdex] = newComent;
  }
  //capturar texto quando usuário pressionar a tecla "ENTER"
  function handleTyping(event) {
    var hastext = !!event.target.value && event.target.value.trim() !== "";
    if (!hastext) {
      clearInput();
      return;
    }

    if (event.key === "Enter") {
      if (isEditing) {
        updateComent(event.target.value);
      } else {
        insertComent(event.target.value); //inserir nome
      }
      render();
      isEditing = false;
      clearInput();
    }
  }

  //monitorar digitação
  inputComent.addEventListener("keyup", handleTyping);
}

//montar lista - renderizar comentários
function render() {
  //funcao deletetar button
  function createDeleteButton(index) {
    function deleteComent() {
      globalComent.splice(index, 1);
      render();
    }

    //button
    var button = document.createElement("button");
    button.classList.add("deleteButton");
    button.textContent = "x";
    button.addEventListener("click", deleteComent);
    return button;
  }

  function createSpan(coment, index) {
    //function editar
    function editItem() {
      inputComent.value = coment;
      inputComent.focus();
      isEditing = true;
      currentIdex = index;
    }

    var span = document.createElement("span");
    span.textContent = coment;
    span.addEventListener("click", editItem);

    return span;
  }

  var divComents = document.querySelector("#coments");
  divComents.innerHTML = ""; //limpar a div

  var ul = document.createElement("ul");

  for (var i = 0; i < globalComent.length; i++) {
    var currentComent = globalComent[i];

    var li = document.createElement("li");
    var button = createDeleteButton(i);
    var span = createSpan(currentComent, i);

    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }
  divComents.appendChild(ul);
  clearInput();
}

//limpar campo depois de comentar
function clearInput() {
  inputComent.value = "";
}
