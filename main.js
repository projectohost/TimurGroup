function showSection(id) {
    let sound = document.getElementById("clickSound");

    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }

    document.getElementById("story").style.display = "none";
    document.getElementById("characters").style.display = "none";
    document.getElementById("about").style.display = "none";

    document.getElementById(id).style.display = "block";
}
function showSection(sectionId) {
  let sections = ["story", "characters", "about"];

  sections.forEach(id => {
    let el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  let active = document.getElementById(sectionId);
  if (active) active.style.display = "block";
}
function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  let userText = input.value.trim();
  if (!userText) return;

  chat.innerHTML += `<p><b>Ты:</b> ${userText}</p>`;
  input.value = "";

  let answer = getAIResponse(userText);

  chat.innerHTML += `<p><b>ИИ:</b> ${answer}</p>`;
  chat.scrollTop = chat.scrollHeight;
}

function getAIResponse(text) {
  text = text.toLowerCase();

  let blocks = document.querySelectorAll(".block");

  for (let block of blocks) {
    let content = block.innerText.toLowerCase();

    if (content.includes(text)) {
      return block.innerText.slice(0, 150) + "...";
    }
  }

  return "Я не нашёл это на сайте 😢 Попробуй спросить иначе";
}
