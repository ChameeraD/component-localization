import React from 'react';
import { ChangeLanguage, UseTranslation, Translations} from '@localization/translations.i18n';

Translations();
//@ts-ignore
export const Context = React.createContext();

export interface LanguageProviderProps extends React.HTMLAttributes<React.ReactNode> {
  props: any
  language: string,
};

export function LanguageProvider(props) {

  ChangeLanguage(props.language);
  const i18n = UseTranslation();
  
  return (
    <Context.Provider value = {{i18n}}>
      {props.children}
    </Context.Provider>
  );
}
