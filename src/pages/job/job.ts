import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JobService } from '../job/JobService';

import { JobForm } from '../../models/JobForm';

@Component({
    selector: 'page-job',
    templateUrl: 'job.html'
})
export class JobPage {
    jobs: JobForm[];
    constructor(public navCtrl: NavController,
        private _JobService: JobService)
    {
        this.jobs = [];

    }

    ngOnInit(): void {
        this.getJobForms(1);    
    }

	getJobForms(userID) {
		let job = new JobForm();

		job.Job_Name = 'Software Developer';
		job.Form_Name = 'Approval Form';
		job.Next_Approver = 'Cole Knutson';
		job.Originator = 'Kyle Olson';
		job.CreatedOn = '04/13/2018';

		this.jobs.push(job);

		job = new JobForm();

		job.Job_Name = 'Project Manager';
		job.Form_Name = 'Approval Form';
		job.CreatedOn = '04/13/2018';
		job.Next_Approver = 'Nate Schweigert';
		job.Originator = 'Peter Hanson';

		this.jobs.push(job);
        /*this._JobService.getJobForms(userID).subscribe(data => {
            console.log("data", data);
            this.jobs = data;
        });*/
    }


}