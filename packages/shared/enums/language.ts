import * as en from '@webhook-handler/shared/locales/en.json';
import * as fr from '@webhook-handler/shared/locales/fr.json';

/**
 * @type KeyValuePair
 * @description Key value pair type
 */
export type KeyValuePair = { [key: string]: KeyValuePair | string };

/**
 * @type Translations
 * @description Translations type
 */
export type Translations = { en: KeyValuePair; fr: KeyValuePair };

/**
 * @enum Language
 * @description Language enum
 */
export enum Language {
  EN = 'en',
  FR = 'fr',
}

/**
 * @enum LanguageLocales
 * @description Language locales enum
 */
export enum LanguageLocales {
  FR = 'fr-FR',
  EN = 'en-US',
}

/**
 * @description Language locales map
 */
export const languageLocales: { [key in Language]: LanguageLocales } = {
  [Language.EN]: LanguageLocales.EN,
  [Language.FR]: LanguageLocales.FR,
};

/**
 * @description Translations map
 */
export const translations: Translations = {
  en,
  fr,
};
