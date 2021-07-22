let produtos = [
    {
        nome_produto: "Perfume 212 Sexy Edp",
        descricao: "Inspirado numa geração de mulheres ativas, criativas e ligadas à moda",
        preco: "R$ 329,90",
        imagem: "assets/imgs/p1.jpg"
    },
    {
        nome_produto: "Pure XS Eau de Parfum Feminino",
        descricao: "Notas mais aveludadas e quentes, como âmbar e baunilha",
        preco: "R$ 459,00",
        imagem: "assets/imgs/p2.jpg"
    },
    {
        nome_produto: "Chloé Eau de Parfum",
        descricao: "Inspirado numa geração de mulheres ativas, criativas e ligadas à moda",
        preco: "R$ 329,90",
        imagem: "assets/imgs/p1.jpg"
    },
    {
        nome_produto: "Perfume 212 Sexy Edp",
        descricao: "Inspirado numa geração de mulheres ativas, criativas e ligadas à moda",
        preco: "R$ 329,90",
        imagem: "assets/imgs/p1.jpg"
    },
    {
        nome_produto: "Perfume 212 Sexy Edp",
        descricao: "Inspirado numa geração de mulheres ativas, criativas e ligadas à moda",
        preco: "R$ 329,90",
        imagem: "assets/imgs/p1.jpg"
    },
    {
        nome_produto: "Perfume 212 Sexy Edp",
        descricao: "Inspirado numa geração de mulheres ativas, criativas e ligadas à moda",
        preco: "R$ 329,90",
        imagem: "assets/imgs/p1.jpg"
    }
]

let carrinho = [];

function salvar() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var usuario = {
        nome: name,
        email: email
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
}

function addCarrinho(produto) {
    var produtoSelecionado = produtos[produto];
    carrinho.push(produtoSelecionado);

    if (carrinho.length > 0) {
        document.getElementById('carrinho-contador').classList.add('contador-carrinho')
        document.getElementById('carrinho-contador').innerHTML = carrinho.length;
    } else {
        document.getElementById('carrinho-contador').classList.remove('contador-carrinho')
    };

    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

window.onload = function() {
    let carrinhoLocalStorage = JSON.parse(localStorage.getItem('carrinho'));
    document.getElementById('lista-carrinho').innerHTML = '<div class="list-ads">' + 
    carrinhoLocalStorage.map(function(produto, index) {
        return `<div class="product-card">
        <div class="inner-card">
            <div class="description-card">
                <div class="title-card" id="212">
                    <span>`+produto.nome_produto+`</span>
                </div>
                <div>
                    <span>`+produto.descricao+`</span>
                </div>
                <div class="price-container">
                    <div class="price">
                        <span>Preço:</span>
                    </div>
                    <div class="value">
                        <span>`+produto.preco+`</span>
                    </div>
                </div>
                <button class="btn-buy" onclick="removerProduto(`+index+`)" type="button">Remover do carrinho</button>
            </div>
            <img style="width: 20%; border-radius: 10px;" src="`+produto.imagem+`" alt="">
        </div>
    </div>`;
    }).join('') + '</div>';

}
