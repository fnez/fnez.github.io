const sideNav = document.querySelector(".sideNav");
const sectionsContainer = document.querySelector(".sectionsContainer");
const menuItems = document.querySelector(".menuItems");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

const toggleNav = () => {
  sideNav.classList.toggle("open");
  sideNav.classList.toggle("close");

  sectionsContainer.classList.toggle("expanded");
  menuItems.classList.toggle("closeMenuItems");
  line1.classList.toggle("closed");
  line2.classList.toggle("closed");
  line3.classList.toggle("closed");
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedClassName = anchor.getAttribute("href").replace("#", "");
    const sectionToScroll = document.getElementById(selectedClassName);

    sectionToScroll.scrollIntoView({
      behavior: "smooth",
    });
  });
});
