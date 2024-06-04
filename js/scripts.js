document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle-pricing');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');

    toggle.addEventListener('change', function() {
        if (this.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            annualPrices.forEach(price => price.style.display = 'block');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'block');
            annualPrices.forEach(price => price.style.display = 'none');
        }
    });

    // Initialize with monthly prices displayed
    monthlyPrices.forEach(price => price.style.display = 'block');
    annualPrices.forEach(price => price.style.display = 'none');
});
