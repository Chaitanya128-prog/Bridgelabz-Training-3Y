document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    const msg = document.getElementById('loginMsg');

    const userRegex = /^.{5,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!userRegex.test(user)) {
        msg.style.color = "red";
        msg.innerText = "Username must be at least 5 characters.";
    } else if (!passRegex.test(pass)) {
        msg.style.color = "red";
        msg.innerText = "Password must be 8+ chars and include upper, lower, number, and special character.";
    } else {
        msg.style.color = "green";
        msg.innerText = "Login Successful!";
    }
});