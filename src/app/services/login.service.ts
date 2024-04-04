import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";

@Injectable({
    providedIn: 'root'
})

export class LoginService
{
    constructor(private htppClient: HttpClient)
    {

    }

    private readonly baseUrl = environment["endPoint"];

    login(Email:string, Password: string)
    {
        return this.htppClient.post<any>(`${this.baseUrl}/CreateToken`, {Email: Email, Password: Password});
    }
}