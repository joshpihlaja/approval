import { Injectable } from '@angular/core';


@Injectable()
export class User  {
	public Id: string;

	public Department: string;

	public Username: string;

	public Email: string;

	public Password: string;

	public PasswordConfirm: string;

	public Active: boolean;

	public CreatedOn: string;

	public RememberMe: boolean;
	
}