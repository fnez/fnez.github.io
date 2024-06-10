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

//scroll navigation
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

//Cursor effect
document.documentElement.style.cursor = "none";
const circleElement = document.querySelector(".circle");
const mouse = { x: 0, y: 0 };
const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
const circle = { x: 0, y: 0 };
let currentScale = 0;
let currentAngle = 0;

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // let previousMouse = { x : null, y : null};

  //Squeeze
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;

  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );
  const scaleValue = (mouseVelocity / 150) * 0.5;
  currentScale += (scaleValue - currentScale) * speed;

  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  //Rotate
  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
  const rotateTransform = `rotate(${angle}deg)`;

  if (mouseVelocity > 20) {
    currentAngle = angle;
  }

  //Apply transforms
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  window.requestAnimationFrame(tick);
};

tick();
