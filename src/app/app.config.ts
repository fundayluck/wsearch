import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // QUICK REMINDER!! if you making request with HTTP REquest,
  // import provideHttpClient(), is important!
  providers: [provideRouter(routes), provideHttpClient()],
};
