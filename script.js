document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

const form = document.querySelector('#myForm');
const nameInput = form.querySelector('input[name="Name"]');
const collegeInput = form.querySelector('input[name="College"]');
const emailInput = form.querySelector('input[name="Email"]');
const contactInput = form.querySelector('input[name="Contact"]');
const submitButton = form.querySelector('.btn');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression
    return re.test(email);
}

function validateContact(contact) {
    const re = /^\d{10}$/;
    return re.test(contact);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const college = collegeInput.value.trim();
    const email = emailInput.value.trim();
    const contact = contactInput.value.trim();

    if (name === '' || college === '' || email === '' || contact === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validateContact(contact)) {
        alert('Please enter a valid 10-digit contact number.');
        return;
    }

    alert('Form submitted successfully!');
});
