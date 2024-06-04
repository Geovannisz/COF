const switchElement = document.querySelector('.switch input[type="checkbox"]');
const pricesNewton = document.querySelectorAll('.price')[0];
const pricesEinstein = document.querySelectorAll('.price')[1];
const monthlyPrices = [19.90, 29.90];
const annualPrices = [199.90, 299.90];

switchElement.addEventListener('change', () => {
  const isChecked = switchElement.checked;
  const newPrices = isChecked ? annualPrices : monthlyPrices;
  const priceSuffix = isChecked ? '/ano' : '/mês';

  pricesNewton.textContent = `R$${newPrices[0].toFixed(2)}`;
  pricesEinstein.textContent = `R$${newPrices[1].toFixed(2)}`;

  document.querySelectorAll('.text-gray-300').forEach((span, index) => {
    span.textContent = priceSuffix;
    if (index === 0 && isChecked) {
      span.textContent += ' (Equivalente a R$19,90/mês)';
    } else if (index === 1 && isChecked) {
      span.textContent += ' (Equivalente a R$29,90/mês)';
    }
  });

  const slider = document.querySelector('.slider');
  slider.classList.toggle('translate-x-6', isChecked);
  slider.classList.toggle('translate-x-1', !isChecked);
});
