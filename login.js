function logar(){

    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if(login == "peem" && senha == "420"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou Senha');
    }
    
}