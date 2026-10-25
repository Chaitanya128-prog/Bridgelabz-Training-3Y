const fs = require('fs');

const files = {
// ==========================================
// Q1: E-Commerce Product Manager
// ==========================================
"q1_ecommerce.js": `
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * (percent / 100);
        return this.price;
    }

    displayDetails() {
        return \`[\${this.id}] \${this.name} (\${this.category}) - $\${this.price.toFixed(2)}\`;
    }
}

const products = [
    new Product(1, "Laptop", 1200, "Electronics"),
    new Product(2, "Smartphone", 800, "Electronics"),
    new Product(3, "Desk Chair", 250, "Furniture"),
    new Product(4, "Gaming Monitor", 1100, "Electronics")
];

console.log("--- Products over $1000 ---");
products.filter(p => p.price > 1000).forEach(p => {
    console.log(p.displayDetails());
});
`,

// ==========================================
// Q2: Student Form Validator
// ==========================================
"q2_student_form.html": `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Student Registration</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .input-group { margin-bottom: 15px; }
        input { padding: 8px; border: 2px solid #ccc; outline: none; }
        .valid { border-color: green; }
        .invalid { border-color: red; }
        .error { color: red; font-size: 12px; display: none; }
    </style>
</head>
<body>
    <h2>Student Registration</h2>
    <form id="studentForm">
        <div class="input-group">
            <input type="text" id="name" placeholder="Name">
            <div class="error" id="nameError">Only alphabets allowed.</div>
        </div>
        <div class="input-group">
            <input type="email" id="email" placeholder="Email">
            <div class="error" id="emailError">Invalid email format.</div>
        </div>
        <div class="input-group">
            <input type="text" id="phone" placeholder="Phone (10 digits)">
            <div class="error" id="phoneError">Must be exactly 10 digits.</div>
        </div>
        <div class="input-group">
            <input type="password" id="password" placeholder="Password">
            <div class="error" id="passwordError">Needs 1 uppercase, 1 number, 1 special char.</div>
        </div>
        <button type="submit">Submit</button>
    </form>
    <script src="q2_student_form.js"></script>
</body>
</html>`,

"q2_student_form.js": `
const form = document.getElementById('studentForm');

const regexPatterns = {
    name: /^[A-Za-z\\s]+$/,
    email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
    phone: /^\\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/
};

function validateField(fieldId, pattern, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (pattern.test(field.value)) {
        field.className = 'valid';
        error.style.display = 'none';
        return true;
    } else {
        field.className = 'invalid';
        error.style.display = 'block';
        return false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = validateField('name', regexPatterns.name, 'nameError');
    const isEmailValid = validateField('email', regexPatterns.email, 'emailError');
    const isPhoneValid = validateField('phone', regexPatterns.phone, 'phoneError');
    const isPasswordValid = validateField('password', regexPatterns.password, 'passwordError');

    if(isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
        alert('Registration Successful!');
    }
});
`,

// ==========================================
// Q3: Library Management System
// ==========================================
"q3_library.js": `
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return \`Successfully issued "\${this.title}"\`;
        }
        return \`"\${this.title}" is already issued.\`;
    }

    returnBook() {
        this.isIssued = false;
        return \`Returned "\${this.title}"\`;
    }
}

const library = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "12345"),
    new Book("1984", "George Orwell", "67890"),
    new Book("To Kill a Mockingbird", "Harper Lee", "11223")
];

console.log(library.find(b => b.ISBN === "12345").issueBook());

console.log("--- Available Books ---");
library.filter(b => !b.isIssued).forEach(b => console.log(\`- \${b.title} by \${b.author}\`));
`,

// ==========================================
// Q4: Custom Form Builder
// ==========================================
"q4_form_builder.html": `
<!DOCTYPE html>
<html lang="en">
<body>
    <h2>Dynamic Form Generator</h2>
    <div id="formContainer"></div>
    <script src="q4_form_builder.js"></script>
</body>
</html>`,

"q4_form_builder.js": `
class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    render() {
        let html = '<form id="dynamicForm">';
        this.fields.forEach(field => {
            html += \`
                <div style="margin-bottom:10px;">
                    <label>\${field.label}</label><br>
                    <input type="\${field.type}" name="\${field.name}" required>
                </div>
            \`;
        });
        html += '<button type="submit">Submit</button></form>';
        this.container.innerHTML = html;

        document.getElementById('dynamicForm').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(this.getFormData());
        });
    }

    getFormData() {
        const formElement = document.getElementById('dynamicForm');
        const formData = new FormData(formElement);
        return Object.fromEntries(formData.entries());
    }
}

const myFields = [
    { type: 'text', label: 'Username', name: 'username' },
    { type: 'email', label: 'Email Address', name: 'email' },
    { type: 'password', label: 'Password', name: 'password' }
];

const builder = new FormBuilder(myFields, 'formContainer');
builder.render();
`,

// ==========================================
// Q5: Movie Ticket Booking
// ==========================================
"q5_movie_ticket.html": `
<!DOCTYPE html>
<html lang="en">
<body>
    <h2>Movie Ticket Booking</h2>
    <form id="ticketForm">
        <input type="text" id="tName" placeholder="Name" required><br><br>
        <input type="text" id="tEmail" placeholder="Email" required><br><br>
        <input type="number" id="tSeats" placeholder="Seats (1-10)" required><br><br>
        <button type="submit">Book Ticket</button>
    </form>
    <div id="ticketDetails" style="margin-top:20px; color:green;"></div>
    <script src="q5_movie_ticket.js"></script>
</body>
</html>`,

"q5_movie_ticket.js": `
document.getElementById('ticketForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('tName').value;
    const email = document.getElementById('tEmail').value;
    const seats = document.getElementById('tSeats').value;

    const nameRegex = /^[A-Za-z\\s]+$/;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    const seatsRegex = /^([1-9]|10)$/;

    if (!nameRegex.test(name)) return alert("Invalid Name (Alphabets only)");
    if (!emailRegex.test(email)) return alert("Invalid Email");
    if (!seatsRegex.test(seats)) return alert("Seats must be between 1 and 10");

    const booking = { name, email, seats };
    
    document.getElementById('ticketDetails').innerHTML = 
        \`<strong>Ticket Confirmed!</strong><br>Name: \${booking.name}<br>Email: \${booking.email}<br>Seats: \${booking.seats}\`;
});
`,

// ==========================================
// Q6: Employee Management System
// ==========================================
"q6_employee.js": `
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "Alice", "IT", 5000),
    new Employee(2, "Bob", "HR", 4000),
    new Employee(3, "Charlie", "Finance", 6000),
    new Employee(4, "David", "IT", 5500),
    new Employee(5, "Eve", "Marketing", 4500)
];

const totalPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(\`Total Annual Payout: $\${totalPayout}\`);
`,

// ==========================================
// Q7: Login Form Validation
// ==========================================
"q7_login_form.html": `
<!DOCTYPE html>
<html lang="en">
<body>
    <h2>Login</h2>
    <form id="loginForm">
        <input type="text" id="username" placeholder="Username (Min 5 chars)"><br><br>
        <input type="password" id="pass" placeholder="Password"><br><br>
        <button type="submit">Login</button>
    </form>
    <div id="loginMsg"></div>
    <script src="q7_login_form.js"></script>
</body>
</html>`,

"q7_login_form.js": `
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    const msg = document.getElementById('loginMsg');

    const userRegex = /^.{5,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;

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
`,

// ==========================================
// Q8: Dynamic Object Updater
// ==========================================
"q8_object_updater.html": `
<!DOCTYPE html>
<html lang="en">
<body>
    <h2>Update Profile</h2>
    <form id="profileForm">
        <input type="text" id="objName"><br><br>
        <input type="email" id="objEmail"><br><br>
        <input type="number" id="objAge"><br><br>
        <button type="submit">Update User</button>
    </form>
    <pre id="objDisplay"></pre>
    <script src="q8_object_updater.js"></script>
</body>
</html>`,

"q8_object_updater.js": `
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
`,

// ==========================================
// Q9: Shopping Cart Total
// ==========================================
"q9_shopping_cart.js": `
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    applyCoupon(couponCode) {
        const total = this.getTotal();
        const couponRegex = /^(SAVE|DISC)(\\d{2})$/;
        const match = couponCode.match(couponRegex);

        if (match) {
            const discountPercent = parseInt(match[2]);
            const finalTotal = total - (total * (discountPercent / 100));
            console.log(\`Valid Coupon! \${discountPercent}% applied.\`);
            console.log(\`Final Total: $\${finalTotal}\`);
        } else {
            console.log("Invalid Coupon Code.");
            console.log(\`Final Total: $\${total}\`);
        }
    }
}

const myCart = new Cart();
myCart.addItem("Headphones", 100, 1);
myCart.addItem("Keyboard", 50, 2);

console.log(\`Subtotal: $\${myCart.getTotal()}\`);
myCart.applyCoupon("SAVE20");
`
};

for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(filename, content.trim(), 'utf8');
    console.log(`Created: ${filename}`); 
}
console.log('All Assignment 4 files successfully generated!');