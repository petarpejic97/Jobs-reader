import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = '';
  showBack = false;
  fontSize = '1em';
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.headerTitle.subscribe(
      (data) => {
        this.title = data;
        this.fontSize = this.determineFontSize();
        if (this.title === 'Jobs reader'){
          this.showBack = false;
        }
        else{
          this.showBack = true;
        }
      }
    );
  }
  determineFontSize(): string{
      switch (true){
        case this.title.length < 20 :
          return '1em';
        case this.title.length >= 20 && this.title.length < 35 :
          return '0.7em';
        case this.title.length >= 35 :
          return '0.6em';
      }
  }
  onBack(): void{
    this.showBack = !this.showBack;
    this.jobService.headerTitle.next('Jobs reader');
  }

}
