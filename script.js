function encriptar(){
    let texto = document.getElementById("texto").value;
    let titulomsg = document.getElementById("titulo");
    let paragrafo = document.getElementById("paragrafo");
    let img = document.getElementById("imagem");

    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    .replace(/\?/gi, "Qualquer coisa");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titulomsg.textContent = "Texto encriptado com sucesso";
        paragrafo.textContent = "";
        img.src = "./img/3301561.jpg";
    }
    else {
        img.src = "./img/2918314.jpg";
        titulomsg.textContent = "Nenhum texto encontrado";
        paragrafo.textContent = "Digite algo para encriptar ou desencriptar";
        alert("Digite algo!");
    }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let titulomsg = document.getElementById("titulo");
    let paragrafo = document.getElementById("paragrafo");
    let img = document.getElementById("imagem");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .replace(/Qualquer coisa/gi, "?");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titulomsg.textContent = "Texto desencriptado com sucesso";
        paragrafo.textContent = "";
        img.src = "./img/3301561.jpg";
    }
    else {
        img.src = "./img/2918314.jpg";
        titulomsg.textContent = "Nenhum texto encontrado";
        paragrafo.textContent = "Digite algo para encriptar ou desencriptar";
        alert("Digite algo!");
    }
}