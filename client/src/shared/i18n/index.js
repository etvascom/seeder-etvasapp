import { I18nService } from '@etvas/i18n'
import languages from './languages'
import en from './dictionaries/en'

const url =
  process.env.REACT_APP_PUBLIC_S3_URL ||
  'https://etvas-public-assets-dev.s3.eu-central-1.amazonaws.com'

export const i18nService = new I18nService(languages, {
  defaultLanguage: 'en',
  sessionKey: 'etvas.language',
  dictionaryUrl: `${url}/i18n/hello-etvas/{lang}.json`
})

i18nService.loadDictionary('en', en)
