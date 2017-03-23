import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MainPageComponent } from './main-page/main-page.component';
export const router: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'search', component: SearchPageComponent},
    {path: 'admin', component: AdminPageComponent},
    {path: 'main', component: MainPageComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);