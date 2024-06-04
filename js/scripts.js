const planToggle = document.getElementById('plan-toggle');
const plansContainer = document.getElementById('plans-container');

planToggle.addEventListener('click', () => {
  const isChecked = planToggle.getAttribute('aria-checked') === 'true';
  planToggle.setAttribute('aria-checked', !isChecked);

  // Atualiza os preços e períodos dos planos
  const plans = plansContainer.querySelectorAll('.plan');
  plans.forEach(plan => {
    const priceValue = plan.querySelector('.price-value');
    const pricePeriod = plan.querySelector('.price-period');

    if (!isChecked) {
      // Define preços anuais (desconto de 20%)
      const monthlyPrice = parseFloat(priceValue.textContent.replace('R$', '').replace(',', '.'));
      const annualPrice = monthlyPrice * 12 * 0.8;
      priceValue.textContent = `R$${annualPrice.toFixed(2).replace('.', ',')}`;
      pricePeriod.textContent = '/ano';
    } else {
      // Retorna para preços mensais
      switch (plan.dataset.plan) {
        case 'newton':
          priceValue.textContent = 'R$19,90';
          break;
        case 'einstein':
          priceValue.textContent = 'R$29,90';
          break;
        default:
          break;
      }
      pricePeriod.textContent = '/mês';
    }
  });
});