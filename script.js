/*アイコン表示→表紙*/
window.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("icon");
  const title = document.getElementById("title");

  setTimeout(()=>{
    icon.style.opacity="0";
    icon.style.transform="translateY(-40px)"
  
   setTimeout(() => {
      icon.style.display = "none";
      title.classList.add("show");
    }, 800); // フェードアウト時間
  }, 2000);
});

/*スクロールでフェードイン*/
const fadeElements = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  fadeElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      element.classList.add('show');
    }
  });
});

/*写真をクリックするとモーダルが表示される*/
const photo = document.getElementById('photo')
const modal = document.getElementById('modal')

photo.addEventListener('click', () => {
  modal.style.display = 'flex';
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

