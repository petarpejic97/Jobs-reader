import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobDetailRoutingModule } from './job-detail-routing.module';
import { JobDetailComponent } from './job-detail.component';

@NgModule({
    declarations: [
        JobDetailComponent
    ],
    imports: [
        RouterModule,
        JobDetailRoutingModule
    ]
})
export class JobDetailModule{}
