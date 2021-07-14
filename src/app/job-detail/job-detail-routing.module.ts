import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsResolverService } from '../job-resolver.service';
import { JobDetailComponent } from './job-detail.component';

const routes: Routes = [
    {path : '', component : JobDetailComponent, resolve : [JobsResolverService]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobDetailRoutingModule{}
