import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en',
}

export const getI18n = ({ currentLocale = 'en' }: { currentLocale?: string }) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  if (currentLocale === LANGUAGES.ENGLISH) return english

  return english
}
