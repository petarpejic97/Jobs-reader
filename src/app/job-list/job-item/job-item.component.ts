import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/job.model';
import { JobService } from 'src/app/job.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {

  defoultImage = 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg';

  @Input() job: Job;
  @Input() id: string;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    if (!this.job.company_logo){
      this.job.company_logo = this.defoultImage;
    }
  }
  onSelected(title: string): void{
    this.jobService.headerTitle.next(title);
  }

}
