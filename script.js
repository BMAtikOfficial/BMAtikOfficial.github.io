const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
    });
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const playFeaturedVideoButton = document.querySelector("#play-featured-video");
const featuredVideoFrame = document.querySelector("#featured-video-frame");
const featuredVideoIframe = document.querySelector("#featured-video-iframe");

if (playFeaturedVideoButton && featuredVideoFrame && featuredVideoIframe) {
  playFeaturedVideoButton.addEventListener("click", () => {
    featuredVideoIframe.src =
      "https://www.youtube.com/embed/Rm1Cn5S_CCE?autoplay=1&rel=0&playsinline=1";
    featuredVideoFrame.hidden = false;
    playFeaturedVideoButton.hidden = true;
  });
}
