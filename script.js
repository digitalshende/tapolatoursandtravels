// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Form Submission Alert (For Contact Page)
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Booking Request Sent Successfully! We will call you shortly.');
    event.target.reset();
}
// Function to handle form submission and redirect to WhatsApp
function sendToWhatsApp(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get values from the form inputs
    const name = document.getElementById('bName').value;
    const phone = document.getElementById('bPhone').value;
    const pickup = document.getElementById('bPickup').value;
    const drop = document.getElementById('bDrop').value;
    const date = document.getElementById('bDate').value;
    const vehicle = document.getElementById('bVehicle').value;

    // Your WhatsApp Number (Include Country Code '91' for India)
    // Using your first number: 9423315604 -> 919423315604
    const myWhatsAppNumber = "919423315604"; 

    // Format the message using WhatsApp markdown (* for bold) and %0A for line breaks
    const message = `*New Booking Request* %0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*Pickup Location:* ${pickup}%0A` +
                    `*Drop Location:* ${drop}%0A` +
                    `*Date of Travel:* ${date}%0A` +
                    `*Selected Vehicle:* ${vehicle}%0A%0A` +
                    `Please confirm my booking. Thank you!`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Optionally, clear the form after sending
    document.getElementById('whatsappForm').reset();
}