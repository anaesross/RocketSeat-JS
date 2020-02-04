var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Dormir',
    'Estudar'
];

function renderToDo(){
    listElement.innerHTML = ''; // apaga o conteúdo q tem dentro da ul, deixa como vazio
    for (todo of todos){ //passando o array de strings para variavel todo
        /* console.log(todo); */
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);//indexof retorna a posição do array que o elemento está.
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');//passando a function de deletar passando concatenado a posição do elemento no array


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderToDo();

function addTodo(){
    var todoText = inputElement.value; //aqui tenho(pego o valor digitado) o valor do input

    //adicionar o todoText dentro do array
    todos.push(todoText); //push adiciona no final do array
    inputElement.value = ''; // apaga o texto final do array
    renderToDo(); // renderizar novamente com o novo conteúdo inserido
}

buttonElement.onclick = addTodo;

function deleteToDo(pos){
    todos.splice(pos, 1); // splice = remove uma quantidade de itens no array baseado na posição passada
    renderToDo();

}

