
// Importar traduções por idioma e namespace
import enMessages from './en/messages.json';
import enMenu from './en/menu.json';
import enErrors from './en/errors.json';
import enStaticText from './en/static-text.json';
import ptMessages from './pt/messages.json';
import ptMenu from './pt/menu.json';
import ptErrors from './pt/errors.json';
import ptStaticText from './pt/static-text.json';
import esMessages from './es/messages.json';
import esMenu from './es/menu.json';
import esErrors from './es/errors.json';
import esStaticText from './es/static-text.json';
import frMessages from './fr/messages.json';
import frMenu from './fr/menu.json';
import frErrors from './fr/errors.json';
import frStaticText from './fr/static-text.json';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        detection: {
            order: ["path", "htmlTag"],
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        debug: false,
        supportedLngs: ['en', 'pt', 'es', 'fr'],
        ns: ['static-text', 'messages', 'menu', 'errors'], // Definir namespaces
        defaultNS: 'messages', // Namespace padrão
        resources: {
        en: {
            'static-text': enStaticText,
            messages: enMessages,
            menu: enMenu,
            errors: enErrors,
        },
        pt: {
            'static-text': ptStaticText,
            messages: ptMessages,
            menu: ptMenu,
            errors: ptErrors,
        },
        es: {
            'static-text': esStaticText,
            messages: esMessages,
            menu: esMenu,
            errors: esErrors,
        },
        fr: {
            'static-text': frStaticText,
            messages: frMessages,
            menu: frMenu,
            errors: frErrors,
        },
        },
    });

export default i18n;
