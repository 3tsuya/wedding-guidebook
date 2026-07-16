/* =========================
  ロゴのフェードアウトとタイトルのフェードイン
========================= */
window.addEventListener("DOMContentLoaded", () => {
  const icon = document.getElementById("icon");
  const title = document.getElementById("title");

  setTimeout(() => {
    icon.style.opacity = "0";
    icon.style.transform = "translateY(-40px)"

    setTimeout(() => {
      icon.style.display = "none";
      title.classList.add("show");
    }, 800); // フェードアウト時間
  }, 2000);
});
/* =========================
  スクロールに応じて要素をフェードイン
========================= */
const fadeElements = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  fadeElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      element.classList.add('show');
    }
  });
});

/* =========================
  家族紹介
========================= */
const familyBtn = document.getElementById('about-family-btn');
const familySection = document.getElementById('about-family');
const closeBtn = document.getElementById("close-family");

familyBtn.addEventListener('click', () => {
  console.log(familySection.classList);
  familySection.classList.toggle('show');
});

closeBtn.addEventListener("click", () => {
  familySection.classList.remove("show");
});

