import { Injectable } from '@angular/core';
import { AdminEntity } from '../entity/admin.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AdminService {

    getUrl = 'http://localhost:7779/admin/';
    deleteUrl = 'http://localhost:7779/admin/user/';
    postUrl = 'http://localhost:7779/admin/user';
    searchUrl = 'http://localhost:7779/admin/';
    constructor(private httpClient: HttpClient) {

    }

    searchByCriteria(text : any): Observable<any> {

        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'

            }),
        };

        return this.httpClient.get<any>(this.searchUrl, httpOptions);

    }

    deleteByadminId(adminId: number): Observable<Boolean> {
        const headers = {

            'content-type': 'application/json',

            'Access-Control-Allow-Origin': '*',
        };

        return this.httpClient.delete<Boolean>(this.deleteUrl + adminId, {

            headers: headers

        });
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

    createNewAdmin(adminForms: any): Observable<any> {

        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'

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
            name: 'raja',
            password: 'pass',
            email: 'raja@gmail.com',
            phNumber: 1234512345

        },
    ];





}
