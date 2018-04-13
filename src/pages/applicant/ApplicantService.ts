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
export class ApplicantService {
    constructor(
        private _Http: Http,
        public platform: Platform) {

    }

    public getJobForms(userID) {
        return this._Http.get("httrunk.local/ws/Form.asmx/getUserJobFormsForApproval?userID=1&API_KEY=60BCC7AC-C83E-E811-80D3-00155DFAA129");
    }
}