import i18next from 'i18next';
import enTranslate from '@/locales/en/common.json';
import ptTranslate from '@/locales/pt/common.json';
import { initReactI18next } from 'react-i18next';
const resources = {
    en: { translation: enTranslate, },
    pt: { translation: ptTranslate, },
}
i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "pt"
    }

    )
export default i18next;