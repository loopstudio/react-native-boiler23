interface Languages {
  english: 'en';
  spanish: 'es';
}

const languages: Record<keyof Languages, Languages[keyof Languages]> = {
  english: 'en',
  spanish: 'es',
};

export type LanguageProps = 'en' | 'es';

export default languages;
