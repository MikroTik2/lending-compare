let language = window.navigator.language;
let languageTwo = language.substr(0, 2);
let currentLocal = document.getElementsByTagName('html')[0].getAttribute('lang-js');

if (languageTwo != currentLocal);

switch (languageTwo) {
   case "ru":
      if (currentLocal != "ru") {
         window.location.href = "index_ru.html";
   }

      break;

   default:
      if (currentLocal != "en") {
         window.location.href = "index.html";
   }
}