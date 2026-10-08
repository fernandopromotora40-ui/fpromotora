// ==========================================
// CONFIGURAÇÃO DO WHATSAPP
// ==========================================

// COLOQUE AQUI O NÚMERO DA FERNANDO PROMOTORA
//
// Formato:
// 55 + DDD + número
//
// Exemplo:
// 5574999999999

const NUMERO_WHATSAPP = "5574991383118";


// ==========================================
// MENU MOBILE
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("active");

});


// Fecha o menu quando clicar em algum link

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    // Pegando os dados do formulário

    const nome =
        document.getElementById("nome").value.trim();

    const telefone =
        document.getElementById("telefone").value.trim();

    const servico =
        document.getElementById("servico").value;

    const mensagem =
        document.getElementById("mensagem").value.trim();


    // Criando a mensagem

    const texto =

`Olá, FPromotora!

Meu nome é ${nome}.

Telefone: ${telefone}

Tenho interesse em:
${servico}

${mensagem ? "Mensagem: " + mensagem : ""}`;


    // Criando o link do WhatsApp

    const linkWhatsApp =
        "https://wa.me/" +
        NUMERO_WHATSAPP +
        "?text=" +
        encodeURIComponent(texto);


    // Abrindo WhatsApp

    window.open(linkWhatsApp, "_blank");

});


// ==========================================
// MÁSCARA DE TELEFONE
// ==========================================

const telefoneInput =
    document.getElementById("telefone");


telefoneInput.addEventListener("input", function () {

    let valor = telefoneInput.value
        .replace(/\D/g, "");

    if (valor.length > 11) {

        valor = valor.substring(0, 11);

    }


    if (valor.length <= 10) {

        valor = valor.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{4})(\d)/,
            "$1-$2"
        );

    } else {

        valor = valor.replace(
            /^(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

    }


    telefoneInput.value = valor;

});