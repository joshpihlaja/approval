import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
//import { Keyboard } from '@ionic-native/keyboard';

//import { ApiService } from '../../services/ApiService';
//import { LifeTileHelper } from '../../helpers/LifeTileHelper';
//import { UserHelper } from '../../helpers/UserHelper';

import { Login } from '../../models/Login';
import { User } from '../../models/User';
//import { MobileData } from '../../models/MobileData';

//import { WelcomePage } from '../welcome/welcome';
import { JobPage } from '../job/job';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	title: string;
	UserLogin: Login;
	user: User;
	//mobileData: MobileData;
	rememberMe: boolean;

	constructor(
		//private _ApiService: ApiService,
		//public lifeTileHelper: LifeTileHelper,
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public loadingCtrl: LoadingController
		//private storage: Storage,
		//public keyboard: Keyboard,
		//public userHelper: UserHelper
	) {
		this.UserLogin = new Login();
		this.user = new User();
		this.rememberMe = false;
		//this.keyboard.disableScroll(true);
	}

	public DoLogin(): void {
		//if (this.UserLogin.Username && this.UserLogin.Password) {
			this._performLogin();
		//}
		

		
	}

	public DoCancel(): void {
		//this.navCtrl.push(WelcomePage);
	}

	private _performLogin(): void {
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		loading.present();
        this.navCtrl.setRoot(JobPage);
        loading.dismiss();


		//this._ApiService.LoginMobileUser(this.UserLogin).subscribe(
		//	(data) => {
		//		this.user = data;

		//		if (this.user.Id == '00000000-0000-0000-0000-000000000000') {
		//			let confirm = this.alertCtrl.create({
		//				title: 'Invalid login',
		//				message: 'Invalid username or password, please try again.',
		//				buttons: [
		//					{
		//						text: 'Ok'
		//					}
		//				]
		//			});
		//			confirm.present()
		//		} else {
		//			this.user.RememberMe = this.rememberMe;

		//			this.storage.set("user", this.user);
		//			this.storage.get('user').then((val) => {
		//				this._loadData(this.user);
		//			});
					
		//		}
		//		loading.dismiss();
		//	},
		//	(e) => {
		//		let confirm = this.alertCtrl.create({
		//			title: 'Error',
		//			message: e,
		//			buttons: [
		//				{
		//					text: 'Ok'
		//				}
		//			]
		//		});
		//		confirm.present()
		//		loading.dismiss();
		//	});
	}
	private _loadData(): any {
		//let mobileData = new MobileData();

		//mobileData._user = user;
		//this._ApiService.LoadUserMobileData(user).subscribe(
		//	(data) => {
		//		let mobileData = new MobileData();

		//		mobileData = this.userHelper.InitData(data, user);

		//		this.storage.set("mobileData", mobileData);
		//		this.navCtrl.push(TabsPage, { user: user, mobileData: mobileData });
		//	}, () => {
		//		let confirm = this.alertCtrl.create({
		//			title: 'Oops!',
		//			message: 'There was a problem loading the data. Please try again, or send an email to crewcare@imagetrend.com.',
		//			buttons: [
		//				{
		//					text: 'Ok'
		//				}
		//			]
		//		});
		//		confirm.present();
		//	});
	}
	
	public ForgotPassword(): void {
		let prompt = this.alertCtrl.create({
			title: "What is your email?",
			inputs: [
				{
					name: 'Email'
				},
			],
			buttons: [
				{
					text: 'Cancel',
					handler: data => {

					}
				},
				{
					text: 'Send',
					handler: d => {
						if (!d.Email || d.Email == '') {
							let confirm = this.alertCtrl.create({
								title: 'Invalid Information',
								message: 'An email is required in order to reset password.',
								buttons: [
									{
										text: 'Ok'
									}
								]
							});
							confirm.present()
						} else if (!this.EmailValidation(d.Email)) {
							let confirm = this.alertCtrl.create({
								title: 'Invalid Information',
								message: 'Please enter a valid email address.',
								buttons: [
									{
										text: 'Ok'
									}
								]
							});
							confirm.present()
						} else {
							//this._ApiService.SendForgotPassword(d.Email).subscribe(
							//	(data) => {
							//		let confirm = this.alertCtrl.create({
							//			title: 'Success',
							//			message: 'An email to reset your password has been sent to the address provided.',
							//			buttons: [
							//				{
							//					text: 'Ok'
							//				}
							//			]
							//		});
							//		confirm.present()
							//	}, () => {
							//		let confirm = this.alertCtrl.create({
							//			title: 'Oops!',
							//			message: 'There was a problem. Please try again, or send an email to crewcare@imagetrend.com.',
							//			buttons: [
							//				{
							//					text: 'Ok'
							//				}
							//			]
							//		});
							//		confirm.present();
							//	});
						}
					}
				}
			]
		});
		prompt.present();
	}


	private EmailValidation(email: string): any {
		if (!email || email == '') {
			return false;
		}
		let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

		if (email != "" && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
			return false;
		}

		return true;
	}

}
