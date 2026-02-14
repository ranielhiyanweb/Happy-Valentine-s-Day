window.onload = () => {

  let startAudio = document.getElementById('startAudio'); 
  let bgAudio = document.getElementById('bgAudio');

  let message = document.getElementById('message');
  let buttonYes = document.getElementById('button');
  let buttonNo = document.getElementById('button2');
  
  
  

  startAudio.addEventListener('click', () => {

    bgAudio.play()
      .then(() => {


   startAudio.style.display = 'none';


        setTimeout(() => {
          document.body.classList.remove("not-loaded");
        }, 1000);


        setTimeout(() => {
          message.classList.add("show-romantic");

          setTimeout(() => {
          buttonYes.classList.add("show-romantic");
          buttonNo.classList.add("show-romantic");

      
         buttonYes.classList.add("glow");

       }, 800);
    }, 3000);
    
    

      })
      .catch((err) => {
        console.error("Audio play failed:", err);
      });

  });
  
  
  
  


function moveNoButton() {
  let x = Math.random() * (window.innerWidth - buttonNo.offsetWidth);
  let y = Math.random() * (window.innerHeight - buttonNo.offsetHeight);

  buttonNo.style.position = "absolute";
  buttonNo.style.left = x + "px";
  buttonNo.style.top = y + "px";
}


buttonNo.addEventListener("mouseenter", moveNoButton);

buttonNo.addEventListener("click", function(e) {
  e.preventDefault();
  moveNoButton();
});

  
const messages = [
  "Hehe nag yes siya, what time po? chat lang sa IG kung what time",
  "Sure naka ha? Wala nay bawiay hab kay nag yes naka!😏",
  "Ikaw rajud akong Valentina🫶🌸",
  "Promise mag enjoy ta ani kay e treat man tikag right💖",
  "og mao rato aylabyo😚🫶"
];


  let messageIndex = 0;

  
  buttonYes.addEventListener('click', () => {
  bgAudio.volume = 0.2;

  document.querySelector('#customAlert p').textContent = messages[messageIndex];

  messageIndex++;

  if (messageIndex >= messages.length) {
    messageIndex = 0;
  }

  const customAlert = document.getElementById('customAlert');
  customAlert.classList.add('show');

  const closeAlert = document.getElementById('closeAlert');
  closeAlert.onclick = () => {
    customAlert.classList.remove('show');
    bgAudio.volume = 0.8;
  }
});



  

};
