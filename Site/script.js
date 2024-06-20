document.getElementById("CEP").addEventListener("blur", PesquisarCep);
document.getElementById("entrar").addEventListener("click", ValidarLogin);

async function PesquisarCep(){
    let cep = document.getElementById('CEP').value

    const apiViaCep = 'https://viacep.com.br/ws/'+ cep + '/json/'

    const resCep = await fetch(apiViaCep)
    const data = await resCep.json()

    if (data.erro == true){
        alert("CEP Inválido")
    }
    else{
        document.getElementById('endereco').value = `${data.logradouro} ${data.bairro} ${data.localidade} ${data.uf}`
    }
}

function ValidarLogin(){
    let cnpj = document.getElementById('cnpjlog').value
    let senha = document.getElementById('senhalog').value
    let erro = document.getElementById('erroLogin').innerHTML

    if ((cnpj != '02.916.265/0001-60') || (senha != '123456')){
        alert("Usuário/ Senha inválida");
    }
    else{
        document.getElementById('entrar').setAttribute(href, "/painel")
    }
}

