function calculateScore() {
  var question1 = parseInt(document.querySelector('input[name="question1"]:checked').value);
  var question2 = parseInt(document.querySelector('input[name="question2"]:checked').value);
  var question3 = parseInt(document.querySelector('input[name="question3"]:checked').value);
 var question4 = parseInt(document.querySelector('input[name="question4"]:checked').value);
  var question5 = parseInt(document.querySelector('input[name="question5"]:checked').value);
  var question6 = parseInt(document.querySelector('input[name="question6"]:checked').value);
  var question7 = parseInt(document.querySelector('input[name="question7"]:checked').value);
  var question8 = parseInt(document.querySelector('input[name="question8"]:checked').value);
  var question9 = parseInt(document.querySelector('input[name="question9"]:checked').value);
  var question10 = parseInt(document.querySelector('input[name="question10"]:checked').value);
  var totalScore = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10;

  document.getElementById('score').innerHTML = "Сума балів: " + totalScore;

  var resultElement = document.createElement('div');
  resultElement.id = 'result';
  resultElement.style.marginTop = '10px';

  var resultText = "";
  var resultColor = "";

   setTimeout(function() {
    if (totalScore >= 35) {
      window.location.href = 'result_good.html';
    } else if (totalScore >= 19) {
      window.location.href = 'result_normal.html';
    } else {
      window.location.href = 'result_bad.html';
    }
  }, 3000); // Затримка у 3 секунди перед переходом на іншу сторінку

  resultElement.innerHTML = resultText;
  resultElement.style.backgroundColor = resultColor;

  document.getElementById('result-container').appendChild(resultElement);
  document.getElementById('questions-container').classList.add('hidden');
  document.getElementById('result-container').classList.remove('hidden');
}
