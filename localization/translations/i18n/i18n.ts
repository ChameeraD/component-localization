import React from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const translation = i18n;

export function Translations(){
i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        header: {
          title: "Writers"
        },
        profile: {
          name: "Name",
          position: "Software Developer",
          description: "Developer with experiance on developing, testing and implementing new software programs.",
          apply: "Apply",
        }
      }
    },
    de: {
      translation: {
        header: {
          title: "Schriftsteller"
        },
        profile: {
          name: "Name",
          position: "Softwareentwickler",
          description: "Entwickler mit Erfahrung im Entwickeln, Testen und Implementieren neuer Softwareprogramme.",
          apply: "Anwenden",
        }
      }
    }
  }
});
}

var enCount = 0;
var deCount = 0;
export function ChangeLanguage(lang: any){
  console.log(lang, enCount, deCount)
  if(enCount == 0 && lang == 'en'){
    enCount = 1;
    translation.changeLanguage(lang);
  }
  if(deCount == 0 && lang == 'de'){
    deCount = 1;
    translation.changeLanguage(lang);
  }
  return true;
}

export function UseTranslation(){
  const { t } = useTranslation();
  return t;
}
