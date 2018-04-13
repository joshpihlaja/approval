import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JobService } from '../job/JobService';

@Component({
    selector: 'page-job',
    templateUrl: 'job.html'
})
export class JobPage {
    jobs: any = {};
    constructor(public navCtrl: NavController,
        private _JobService: JobService)
    {    

    }

    ngOnInit(): void {
        this.getJobForms(1);    
    }

    getJobForms(userID) {
        this._JobService.getJobForms(userID).subscribe(data => {
            this.jobs = data;
        });
    }


}