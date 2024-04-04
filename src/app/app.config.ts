import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { HTTPStatus, LoaderInterceptor } from './interceptor/loader.interceptor';
import { AuthGuard } from './pages/guards/auth-guard.service';
import { AuthService } from './services/auth.service';

const RxJS = [LoaderInterceptor,HTTPStatus]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(), 
    provideHttpClient(),
    AuthGuard,
    RxJS,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ]
};
