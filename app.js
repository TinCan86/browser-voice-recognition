const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("Talk initiated");
};

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;

  content.textContent = transcript;
};

btn.addEventListener("click", () => {
  recognition.start();
});

readOutLoad = (message) => {
  const speech = new SpeechSynthesisUtterance();

  // How the speech will sound like :D
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
