// typewriting text
let TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  let elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute('data-type');
    let period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.querySelector('.headerPicture').appendChild(css);
};


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