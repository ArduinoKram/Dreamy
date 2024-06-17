function playAudio(track) {
      var trackURLs = {
        track1: 'player1.html',
        track2: 'player2.html',
        track3: 'player3.html',
        track4: 'player5.html',
        track5: 'player5.html',
        track6: 'player6.html'
      };

      window.location.href = trackURLs[track];
    }
function goBack() {
            window.location.href = "vybir.html";  // Замініть "https://www.example.com" на URL потрібної веб-сторінки
        }