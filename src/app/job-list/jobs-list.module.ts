import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobItemComponent } from './job-item/job-item.component';
import { JobListRoutingModule } from './job-list-routing.module';
import { JobListComponent } from './job-list.component';

@NgModule({
    declarations: [
        JobListComponent,
        JobItemComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        JobListRoutingModule
    ]
})
export class JobListModule{}
