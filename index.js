const tabela = document.querySelector('.info')
const produto = document.querySelector('.productSelect')
const valor = document.querySelector('.priceValue')
const form = document.querySelector('#form')

function addVenda(event) {
    event.preventDefault();

    let product = produto.value
    let value = parseInt(valor.value)

    tabela.style.display = 'flex'
    tabela.innerHTML = '<h3>Venda adicionada com sucesso!</h3>'
    
    class venda {
        constructor(produto = 'undefined', valor = 0) {
            this.produto = produto
            this.valor = valor
        }
    }

    const vendaFinal = new venda(product, value)
    console.log(vendaFinal)
}

form.addEventListener('submit', addVenda)

