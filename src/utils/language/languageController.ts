export const languageController = (function () {
  let instance;

  function createInstance() {
    const languages = ['en'];
    const dictionary = {};

    languages.forEach((language: string) => {
      dictionary[language] = require('/src/utils/language/languages/en.ts');
    });

    return dictionary;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();