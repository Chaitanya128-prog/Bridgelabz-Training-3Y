document.getElementById('ticketForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('tName').value;
    const email = document.getElementById('tEmail').value;
    const seats = document.getElementById('tSeats').value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsRegex = /^([1-9]|10)$/;

    if (!nameRegex.test(name)) return alert("Invalid Name (Alphabets only)");
    if (!emailRegex.test(email)) return alert("Invalid Email");
    if (!seatsRegex.test(seats)) return alert("Seats must be between 1 and 10");

    const booking = { name, email, seats };
    
    document.getElementById('ticketDetails').innerHTML = 
        `<strong>Ticket Confirmed!</strong><br>Name: ${booking.name}<br>Email: ${booking.email}<br>Seats: ${booking.seats}`;
});