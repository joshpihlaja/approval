import { Injectable } from '@angular/core';


@Injectable()
export class JobForm  {
	public Id: string;

	public Form_Name: string;

	public Job_Name: string;

	public CreatedOn: string;

	public Next_Approver: string;

	public Originator: string;
	
}