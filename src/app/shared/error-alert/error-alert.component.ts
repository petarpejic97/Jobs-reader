import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/job.service';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
export class ErrorAlertComponent implements OnInit {
  error: boolean;
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.errorHappened.subscribe((value) => {
      this.error = value;
    });
  }
  closeErrorBox(): void{
    this.error = null;
    window.location.reload();
  }
}
