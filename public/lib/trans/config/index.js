import { useTranslation } from 'react-i18next'

export default function Language() {
    const { t, i18n } = useTranslation()
    const isIDLang = i18n.language === 'id'
    const isENLang = i18n.language === 'en'

    return {
        translate: t,
        isIDLang,
        isENLang,
    }
}
