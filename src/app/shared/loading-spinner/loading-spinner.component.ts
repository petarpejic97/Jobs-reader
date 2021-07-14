import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/job.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  loader = true;
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.setloader.subscribe((value) => {
      this.loader = value;
    });
  }
}
