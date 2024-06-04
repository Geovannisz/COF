const planSwitch = document.getElementById('planSwitch');
const plans = document.querySelectorAll('.plan');

planSwitch.addEventListener('change', () => {
  plans.forEach(plan => {
    const planType = plan.dataset.plan;
    const priceElement = plan.querySelector('.price .value');
    const periodElement = plan.querySelector('.price .period');
    const annualPriceElement = plan.querySelector('.annual-price');

    if (planSwitch.checked) {
      // Plano anual
      if (planType === 'newton') {
        priceElement.textContent = '199,90';
      } else if (planType === 'einstein') {
        priceElement.textContent = '299,90';
      }
      periodElement.textContent = '/ano';
      annualPriceElement.style.display = 'block';
    } else {
      // Plano mensal
      if (planType === 'newton') {
        priceElement.textContent = '19,90';
      } else if (planType === 'einstein') {
        priceElement.textContent = '29,90';
      }
      periodElement.textContent = '/mês';
      annualPriceElement.style.display = 'none';
    }
  });
});