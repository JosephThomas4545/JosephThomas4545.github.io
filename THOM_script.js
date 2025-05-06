// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('campForm');
  
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
});
  
// Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const messageBox = document.getElementById('formMessage');
  
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name.value.trim() || !email.value.trim()) {
      showMessage(messageBox, "Please fill in all fields.", "error");
      return;
    }
  
    if (!emailPattern.test(email.value.trim())) {
      showMessage(messageBox, "Please enter a valid email address.", "error");
      return;
    }
  
    // Success message
    showMessage(messageBox, `Thank you for registering, ${name.value.trim()}!`, "success");
  
    // Reset form
    event.target.reset();
}
  
    // Function to show messages
  function showMessage(element, message, type) {
    element.textContent = message;
    element.style.color = type === "success" ? "green" : "red";
}
    