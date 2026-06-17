// CONFIGURAÇÃO UNIVERSAL DO CONTADOR REGRESSIVO (Data: 13 de Setembro de 2026 às 14:00)
// Formato: Ano, Mês-1 (Setembro é 8), Dia, Hora, Minuto
const targetDate = new Date(2026, 8, 13, 14, 0, 0).getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = segundos < 10 ? "0" + segundos : segundos;

    if (difference < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h3 style='color:#0f4c81; font-family: Cinzel, serif;'>O Chá está acontecendo! 🎉</h3>";
    }
}, 1000);
const WHATSAPP_NUMBER = "5511943039771"; 

// FUNÇÃO PARA CONFIRMAÇÃO DE PRESENÇA VIA WHATSAPP
function sendRSVP() {
    const name = document.getElementById("rsvp-name").value.trim();
    if (name === "") {
        alert("Por favor, digite seu nome para confirmar!");
        return;
    }
    
    const text = Olá Giovanna e João! Quero confirmar minha presença no Chá de Cozinha! ✨\nNome: ${name};
    const url = https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)};
    window.open(url, '_blank');
}

// FUNÇÃO PARA SELEÇÃO DE PRESENTES VIA WHATSAPP
function chooseGift(giftName) {
    const text = Olá! Olhei a lista no site e gostaria de presentear vocês com: 🎁 *${giftName}*.\nPodem reservar esse item para mim?;
    const url = https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)};
    window.open(url, '_blank');
}
