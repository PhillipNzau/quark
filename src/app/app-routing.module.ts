import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from "./auth/auth.module";

const routes: Routes = [
  {path: '', component: AuthModule},
  {path: 'chats', loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
  {path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
