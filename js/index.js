import "../scss/style.scss"

executa()


async function executa (){
    const dadosDaAPI = await buscaDadosApi()
    const modifica = await modificaTela(dadosDaAPI)

}


async function buscaDadosApi () {
    const response = await fetch ("https://api-dwi.herokuapp.com/api/tutorials")
    const responseDados = await response.json()
    return responseDados
}

async function modificaTela (dadosDaAPI){
    const CursosRetornados = dadosDaAPI
    let linhasTabela = `
    <thead>
        <td>Título</td>
        <td>Descrição</td>
    </thead>
    <tr>
        <td>Peteca</td>
        <td>Fundamentos da peteca na lama</td>
    </tr>`

    CursosRetornados.forEach(element => {
        linhasTabela += `
        <tr>
            <td>${element.title}</td>
            <td>${element.description}</td>
        </tr>
        `
    });

    const tabelaCurso = document.querySelector("#tabelaCurso")
    tabelaCurso.innerHTML = linhasTabela
}