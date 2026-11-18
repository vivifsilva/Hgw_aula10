
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function (event){
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if(usuario === "Heelicopter" && senha === "PJ34SG42pts76") {
        window.location.href = "cadastro.html";
    } else {
        mensagemErro.textContent = "Usuário ou senha incorretos. Tente novamente";
    }
});