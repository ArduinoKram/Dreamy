const testButton = document.getElementById('testButton');
const recommendationsButton = document.getElementById('recommendationsButton');

testButton.addEventListener('click', () => {
  // перехід на іншу сторінку для тесту
  window.location.href = 'test.html';
});

recommendationsButton.addEventListener('click', () => {
  // перехід на іншу сторінку для рекомендацій
  window.location.href = 'recomendacii.html';
});
