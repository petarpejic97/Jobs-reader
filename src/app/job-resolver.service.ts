import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Job } from './job.model';
import { JobService } from './job.service';
import { DataStorageService } from './shared/data-storage.service';

@Injectable({providedIn: 'root'})
export class JobsResolverService implements Resolve<Job[]>{
    constructor(private dataStorageService: DataStorageService,
                private jobService: JobService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Job[] | Observable<Job[]> | Promise<Job[]> {
        if (!this.jobService.getJobs()){
            return this.dataStorageService.fetchJobs().pipe(
                catchError((error) => {
                    this.jobService.errorHappened.next(true);
                    return EMPTY;
                })
            );
        }


    }

}
