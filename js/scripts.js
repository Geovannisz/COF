function togglePricing() {
  const toggle = document.querySelector('.toggle');
  const isAnnual = toggle.classList.toggle('annual');
  document.querySelectorAll('.mensal').forEach(el => el.style.display = isAnnual ? 'none' : 'block');
  document.querySelectorAll('.anual').forEach(el => el.style.display = isAnnual ? 'block' : 'none');
  document.querySelectorAll('.mensal-link').forEach(el => el.style.display = isAnnual ? 'none' : 'block');
  document.querySelectorAll('.anual-link').forEach(el => el.style.display = isAnnual ? 'block' : 'none');
}
