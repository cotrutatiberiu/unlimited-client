/* eslint-disable global-require */
// import { ILanguageTemplate } from '@/interfaces/ILanguageTemplate';
import { languageController } from "@/utils/language/languageController";
import { useEffect, useState } from "react";

const useLanguage = (language = "en") => {
  const [languageConstants, setLanguageConstants] = useState(() =>
    setLanguageConstants(languageController.getInstance()[language])
  );

  return languageConstants;
};

export default useLanguage;
