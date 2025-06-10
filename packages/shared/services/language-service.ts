import { type KeyValuePair, Language, languageLocales, translations } from '@webhook-handler/shared/enums/language';

/**
 * @class LanguageService
 * @description Language service class, used to translate the text
 */
export default class LanguageService {
  /**
   * @property language
   * @description The language
   */
  private language: Language;
  /**
   * @property locale
   * @description The locale
   */
  private locale: string;

  /**
   * @constructor
   * @param language - The language
   */
  constructor(language?: Language) {
    this.language = language || Language.EN;
    this.locale = languageLocales[this.language];
  }

  /**
   * @description Set the language
   * @param language - The language
   */
  setLanguage(language: Language) {
    this.language = language;
    this.locale = languageLocales[this.language];
  }

  /**
   * @description Translate the text
   * @param path - The path of the text
   * @returns The translated text
   */
  translate = (path: string[]): string => {
    return path
      .reduce((acc: KeyValuePair, key: string) => {
        const value = acc[key];
        if (value === undefined) {
          throw new Error(`Translation path not found: ${path.join('.')}`);
        }
        return value;
      }, this.getTranslation())
      .toString();
  };

  /**
   * @description Get the translation
   * @returns The translation
   */
  getTranslation = () => translations[this.language];
}
