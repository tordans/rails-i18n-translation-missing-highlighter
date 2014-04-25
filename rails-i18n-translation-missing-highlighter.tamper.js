// ==UserScript==
// @name         rails-i18n-translation-missing-highlighter
// @namespace    http://www.betterplace.org/
// @version      0.1
// @description  See https://github.com/tordans/rails-i18n-translation-missing-highlighter
// @match        http://www.betterplace.dev/*
// @copyright    2012+, Tobias Jordans
// ==/UserScript==

var $translation_missing_elements = $(":contains(translation missing:)");
var $quickinfo_element            = $('.quickinfo.generic-admin-box.for-platform-admins');

if($translation_missing_elements.length > 0) {
  $translation_missing_elements.each( function(index, element) {
    var text = element.text;
    if(text) {
      var missing_text = text.toString().match(/translation missing: [a-zA-Z0-9\.]*/);
      $quickinfo_element.append("<h4>" + missing_text + "</h4>");
    }
  });
} else {
  $quickinfo_element.append(" / no translations missing");
}

