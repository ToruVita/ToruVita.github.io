let lastScroll = 0;
const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // 下スクロール → 隠す
    header.classList.add("hide");
  } else {
    // 上スクロール → 表示
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
