document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    login(); // Chama a função login
});

function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user == "123456" && password == "36521445256") {
        // Abre a página home na mesma aba
        window.location.href = './home.html';
    } else {
        alert("Usuario ou senha Invalidos");
    }
}
