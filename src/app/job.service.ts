import {Subject} from 'rxjs';
import {Job} from './job.model';

export class JobService {
  headerTitle = new Subject<string>();
  setloader = new Subject<boolean>();
  errorHappened = new Subject<boolean>();

  private loadedJobs: Job[];

  constructor() {
  }

  getJob(idd: string): Job {
    return this.loadedJobs.find(job => job.id === idd);
  }

  setJobs(jobs: Job[]): void {
    this.loadedJobs = jobs;
  }

  getJobs(): Job[] {
    return this.loadedJobs;
  }

}
