window.onload = function() {
    console.log('oi!');
}

function salvar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    var usuario = {
        nome: nome,
        email: email
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
}