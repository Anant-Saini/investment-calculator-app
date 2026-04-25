// src/app/app.config.ts
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeIn from '@angular/common/locales/en-IN'; // Import Indian English locale

// This is the crucial step that tells Angular how Indian numbers work!
registerLocaleData(localeIn);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'en-IN' }, // Set global locale to India
  ],
};
