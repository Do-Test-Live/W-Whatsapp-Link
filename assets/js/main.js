function goWhatsapp() {
    const countryCode = document.getElementById('countryCode').value;
    const number = document.getElementById('number').value.trim();

    if (number) {
        document.getElementById('number').value='';
        const fullNumber = countryCode + number;
        const whatsappURL = `https://wa.me/${fullNumber}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert("Please enter a valid phone number.");
    }
}