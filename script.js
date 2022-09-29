let original = window.scrollY;
let left = 20;
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const child2 = document.getElementById("content1");
  const child3 = document.getElementById("content3");
  const child4 = document.getElementById("content4");
  const separador = document.getElementById("separador");
  nav.classList.toggle("sticky", window.scrollY > 0);
  //console.log(window.scrollY);
  if (window.scrollY > 100) {
    nav.style.top = original > window.scrollY ? "0" : "-6rem";
  }
  if (window.scrollY > child2.offsetTop / 1.5 && window.scrollY < child2.offsetTop * 1.5 ) {
    child2.classList.add("active")
  } else{
    child2.classList.remove("active")
  }
  if (window.scrollY > child3.offsetTop / 1.5 && window.scrollY < child3.offsetTop * 1.1 ) {
    child3.classList.add("active")
  } else{
    child3.classList.remove("active")
  }
  child4.classList.toggle("active", window.scrollY > child4.offsetTop / 1.1);
  console.log(window.scrollY + " -- " + separador.parentElement.offsetTop);
  if (
    window.scrollY > separador.parentElement.offsetTop / 1.5 &&
    window.scrollY < separador.parentElement.offsetTop * 1.5
  ) {
    console.log("entre");
    if (original > window.scrollY) {
      if (left > 0) {
        left -= 0.3;
      }
    } else {
      if (left < 80) {
        left += 0.3;
      }
    }

    separador.style.width = left + 10 + "rem";
  }
  original = window.scrollY;
});