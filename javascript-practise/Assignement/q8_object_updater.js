const user = { name: "John", email: "john@mail.com", age: 21 };

document.getElementById('objName').value = user.name;
document.getElementById('objEmail').value = user.email;
document.getElementById('objAge').value = user.age;

const display = document.getElementById('objDisplay');
display.innerText = JSON.stringify(user, null, 2);

document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    user.name = document.getElementById('objName').value;
    user.email = document.getElementById('objEmail').value;
    user.age = parseInt(document.getElementById('objAge').value);
    
    display.innerText = JSON.stringify(user, null, 2);
});