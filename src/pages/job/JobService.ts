import { Http, Headers} from '@angular/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../../models/User';
import { Login } from '../../models/Login';
//import { Tracker } from '../models/Tracker';
//import { Question } from '../models/Question';
//import { UserAnswer } from '../models/UserAnswer';
import { Contact } from '../../models/Contact';
//import { LifeTile } from '../models/LifeTile';

import { Injectable } from '@angular/core';

@Injectable()
export class JobService {
    constructor(
        private _Http: Http,
        public platform: Platform) {

    }

    public getJobForms(userID) {
        return this._GetJson("ws/v2/api/approval/getJobForms/"+userID+"/03DAC006-B069-E311-B7A4-0017A4770044");
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

		//if (this.platform.is('cordova')) {
		//	ref = 'https://api.crewcarelife.com';
		//	//ref = 'http://crewcare.beta.imagetrend.com';
		//} else {
		//	ref = 'http://rvikander.imagetrend.com/';
		//}

        ref = "http://httrunk.local/";

		if (ref === "/" || !ref) {
			return url;
		}

		return ref + url;
	}
}