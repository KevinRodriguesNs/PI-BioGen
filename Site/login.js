document.getElementById("entrar").addEventListener("click", ValidarLogin);

function ValidarLogin(){
    let cnpj = document.getElementById('cnpjlog').value
    let senha = document.getElementById('senhalog').value

    if ((cnpj == '02.916.265/0001-60') && (senha == '123456')){
        window.location.href = 'painel.html'
    }
    else{
        alert("Usuário / Senha inválida");
    }
}