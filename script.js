//translation dictionaries
const KR_LANG = {
  menu_buttons:{
    sign_up:"회원가입",
    log_in:"로그인",
    random_server:"랜덤 서버 생성하기",
    settings:"설정",
    exit:""
  },
  sign_up_page_form:{
    fullName:"사람 Имя",
    email:"매일@naver.kr",
    login:"로그인",
    password:"비밀번호",
  },
  sign_up_page_text:{
    title:"회원가입",
    text1:"You successfully signed up!"
  },
  sign_up_page_btn:{
    main_page1:"매인 페이지",
    submit_btn:"Зарегистрироваться",
    main_page2:"Главная Страница",
  },
  log_in_page_text:{
    title:"Log In",
    text1:"You successfully logged in!"
  },
  log_in_page_form:{
    log_in:"LogIn or Email",
    password:"Password",
  },
  log_in_page_btn:{
    main_page1:"Main Page",
    submit_btn:"Login",
    main_page2:"Main Page",
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
    sign_up_page_form:{
      fullName:"Full Name",
      email:"Email@gmail.com",
      login:"Nickname",
      password:"Password",
    },
    sign_up_page_text:{
      title:"Sign Up",
      text1:"You successfully signed up!"
    },
    sign_up_page_btn:{
      main_page1:"Main Page",
      submit_btn:"Submit",
      main_page2:"Main Page",
    },
    log_in_page_text:{
      title:"Log In",
      text1:"You successfully logged in!"
    },
    log_in_page_form:{
      log_in:"LogIn or Email",
      password:"Password",
    },
    log_in_page_btn:{
      main_page1:"Main Page",
      submit_btn:"Login",
      main_page2:"Main Page",
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
  sign_up_page_text:{
    title:"Регистрация",
    text1:"Спасибо за регистрацию!"
  },
  sign_up_page_form:{
    fullName:"Полное Имя",
    email:"Имэйл@mail.ru",
    login:"Логин",
    password:"Пароль",
  },
  sign_up_page_btn:{
    main_page1:"Главная Страница",
    submit_btn:"Зарегистрироваться",
    main_page2:"Главная Страница",
  },
  log_in_page_text:{
    title:"Вход",
    text1:"Вы успешно зашли в свой аккаунт!"
  },
  log_in_page_form:{
    log_in:"Логин или Email",
    password:"Пароль",
  },
  log_in_page_btn:{
    main_page1:"Главная Страница",
    submit_btn:"Войти",
    main_page2:"Главная Страница"
  }
}


//single page strings
var sign_up = "/html/sign_up.html";
var log_in = "/html/log_in.html";
var randomize = "/html/randomize_server.html";



var arr = document.querySelectorAll(".background_btn > p");
var menu_box = document.getElementById("menu_box");
var language_panel = document.querySelectorAll('#pop_up > img');
var menu_buttons_text = document.querySelectorAll('#menu_box > .background_btn > p');
var menu_buttons = document.querySelectorAll('#menu_box > .background_btn');
var but = document.querySelectorAll('.background_btn');
var form_blank = document.querySelectorAll('.form_blank');
var title = document.querySelectorAll('h2 span');
// var text = document.querySelectorAll('span');
var language;
var PathTo = window.location;

var img_icon = document.getElementsByClassName("img_class");
var state = undefined;

var parent = document.getElementById("menu_box");

//stored values in localStorage
var mystate = localStorage.getItem('saveState');
var langSaved = localStorage.getItem('saveLang');



var text_class = [];

function addText(id){
  return text_class.push(id);
}


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
            PathTo = randomize;
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



console.log(RUS_LANG.sign_up_page);

  function mainPage(){
    audio.addEventListener('ended',function(){
      window.location.href = "/";
    });
  }

  function returnLang(blockID){
    return document.getElementById(blockID).lang = langSaved;
  }
  //set up lang:

  //main menu events
  if(window.location == "http://localhost:8080/"){
    returnLang("menu_box");
    //translate buttons
    setLanguage(KR_LANG.menu_buttons, RUS_LANG.menu_buttons, US_LANG.menu_buttons, menu_buttons_text,"innerHTML");
  }
  //sign up page events

    if(PathTo==window.location.origin + sign_up){
      //sign_up.js
      load_sign_up();
    }

  //log in page events
  if(PathTo==window.location.origin + log_in){
    //log_in.js
    load_log_in();
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

// var btn1 = document.getElementsByClassName("hibtn");
// btn1[0].onclick = function(){
//   // console.log("text_class: " + text_class);
//   console.log("navigator" + nagivator.language);
// }
console.log(state);



function translatelang(lang, lang_list,element,property){
  if(langSaved == lang){
    //menu buttons
    for(const [key,value] of Object.entries(lang_list)){
      var index = Object.keys(lang_list).indexOf(key);
      // menu_buttons_text[index].innerHTML = value;
      if(property == 'innerHTML'){
        element[index].innerHTML = value;
      }
      if(property == 'placeholder'){
        element[index].placeholder = value;
      }
    }
  }
}


function setLanguage(ko_lang, ru_lang, en_lang, element,property){
  translatelang("ru", ru_lang,element,property);
  translatelang("ko", ko_lang,element,property);
  translatelang("en", en_lang,element,property);
}
