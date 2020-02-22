// Loader
function loader() {
  console.log("hejsss");
  setTimeout(showContent, 250);
  console.log("hejsss");
}

function showContent() {
  console.log("hej");
  const bodyy = document.querySelector("body");
  ssss;
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
  bodyy.style.visibility = "unset";
  //header.setAttribute("data-aos", "fade-up");
  main.style.visibility = "unset";
  footer.style.visibility = "unset";
}

console.log("tja");
