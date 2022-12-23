const tabela = document.querySelector('.info')
const cliente = document.querySelector('#nomeCliente')
const endereco = document.querySelector('#endereco')
const produto = document.querySelector('.productSelect')
const valor = document.querySelector('.priceValue')
const form = document.querySelector('#form')

function addVenda(event) {
    event.preventDefault();

    let product = produto.value
    let client = cliente.value
    let addres = endereco.value
    let value = parseInt(valor.value)

    tabela.style.display = 'flex'
    tabela.innerHTML = '<h3>Venda adicionada com sucesso!</h3>'
    
    class venda {
        constructor(nomeCliente = 'undefined', endereco = 'undefined', produto = 'undefined', valor = 0) {
            this.cliente = client
            this.endereco = addres
            this.produto = produto
            this.valor = valor
        }
    }

    const vendaFinal = new venda(nomeCliente, endereco, product, value)
    console.log(vendaFinal)
}

form.addEventListener('submit', addVenda)

