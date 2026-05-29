function showPayment() {
    document.getElementById('payment-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function confirmPayment() {
    document.getElementById('payment-modal').style.display = 'none';
    document.getElementById('success-modal').style.display = 'flex';
}

function closeSuccess() {
    document.getElementById('success-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    var paymentModal = document.getElementById('payment-modal');
    var successModal = document.getElementById('success-modal');
    
    if (event.target == paymentModal) {
        closePayment();
    }
    
    if (event.target == successModal) {
        closeSuccess();
    }
}
