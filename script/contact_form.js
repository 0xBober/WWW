function sendEmail() {
    // Pobierz wartości z formularza
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Podstawowa walidacja
    if (!name || !email || !message) {
        alert('Proszę wypełnić wszystkie pola.');
        return;
    }

    // Symulacja wysyłania emaila
    console.log('Sending email...');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Symulacja udanego wysłania emaila
    setTimeout(() => {
        alert('Wiadomość została wysłana pomyślnie!');
        // Wyczyść formularz
        document.getElementById('contactForm').reset();
    }, 2000); //opóźnienie 2s
}