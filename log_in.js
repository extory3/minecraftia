function load_log_in(){
  var select_title = document.querySelector('#log_in_box h2');
  var select_text = document.querySelector('.rainbow_background');
  addText(select_title);
  addText(select_text);

  setLanguage(KR_LANG.log_in_page_btn, RUS_LANG.log_in_page_btn, US_LANG.log_in_page_btn, arr,"innerHTML");
  setLanguage(KR_LANG.log_in_page_form, RUS_LANG.log_in_page_form, US_LANG.log_in_page_form, form_blank,"placeholder");
  setLanguage(KR_LANG.log_in_page_text, RUS_LANG.log_in_page_text, US_LANG.log_in_page_text, text_class,"innerHTML");

  but[0].addEventListener('click',mainPage);
  but[1].addEventListener('click',log_in_success);
  but[2].addEventListener('click',mainPage);
}
