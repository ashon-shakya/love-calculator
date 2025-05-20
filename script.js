const resultDiv = document.getElementById("result");
const loaderElement = document.getElementById("loader");
const confettiElement = document.getElementById("confetti");
const cheerAudio = document.getElementById("cheer");
const sadAudio = document.getElementById("sad");

function getLovePercentage(n1, n2) {
  // Simple algorithm: sum character codes and mod by 100
  let sum = 0;
  for (let i = 0; i < n1.length; i++) {
    sum += n1.charCodeAt(i);
  }
  for (let i = 0; i < n2.length; i++) {
    sum += n2.charCodeAt(i);
  }

  return sum % 100;
}

function calculateLove() {
  const name1 = document.getElementById("name1").value.trim().toLowerCase();
  const name2 = document.getElementById("name2").value.trim().toLowerCase();

  if (!name1 || !name2) {
    resultDiv.innerHTML =
      '<span style="color: #ef4444;">Please enter both names!</span>';
    return;
  }

  const percentage = getLovePercentage(name1, name2);

  let message = "";
  if (percentage === 100) {
    message = `<span class="percentage">${percentage}%</span>💖 ${name1} and ${name2} are soul mates!`;
  } else if (percentage > 80) {
    message = `<span class="percentage">${percentage}%</span>😍 Great compatibility for ${name1} and ${name2}!`;
  } else if (percentage > 50) {
    message = `<span class="percentage">${percentage}%</span>😊 Nice spark between ${name1} and ${name2}.`;
  } else {
    message = `<span class="percentage">${percentage}%</span>😕 ${name1} and ${name2} might be better as friends.`;
  }

  // hide result message, confetti
  resultDiv.classList.add("hidden");
  confettiElement.classList.remove("confetti");

  // show loader
  loaderElement.classList.remove("hidden");

  // update message
  resultDiv.innerHTML = message;

  setTimeout(() => {
    // hide loader
    loaderElement.classList.add("hidden");

    // show result
    resultDiv.classList.remove("hidden");

    if (percentage > 80) {
      // play cheer audio
      cheerAudio.play();
      // show confetti
      confettiElement.classList.add("confetti");

      setTimeout(() => {
        // hide confetti
        confettiElement.classList.remove("confetti");
      }, 3000);
    }

    if (percentage < 50) {
      // play sad music
      sadAudio.play();
    }
  }, 1500);
}
