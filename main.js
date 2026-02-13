window.onload = () => {

  let startAudio = document.getElementById('startAudio'); 
  let bgAudio = document.getElementById('bgAudio');

  let message = document.getElementById('message');
  let buttonYes = document.getElementById('button');
  let buttonNo = document.getElementById('button2');
  
  
  

  startAudio.addEventListener('click', () => {

    bgAudio.play()
      .then(() => {

        // itago ang music button
        startAudio.style.display = 'none';

        // existing mo
        setTimeout(() => {
          document.body.classList.remove("not-loaded");
        }, 1000);

        // 🔥 romantic reveal after 3 seconds
        setTimeout(() => {
          message.classList.add("show-romantic");

          setTimeout(() => {
          buttonYes.classList.add("show-romantic");
          buttonNo.classList.add("show-romantic");

        // add soft glow to Yes button
         buttonYes.classList.add("glow");

       }, 800);
    }, 3000);
    
    

      })
      .catch((err) => {
        console.error("Audio play failed:", err);
      });

  });
  
  
  
  

// function para tumakbo ang No button
function moveNoButton() {
  let x = Math.random() * (window.innerWidth - buttonNo.offsetWidth);
  let y = Math.random() * (window.innerHeight - buttonNo.offsetHeight);

  buttonNo.style.position = "absolute";
  buttonNo.style.left = x + "px";
  buttonNo.style.top = y + "px";
}

// pag hover
buttonNo.addEventListener("mouseenter", moveNoButton);

// pag click (extra protection 😈)
buttonNo.addEventListener("click", function(e) {
  e.preventDefault();
  moveNoButton();
});

  
  // 🎲 Random messages
const randomMessages = [
  "Hehe nag yes siya, what time po? chat ni raniel sa IG kung what time",
  "Sure naka ha? Wala nay bawian kay nag yes naka!😏",
  "Ikaw rajud akong Valentina🫶🌸",
  "Excited nako makita ka, ngano bitaw nag yes HAHAHA😌",
  "Promise mag enjoy ta ani kay e treat man tikag right💖",
  "Feb 14 alas 4am sa kadlawn atong laag, indot ng sayo kay dakog agi🤭"
];

  
  
  buttonYes.addEventListener('click', () => {
  bgAudio.volume = 0.2;

  // 🎲 random message
  const randomIndex = Math.floor(Math.random() * randomMessages.length);
  document.querySelector('#customAlert p').textContent = randomMessages[randomIndex];

  // show custom modal
  const customAlert = document.getElementById('customAlert');
  customAlert.classList.add('show');

  // close button
  const closeAlert = document.getElementById('closeAlert');
  closeAlert.onclick = () => {
    customAlert.classList.remove('show');
    bgAudio.volume = 0.8;
  }
});


  

};
