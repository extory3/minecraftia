//translation dictionaries
const KR_LANG = {
  menu_buttons:{
    sign_up:"회원가입",
    log_in:"로그인",
    random_server:"랜덤 서버 생성하기",
    settings:"설정",
    exit:""
  },
  sign_up_page:{
    fullName:"Полное Имя",
    email:"Имэйл",
    login:"Логин",
    password:"Пароль",
    submit_btn:"Зарегистрироваться",
    main_page:"Главная Страница",
  }
}
const US_LANG = {
    menu_buttons:{
      sign_up:"Sign Up",
      log_in:"Log In",
      random_server:"Randomize Minecraft Server",
      settings:"Settings",
      exit:"Exit"
    },
    sign_up_page:{
      fullName:"Полное Имя",
      email:"Имэйл",
      login:"Логин",
      password:"Пароль",
      submit_btn:"Зарегистрироваться",
      main_page:"Главная Страница",
    }
}
const RUS_LANG = {
  menu_buttons:{
    sign_up:"Регистрация",
    log_in:"Логин",
    random_server:"Генерация случайного сервера",
    settings:"настройки",
    exit:"выход"
  },
  sign_up_page:{
    fullName:"Полное Имя",
    email:"Имэйл",
    login:"Логин",
    password:"Пароль",
    submit_btn:"Зарегистрироваться",
    main_page:"Главная Страница",
  }
}


//page strings
var sign_up = "/html/sign_up.html";
var log_in = "/html/log_in.html";
var randomize = "/html/randomize_server.html";

function querySelectorAll(elementParam){
  return document.querySelectorAll(elementParam);
}

var arr = document.querySelectorAll(".background_btn");
var menu_box = document.getElementById("menu_box");
var language_panel = document.querySelectorAll('#pop_up > img');
var menu_buttons_text = document.querySelectorAll('#menu_box > .background_btn > p');
var menu_buttons = querySelectorAll('#menu_box > .background_btn');
var but = document.querySelectorAll('.background_btn');
var language;
var PathTo = window.location;

var img_icon = document.getElementsByClassName("img_class");
var state = undefined;

var parent = document.getElementById("menu_box");

//stored values in localStorage
var mystate = localStorage.getItem('saveState');
var langSaved = localStorage.getItem('saveLang');






console.log(but);



var mystateAfter = mystate ==='true';

//state after the language is chosen
if(mystateAfter==true){


  for(let i=0;i<but.length;i++){
    but[i].addEventListener('click',play);
  }

    for(let i=0;i<menu_buttons.length;i++){
      menu_buttons[i].addEventListener('click',function(){
        //if element in sign_up ID
          if(i==0){
            PathTo = sign_up;
          }
          if(i==1){
            PathTo = log_in;
          }
          if(i==2){
            PathTo = sign_up;
          }
        clickHandler(PathTo);
      },false);
    }

    // var buttonslal = document.querySelectorAll("#sign_up_box > .background_btn");
    // buttonslal[0].addEventListener('click',sign_up_success());
    var audio = document.getElementById('a-on-click'),
    clickHandler = function(PathTo) {
        audio.addEventListener('ended', function() {
          window.location = PathTo;
        });
      };




  function mainPage(){
    audio.addEventListener('ended',function(){
      window.location.href = "/";
    });
  }

  //main menu events
  if(window.location == "http://localhost:8080/"){
    setLanguage(KR_LANG.menu_buttons, RUS_LANG.menu_buttons, US_LANG.menu_buttons, menu_buttons_text);
  }
  //sign up page events
  if(PathTo==window.location.origin + sign_up){

    
// setLanguage(KR_LANG.sign_up_page, RUS_LANG.sign_up_page, US_LANG.sign_up_page, but[0]);
  but[0].addEventListener('click',mainPage);
  but[1].addEventListener('click',sign_up_success);
  but[2].addEventListener('click',mainPage);
  }
  //log in page events
  if(PathTo==window.location.origin + log_in){

  }
  // random
  if(PathTo==window.location.origin + randomize){

  }


  console.log("he");
}




function sign_up_success(){
  audio.addEventListener('ended', function() {
    document.getElementById('sign_up_box').style.display = "none";
    document.getElementsByClassName('success')[0].style.display="block";
  });
}
function log_in_success(){
  audio.addEventListener('ended',function(){
    document.getElementById('log_in_box').style.display = "none";
    document.getElementsByClassName('success')[0].style.display="block";
  });
}
function play(){
  return audio.play();
}

console.log(document.URL);


for(let i = 0; i < img_icon.length; i++){

}


for(let i=0;i<img_icon.length;i++){
  if(mystate==undefined){
    document.getElementById("pop_up").style.display="flex";
    img_icon[i].addEventListener("click",function(){
      switch(i){
            case 0:
            language="ko";
            break;

            case 1:
            language="en";
            break;

            case 2:
            language="ru";
            break;
      }
      state=true;
      mystate = localStorage.setItem("saveState",state);
      langSaved = localStorage.setItem("saveLang",language);
      location.reload();
    });
  }
}

var btn1 = document.getElementsByClassName("hibtn");
btn1[0].onclick = function(){
  console.log("Item storage: (mystate) " + mystate);
  console.log("state: " + state);
  console.log("langSaved: " + langSaved);
  console.log("menu box lang : " + menu_box.lang);
}
console.log(state);





function tran(parent){
  for(const [key,value] of Object.entries(parent)){
    var index = Object.keys(parent).indexOf(key);
    // menu_buttons_text[index].innerHTML = value;
    console.log(value);
  }
}


function translatelang(lang, lang_list,element){
  if(langSaved == lang){
    //menu buttons
    for(const [key,value] of Object.entries(lang_list)){
      var index = Object.keys(lang_list).indexOf(key);
      // menu_buttons_text[index].innerHTML = value;
      element[index].innerHTML = value;
    }
  }
}

function setLanguage(ko_lang, ru_lang, en_lang, element){
  translatelang("ru", ru_lang,element);
  translatelang("ko", ko_lang,element);
  translatelang("en", en_lang,element);
}
