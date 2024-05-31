function togglePlans() {
    const isChecked = document.getElementById('plan-toggle').checked;
    const plans = document.querySelectorAll('.plan');
    const planTypeText = document.getElementById('plan-type');
    plans.forEach(plan => {
        if (isChecked && plan.getAttribute('data-plan') === 'anual') {
            plan.style.display = 'block';
        } else if (!isChecked && plan.getAttribute('data-plan') === 'mensal') {
            plan.style.display = 'block';
        } else {
            plan.style.display = 'none';
        }
    });
    planTypeText.textContent = isChecked ? 'Anual' : 'Mensal';
}