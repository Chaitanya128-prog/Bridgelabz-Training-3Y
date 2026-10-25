class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    render() {
        let html = '<form id="dynamicForm">';
        this.fields.forEach(field => {
            html += `
                <div style="margin-bottom:10px;">
                    <label>${field.label}</label><br>
                    <input type="${field.type}" name="${field.name}" required>
                </div>
            `;
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