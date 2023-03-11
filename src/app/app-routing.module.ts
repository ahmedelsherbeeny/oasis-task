import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { FeaturesGuardGuard } from './guards/features-guard.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  
  {
    path:'',
    loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule),
    canActivate:[AuthGuardGuard]
},
{
  path:'',
  loadChildren:()=>import('./features/features.module').then(mod=>mod.FeaturesModule),
  canActivate:[FeaturesGuardGuard]
  
},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
