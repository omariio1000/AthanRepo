document.addEventListener("DOMContentLoaded", function () {
    const audioPlayers = document.querySelectorAll("audio");
  
    function stopAllOtherAudio(currentAudio) {
      audioPlayers.forEach((player) => {
        if (player !== currentAudio) {
          player.pause();
        }
      });
    }
  
    audioPlayers.forEach((audio) => {
      audio.addEventListener("play", function () {
        stopAllOtherAudio(audio);
      });
    });
  });
  