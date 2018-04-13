import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { JobForm } from '../../models/JobForm';

@Component({
    selector: 'page-form',
    templateUrl: 'form.html'
})
export class FormPage {
    job: JobForm;
    constructor(public navCtrl: NavController)
    {
        this.job = new JobForm();

    }

    ngOnInit(): void {
		this.getJobForm(1);
    }

	private getJobForm(id): void {
		this.job = new JobForm();

		this.job.Job_Name = 'Software Developer';
		this.job.Form_Name = 'Approval Form';
		this.job.Next_Approver = 'Cole Knutson';
		this.job.Originator = 'Kyle Olson';
		this.job.CreatedOn = '04/13/2018';

        /*this._JobService.getJobForms(userID).subscribe(data => {
            console.log("data", data);
            this.jobs = data;
        });*/
    }


}