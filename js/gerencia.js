import "../scss/style.scss"

document.querySelector("#button_cadastrar").addEventListener("click", dispara)

async function dispara() {
    const curso = document.querySelector("#input_title").value
    const descricao = document.querySelector("#input_description").value
    
    const dadosCompletos = await cadastraCurso(curso, descricao)
}


async function cadastraCurso (curso, descricao){
    const corpoDaRequisicao = {
        title: curso,
        description: descricao
    }

    await fetch ("https://api-dwi.herokuapp.com/api/tutorials",{
        method: "POST",
        body: JSON.stringify(corpoDaRequisicao),
        headers: { "Content-type": "application/json" }
    })
}