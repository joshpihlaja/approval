import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { JobService } from '../job/JobService';
import { FormPage } from '../form/form';

import { JobForm } from '../../models/JobForm';

@Component({
    selector: 'page-job',
    templateUrl: 'job.html'
})
export class JobPage {
    jobs: JobForm[];
    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        private _JobService: JobService)
    {
        this.jobs = [];

    }

    ngOnInit(): void {
        this.getJobForms(1);    
    }

    getJobForms(userID) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();

        this._JobService.getJobForms(userID).subscribe(data => {
            this.jobs = data;
            loading.dismiss();
        });
	}

	public ViewForm(job: JobForm): void {
		this.navCtrl.push(FormPage, { jobID: job.Id });
	}


}