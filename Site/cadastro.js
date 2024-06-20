document.getElementById("CEP").addEventListener("blur", PesquisarCep);
document.getElementById("registrarFor").addEventListener("click", ValidarRegistro)
document.getElementById("registrarBen").addEventListener("click", ValidarRegistro)


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

function ValidarRegistro(){
    numeroNis = document.getElementById('numeroNis').value
    emailBen = document.getElementById('emailBen').value

    if (numeroNis.length < 11){
        alert ('Número NIS inválido.')
    }
    else{
        window.location.href = "cadastro-concluido.html"
    }
}



