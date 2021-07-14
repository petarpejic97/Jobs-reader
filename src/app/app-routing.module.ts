import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRouter: Routes = [
    {path: '', redirectTo: '/job-list', pathMatch: 'full'},
    {
        path: 'job-list',
        loadChildren: () => import('./job-list/jobs-list.module').then(m => m.JobListModule)
    },
    {
        path: 'job-detail/:id',
        loadChildren: () => import('./job-detail/job-detail.module').then(m => m.JobDetailModule)
    },
];
@NgModule({
    imports: [RouterModule.forRoot(appRouter, {preloadingStrategy: PreloadAllModules})],
    exports : [RouterModule]
})
export class AppRoutingModule {

}
