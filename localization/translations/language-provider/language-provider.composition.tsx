import React from 'react';
import { LanguageProvider } from './language-provider';
import { Dashboard } from '@localization/components.dashboard';

export const EnglishLanguageProvider = () => (
    <LanguageProvider language="en">
        <Dashboard></Dashboard>
    </LanguageProvider>
);

export const GermanLanguageProvider = () => (
    <LanguageProvider language ="de">
        <Dashboard></Dashboard>
    </LanguageProvider>
);
