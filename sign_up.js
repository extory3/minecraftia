function load_sign_up(){
  var select = document.querySelector('.rainbow_background');
  var select2 = document.querySelector('#sign_up_box > h2');
  addText(select2);
  addText(select);
  returnLang("sign_up_box");

    //translate buttons
    setLanguage(KR_LANG.sign_up_page_btn, RUS_LANG.sign_up_page_btn, US_LANG.sign_up_page_btn, arr,"innerHTML");
    //translate form placeholders
    setLanguage(KR_LANG.sign_up_page_form, RUS_LANG.sign_up_page_form, US_LANG.sign_up_page_form, form_blank,"placeholder");
    setLanguage(KR_LANG.sign_up_page_text,RUS_LANG.sign_up_page_text,US_LANG.sign_up_page_text,text_class,"innerHTML");
    // setLanguage()
  // setLanguage(KR_LANG.sign_up_page, RUS_LANG.sign_up_page, US_LANG.sign_up_page, but[0]);
    but[0].addEventListener('click',mainPage);
    but[1].addEventListener('click',sign_up_success);
    but[2].addEventListener('click',mainPage);

}
