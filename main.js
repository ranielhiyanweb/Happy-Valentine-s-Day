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

  
const randomMessages = [
  "Hehe nag yes siya, what time po? chat lang sa IG kung what time",
  "Sure naka ha? Wala nay bawian kay nag yes naka!😏",
  "Ikaw rajud akong Valentina🫶🌸",
  "Promise mag enjoy ta ani kay e treat man tikag right💖",
  "Feb 14 alas 4am sa kadlawn atong laag, indot ng sayo kay dakog agi🤭"
];

  
  
  buttonYes.addEventListener('click', () => {
  bgAudio.volume = 0.2;


  const randomIndex = Math.floor(Math.random() * randomMessages.length);
  document.querySelector('#customAlert p').textContent = randomMessages[randomIndex];


  const customAlert = document.getElementById('customAlert');
  customAlert.classList.add('show');

  const closeAlert = document.getElementById('closeAlert');
  closeAlert.onclick = () => {
    customAlert.classList.remove('show');
    bgAudio.volume = 0.8;
  }
});


  

};
