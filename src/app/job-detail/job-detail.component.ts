import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  id: string;
  job: Job;
  detailloader: boolean;
  defoultImage = 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg';
  constructor(private jobService: JobService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params.id;
          this.job = this.jobService.getJob(this.id);
          if (!this.job.company_logo){
            this.job.company_logo = this.defoultImage;
          }
          this.jobService.headerTitle.next(this.job.title);
          this.jobService.setloader.next(false);
        }
      );
    }
}
