import { Injectable } from '@angular/core';


@Injectable()
export class JobForm  {
	public Id: string;

	public form_name: string;

	public job_title: string;

	public completed_on: string;

	public next_approver: string;

	public originator: string;
	
}