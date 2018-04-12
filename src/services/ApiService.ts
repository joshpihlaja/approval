import { Http, Headers } from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/User';
import { Login } from '../models/Login';
import { Tracker } from '../models/Tracker';
import { Question } from '../models/Question';
import { UserAnswer } from '../models/UserAnswer';
import { Contact } from '../models/Contact';
import { LifeTile } from '../models/LifeTile';

import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
	constructor(
		private _Http: Http,
		public platform: Platform
	) {
	}

	public CreateUser(user: User): any {
		return this._PostJson("/UserAPI/CreateUser", { user: user });
	}

	public UpdateProfile(user: User): any {
		return this._PostJson("/UserAPI/UpdateProfile", { user: user });
	}

	public LoginMobileUser(userLogin: Login): any {
		return this._PostJson("/AuthAPI/LoginMobileUser", { username: userLogin.Username, password: userLogin.Password });
	}

	public LoadUserMobileData(user: User): any {
		return this._PostJson("/UserAPI/LoadUserMobileData",  {user: user});
	}

	public GetLifeTileResults(): any {
		return this._GetJson("/ResourceAPI/GetLifeTileResults");
	}

	public GetMoods(): any {
		return this._GetJson("/ResourceAPI/GetMoods");
	}

	public GetActivities(): any {
		return this._GetJson("/ResourceAPI/GetActivities");
	}

	public ClearUserData(user: User): any {
		return this._PostJson("/UserAPI/ClearUserData", { user: user });
	}

	public SaveLifeTracker(tracker: Tracker): any {
		return this._PostJson("/UserAPI/SaveUserLifeTracker", { user: tracker.User, mood: tracker.Mood, activity: tracker.Activity, other: tracker.Other });
	}

	public SaveUserAnswer(user: User, answer: UserAnswer, question: Question, lifeTile: LifeTile) {
		return this._PostJson("/LifeTileAPI/SaveUserAnswer", { user: user, answer: answer, question: question, lifeTile: lifeTile });
	}

	public SaveUserAnswers(user: User, answers: UserAnswer[], question: Question, lifeTile: LifeTile) {

		return this._PostJson("/LifeTileAPI/SaveUserAnswers", { userID: user.Id, answers: answers, questionID: question.Id, lifeTileID: lifeTile.Id });
	}

	public SaveUserContact(user: User, contact: Contact) {
		return this._PostJson("/UserAPI/SaveUserContact", { user: user, contact: contact });
	} 

	public SendForgotPassword(email: string) {
		return this._PostJson("/UserAPI/ForgotPassword", { email: email });
	}

	public DeactivateUser(user: User) {
		return this._PostJson("/UserAPI/DeactivateUser", { user: user });
	}
		
	protected _GetJson(url: string): any {
		let ref = this.Ref(url);
		
		return this._Http.get(ref)
			.map(res => res.json());
	}

	protected _PostJson(url: string, args: any): any {
		let ref = this.Ref(url);
		let body = JSON.stringify(args);
		let headers = new Headers();
		headers.append("Content-Type", "application/json");
		return this._Http.post(ref, body, { headers: headers })
			.map(res => res.json());
	}
	protected Ref(url: string): string {
		let ref: string = "";

		if (this.platform.is('cordova')) {
			ref = 'https://api.crewcarelife.com';
			//ref = 'http://crewcare.beta.imagetrend.com';
		} else {
			ref = 'http://rvikander.imagetrend.com/';
		}

		if (ref === "/" || !ref) {
			return url;
		}

		return ref + url;
	}
}