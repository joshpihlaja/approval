import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController} from 'ionic-angular';

import { FormService } from '../form/FormService';

import { JobForm } from '../../models/JobForm';

@Component({
    selector: 'page-form',
    templateUrl: 'form.html'
})
export class FormPage {
    job: JobForm;
    constructor(public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		public alertCtrl: AlertController,
        private _FormService: FormService    )
    {
        this.job = new JobForm();
        

    }

 //   ngOnInit(): void {
	//	this.getForm(1);
 //   }

	//private getForm(id): void {
        

 //       this._FormService.getForm(12757).subscribe(data => {
 //           console.log("data", data);
 //           this.job = data;
 //       });
 //   }

	public approve(): void {
		let confirm = this.alertCtrl.create({
			message: 'Form Approved!',
			buttons: [
				{
					text: 'Ok'
				}
			]
		});
		confirm.present();
	}

	public deny(): void {
		let confirm = this.alertCtrl.create({
			message: 'Form Declined.',
			buttons: [
				{
					text: 'Ok'
				}
			]
		});
		confirm.present();
	}
}