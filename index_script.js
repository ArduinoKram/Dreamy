var greetings = [
  "Привіт!",
  "Я Dreamy, твій віртуальний помічник для покращення твого психологічного стану",
  "Я маю багато корисних ресурсів для тебе!",
  "Пропоную тобі для визначення психологічного стану пройти тест або скористатися готовими рекомендаціями"
];

var greetingIndex = 1;
var greetingElement = document.getElementById("greeting");
var greetingDelay = 5000; // Затримка між привітаннями (в мілісекундах)

function changeGreeting() {
  greetingElement.textContent = greetings[greetingIndex];
  greetingIndex++;
  if (greetingIndex === greetings.length) {
    clearInterval(greetingInterval);
    setTimeout(function() {
      window.location.href = "vybir.html"; // Замініть "newpage.html" на URL-адресу вашої іншої сторінки
    }, greetingDelay);
  }
}

var greetingInterval = setInterval(changeGreeting, greetingDelay);
