import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { appConfig } from './app.config';
import { ServerRoute, RenderMode } from '@angular/ssr'; // ✅ Correct import

console.log(RenderMode); // ✅ This is fine for debugging

const transformedServerRoutes: ServerRoute[] = serverRoutes.map(({ component, ...route }) => ({
  ...route,
  renderMode: RenderMode.SSR // ✅ Use RenderMode.SSR only if it exists
})) as ServerRoute[];

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(transformedServerRoutes)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
