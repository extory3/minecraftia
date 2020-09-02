var arr = document.getElementsByClassName("background_btn");
var click_audio = new Audio("minecraft_click.mp3");
var language;
function play(){
  return click_audio.play();
}

for(var i=0;i<arr.length;i++){
  arr[i].addEventListener('click',play);
}
var img_icon = document.getElementsByClassName("img_class");
var state = false;

for(let i=0;i<img_icon.length;i++){
  img_icon[i].addEventListener("click",setLanguage);
}


function getLanguage() {
(localStorage.getItem('language') == null) ? setLanguage('rus') : false;
$.ajax({
url:  '/lang/' +  localStorage.getItem('language') + '.json',
dataType: 'json', async: false, dataType: 'json',
success: function (lang) { language = lang } });
}

function setLanguage(lang) {
localStorage.setItem('language', lang);
}
console.log(language.menu);
