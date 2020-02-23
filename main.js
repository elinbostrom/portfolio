// cv button
let cv = document.querySelector('.cv');

cv.addEventListener('click', function () {
  let cvBtn = document.querySelector('.cv');
  cvBtn.style.animationName = "fadeIn";
  cvBtn.style.transition = "250ms";

  let body = document.querySelector('body');
  body.style.overflowY = 'hidden';
  body.style.height = '100vh';
  let aboutMe = document.getElementById('aboutmeID');
  let popUp = document.createElement('div');
  popUp.className = "popUp";

  let closeBtn = document.createElement('div');
  closeBtn.className = "closeBtn";
  let cross = document.createElement('img');
  cross.className = "imgWrapper";
  cross.setAttribute('src', "./img/cross.png");
  cross.setAttribute('alt', 'close button');
  closeBtn.appendChild(cross);
  popUp.appendChild(closeBtn);

  // Close when you click on closeBtn

  window.addEventListener('click', function () {
    if (event.target == aboutMe) {
      popUp.style.display = 'none';
      body.style.overflowY = 'unset';
      body.style.height = 'unset';
    }
  });

  closeBtn.addEventListener('click', function () {
    popUp.style.display = 'none';
    body.style.overflowY = 'unset';
    body.style.height = 'unset';
  })

  let popUpText = document.createElement('div');
  let popUpTitle = document.createElement('h1');
  popUpTitle.innerHTML = "Soon you will see all the great things I've done!";
  let popUpPara = document.createElement('p');
  popUpPara.innerHTML = "Let me know who you are and I will get back to you shortly...";
  popUpText.appendChild(popUpTitle);
  popUpText.appendChild(popUpPara);
  popUp.appendChild(popUpText);

  let form = document.createElement('form');
  form.setAttribute('action', 'https://formspree.io/mdoodqpy');
  form.setAttribute('method', 'POST');
  form.setAttribute('type', 'submit');

  let name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('name', 'name');
  name.setAttribute('placeholder', 'Name...');

  let company = document.createElement('input');
  company.setAttribute('type', 'text');
  company.setAttribute('name', 'company');
  company.setAttribute('placeholder', 'Company...');

  let mail = document.createElement('input');
  mail.setAttribute('type', 'email');
  mail.setAttribute('required', '');
  mail.setAttribute('name', '_replyto');
  mail.setAttribute('placeholder', 'Email... *');

  let submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Send');
  submit.textContent = "Send";

  form.appendChild(name);
  form.appendChild(company);
  form.appendChild(mail);
  form.appendChild(submit);
  popUp.appendChild(form)
  aboutMe.appendChild(popUp);

  submit.addEventListener('click', function () {
    let thankYou = document.createElement('p');
    thankYou.className = 'thankYou';
    thankYou.innerHTML = "Thank you for showing interest in me";
    thankYou.style.display = "inline";
    form.appendChild(thankYou);
  })
})


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