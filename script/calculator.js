function calculateCost() {
    // Pobieranie wartości z pól formularza
    const people = document.getElementById('people').value;    // liczba osób
    const nights = document.getElementById('nights').value;    // liczba noclegów

    // Obliczanie kosztu pobytu
    const costPerPersonPerNight = 60; // cena za osobę za noc
    const totalCost = people * nights * costPerPersonPerNight;

    // Wyświetlanie kosztu pobytu
    document.getElementById('result').innerText = `${totalCost}zł`;

    // Obliczanie opłaty miejscowej
    const fee = 2;    // stawka opłaty miejscowej za osobę za noc
    const totalFee = people * nights * fee;
    document.getElementById('tax').innerText = `${totalFee}zł`;

    // Obliczanie i wyświetlanie sumy końcowej (pobyt + opłata miejscowa)
    const finalCost = totalCost + totalFee;
    document.getElementById('total').innerText = `${finalCost}zł`;

    //aktualnie nie ma ustalonego cenu w sezonie/ poza sezonem
}