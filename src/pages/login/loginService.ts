import { Http, Headers } from '@angular/http';
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
export class LoginService {
    constructor(
        private _Http: Http,
        public platform: Platform
    ) {
    }

    public LoginMobileUser(userLogin: Login): any {
        return this._Http.get("httrunk.local/admin/public/api/users.cfc?method=userLogin&user_name="+userLogin.Username+"&password="+userLogin.Password+"&candidate=0");
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
            ref = 'httrunk.local';
        }

        if (ref === "/" || !ref) {
            return url;
        }

        return ref + url;
    }
}