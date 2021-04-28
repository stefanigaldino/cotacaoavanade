const carregaCotacoes = async () => {

    let resposta = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=6e1903620a2342cf1bc5961349490a53')
    let cotacoes = await resposta.json()
    console.log(cotacoes.rates)
    mostraCotacoes(cotacoes.rates)
}

function mostraCotacoes(rates) {
    console.log(rates)
    let moedas = Object.keys(rates)
    let value = Object.values(rates)
    let conteudo = ""
    for (let index = 0; index < moedas.length; index++) {
        conteudo += `  <article>
     <h2>${moedas[index]}</h2>
     <span>${value[index]}</span>
        </article>`
    }
    document.getElementById("outrasCotacoes").innerHTML = conteudo;
    document.getElementById("cotacaoPrincipal").innerText = rates.BRL;
}
carregaCotacoes()