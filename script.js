const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const feedbackEl = document.getElementById("formFeedback");

// Event: Form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    let nameValue = nameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let messageValue = messageInput.value.trim();

    if (nameValue.length < 3) {
        feedbackEl.textContent = "❌ Name must be at least 3 characters.";
        feedbackEl.style.color = "red";
        return;
    }

    if (!validateEmail(emailValue)) {
        feedbackEl.textContent = "❌ Please enter a valid email address.";
        feedbackEl.style.color = "red";
        return;
    }

    if (messageValue.length < 10) {
        feedbackEl.textContent = "❌ Message must be at least 10 characters.";
        feedbackEl.style.color = "red";
        return;
    }

    feedbackEl.textContent = "✅ Message Sent Successfully!";
    feedbackEl.style.color = "green";
    form.reset(); // Clear form after successful submission
});

// Function: Email validation regex
function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    return emailPattern.test(email);
}

// Real-time validation: Name field
nameInput.addEventListener("input", function () {
    if (nameInput.value.length < 3) {
        nameInput.style.border = "2px solid red";
    } else {
        nameInput.style.border = "2px solid green";
    }
});

// Real-time validation: Email field
emailInput.addEventListener("input", function () {
    if (!validateEmail(emailInput.value)) {
        emailInput.style.border = "2px solid red";
    } else {
        emailInput.style.border = "2px solid green";
    }
  });

