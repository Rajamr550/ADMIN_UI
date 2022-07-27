import { Injectable } from '@angular/core';
import { AdminEntity } from '../entity/admin.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AdminService {

    getUrl = 'http://localhost:7779/admin/';
    deleteUrl = 'http://localhost:7779/admin/admin';
    postUrl = 'http://localhost:7779/admin/admin/user';

    token: string = '';
    // test: string = 'Bearer ';
    constructor(private httpClient: HttpClient) {

    }



    getAllAdmins(): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
            }),
        };
        return this.httpClient.get<any>(this.getUrl, httpOptions);
    }

    addAdmins(adminObject: AdminEntity) {
        this.admin.push(adminObject);
    }
    // createNewInterview(interviewForms: any): Observable<any> {
    //     this.token = this.loginService.getToken();
    //     console.log("inside inter service - token value - >", this.token);
    //     // this.test = "added 1" + this.test;
    //     // console.log("test ++ ", this.test)
    //     let httpOptions = {
    //         headers: new HttpHeaders({
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json',
    //             // 'Authorization': 'Bearer ' + this.token.jwt.valueOf
    //             'Authorization': 'Bearer ' + this.token


    //         }),
    //     };
    //     // console.log("jwt value ", this.token.jwt.valueOf)
    //     // console.log("jwt value only jwt  ", this.token.jwt)

    //     return this.httpClient.post<any>(
    //         this.postUrl,
    //         JSON.stringify(interviewForms),
    //         httpOptions
    //     );
    // }
    createNewAdmin(adminForms: any): Observable<any> {

        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',


            }),
        };


        return this.httpClient.post<any>(
            this.postUrl,
            JSON.stringify(adminForms),
            httpOptions
        );
    }


    admin = [
        {
            adminName: 'raja',
            adminPass: 'pass',
            adminPhone: 1234512345,
            adminMail: 'raja@gmail.com'
        },
    ];





}
