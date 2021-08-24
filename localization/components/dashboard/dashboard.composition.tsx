
import React from 'react';
import { Dashboard } from './dashboard';
import { LanguageProvider } from '@localization/translations.language-provider';


export function DashboardExample() {

    return (
      <LanguageProvider language="en">
        <Dashboard></Dashboard>
      </LanguageProvider>
    );
  }



