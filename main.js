// function for play videos
function play(masterpiece) {
  masterpiece.setAttribute('autoplay', '');
  masterpiece.setAttribute('loop', '');
}

// function change innerhtml in title
function changeTitle(innerText) {
  innerText.innerHTML = "Click to see more";
}

// Target videos

let luffarschackVid = document.getElementById('luffarschackVideo');
let luffarschackTitle = document.querySelector('.portfolio__first');
let luffarInnerText = document.querySelector('.luffarInnerText');

luffarschackTitle.addEventListener('mouseover', function () {
  play(luffarschackVid)
  changeTitle(luffarInnerText)
})


let marsOneVid = document.getElementById('marsVideo');
let marsOneTitle = document.querySelector('.portfolio__second');
let marsInnerText = document.querySelector('.marsInnerText');

marsOneTitle.addEventListener('mouseover', function () {
  play(marsOneVid);
  changeTitle(marsInnerText);
})

let modetiveVid = document.getElementById('modetiveVideo');
let modetiveTitle = document.querySelector('.portfolio__third');
let modeInnerText = document.querySelector('.modetiveInnerText');

modetiveTitle.addEventListener('mouseover', function () {
  play(modetiveVid);
  changeTitle(modeInnerText);
})

let travelsonVid = document.getElementById('travelsonVideo');
let travelsonTitle = document.querySelector('.portfolio__four');
let travelInnerText = document.querySelector('.travelInnerText');

travelsonTitle.addEventListener('mouseover', function () {
  play(travelsonVid);
  changeTitle(travelInnerText);
})