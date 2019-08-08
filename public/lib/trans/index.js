import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './common/en'
import id from './common/id'

const isDevEnv = process.env.NODE_ENV === 'development'

export default i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { en, id },
        lng: 'id',
        fallbackLng: 'id',
        debug: isDevEnv,

        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false,

        interpolation: {
            escapeValue: true,
        },
    })
