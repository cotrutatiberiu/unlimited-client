import { languageController } from '@/utils/language/languageController';

const useLanguage = (language = 'en') => languageController.getInstance()[language];

export default useLanguage;
