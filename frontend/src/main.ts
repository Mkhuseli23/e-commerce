import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import 'zone.js';


bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...(appConfig.providers || []), RouterModule]
})
  .catch((err) => console.error(err));
