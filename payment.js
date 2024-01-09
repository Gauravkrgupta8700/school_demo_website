document.addEventListener("DOMContentLoaded", function() {
    const payButton = document.getElementById("payButton");
    const paymentStatus = document.getElementById("paymentStatus");

    // Simulate a payment process
    payButton.addEventListener("click", function() {
        // Replace this section with actual payment gateway integration
        // Here, we're simulating a successful payment
        // In a real system, you would call the payment gateway's API
        // and handle success and failure cases
        const success = true;

        if (success) {
            paymentStatus.textContent = "Payment successful!";
            paymentStatus.style.color = "green";
        } else {
            paymentStatus.textContent = "Payment failed. Please try again.";
            paymentStatus.style.color = "red";
        }
    });
});