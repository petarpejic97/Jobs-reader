import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../job.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class DataStorageService{

    constructor(private jobService: JobService,
                private http: HttpClient){}

    fetchJobs(): Observable<Job[]>{
        return this.http
            .get<Job[]>('https://' + environment.host + '/positions.json?description=angular')
            .pipe(
                tap( jobs => {
                    this.jobService.setJobs(jobs);
                })
            );
    }
}
