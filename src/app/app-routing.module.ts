import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { authGuard } from './guards/auth.guard';
import { publicGuard } from './guards/public.guard';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    pathMatch: 'full',
    canActivate: [publicGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [publicGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    pathMatch: 'full',
    canActivate: [publicGuard],
  },
  {
    path: 'home',
    pathMatch: 'full',
    canActivate: [authGuard],
    children: [{ path: '', component: HomeComponent, pathMatch: 'full' }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
