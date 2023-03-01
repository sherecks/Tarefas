let novatarefa = document.getElementById('novatarefa');
let addtarefa = document.getElementById('addtarefa');
let listatarefa = document.getElementById('listatarefa');
let janelaedicao = document.getElementById('janelaedicao');
let atualizar = document.getElementById('atualizar');
let fechar = document.getElementById('fechar');
let janelaedicaofundo = document.getElementById('janelaedicaofundo');
let idtarefaedicao = document.getElementById('idtarefaedicao');
let tarefanomeedicao = document.getElementById('tarefanomeedicao');
let janelaexcluir = document.getElementById('janelaexcluir');
let janelaexcluirfundo = document.getElementById("janelaexcluirfundo");
let apagar = document.getElementById("apagar");
let fechar2 = document.getElementById('fechar2');


novatarefa.addEventListener('keypress',(e) =>{

    if(e.keyCode == 13){
        let tarefa = {
            nome: novatarefa.value,
            id: gerarid(),
        }
        addtarefas(tarefa);

    }
});

fechar2.addEventListener('click',(e) =>{
    limpar();
});

fechar.addEventListener('click',(e) => {
    alternar();
});

addtarefa.addEventListener('click',(e) => {
    let tarefa = {
        nome: novatarefa.value,
        id: gerarid(),
    }
    addtarefas(tarefa);

});

atualizar.addEventListener('click', (e) =>{
    e.preventDefault();

    let idtarefa = idtarefaedicao.innerHTML.replace('#','');
    let tarefa = {
        nome: tarefanomeedicao.value,
        id: idtarefa
    }

    let tarefaatual = document.getElementById(''+idtarefa+'');

    if(tarefaatual){
        let li = tagli(tarefa);
        listatarefa.replaceChild(li, tarefaatual);
        alternar();
    }else{
        alert('Elemento não encontrado');
    }

});

apagar.addEventListener('click', (e) => {

    e.preventDefault();
    limpar();
    
})
    
function gerarid() {
    return Math.floor(Math.random() * 3000)
    
}

function addtarefas(tarefa) {
    let li = tagli(tarefa);
    listatarefa.appendChild(li);
    novatarefa.value = '';
}

function tagli(tarefa) {
    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('texto');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let editar = document.createElement('button');
    editar.classList.add('acao');
    editar.innerHTML = '<i class="fa fa-pencil"> </i>'
    editar.setAttribute('onclick', 'editar('+tarefa.id+')');

    let excluir = document.createElement('button');
    excluir.classList.add('acao');
    excluir.innerHTML = '<i class="fa fa-trash"> </i>'
    excluir.setAttribute('onclick', 'excluir('+tarefa.id+')');
    
    div.appendChild(editar);
    div.appendChild(excluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}


function editar(idtarefa) {
    let li = document.getElementById('' + idtarefa + '');
    if(li){
        idtarefaedicao.innerHTML = '#' + idtarefa;
        tarefanomeedicao.value = li.innerText;
        alternar();
    }else{
        alert('Elemento não encontrado');
    }
    
}

function excluir(idtarefa) {

    let li = document.getElementById('' + idtarefa + '');
    if(li){
        listatarefa.removeChild(li);
        limpar();
    }else{
        alert('Elemento não encontrado');
    }
    
}

function alternar() {
    janelaedicao.classList.toggle('abrir');
    janelaedicaofundo.classList.toggle('abrir');
}

function limpar() {
    janelaexcluir.classList.toggle('abrir');
    janelaexcluirfundo.classList.toggle('abrir');
}