import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminEntity } from '../entity/admin.entity';
import { Router, RouterModule } from '@angular/router';

import { AdminService } from '../services/admin.services';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  forms: any = [];
  adminDetails: Array<AdminEntity> = new Array();
  admin_form: Array<AdminEntity> = new Array();

  adminId: number = 0;

  admin: AdminEntity = new AdminEntity();
  text: any;
  constructor(private adminService: AdminService, private router: Router) {

    this.adminService.getAllAdmins().subscribe((serverResponse: any) => {
      console.log('constrcutor serverResponse ', serverResponse);
      this.forms = serverResponse;
    })
  }

  adminForm = new FormGroup({
    adminId: new FormControl([Validators.required]),
    adminName: new FormControl([Validators.required]),
    adminPass: new FormControl([Validators.required]),
    adminPhone: new FormControl([Validators.required]),
    adminMail: new FormControl([Validators.required])
  })




  submitAdminForm = () => {
    console.log('admin obj ', this.admin);


    var admin_form: any = {
      adminName: this.adminForm.value['adminName'],
      adminPass: this.adminForm.value['adminPass'],
      adminPhone: this.adminForm.value['adminPhone'],
      adminMail: this.adminForm.value['adminMail'],

    };

    this.adminService.createNewAdmin(this.admin).subscribe((serverResponse: any) => {
      console.log('createNewAdmin - serviceResponse : ', serverResponse);

      this.forms.push(serverResponse);
    })

    console.log(this.adminForm.value);
    this.adminService.addAdmins(admin_form);

  }

  deleteAdminById = (id: any) => {
    console.log("delete called ", id);
    this.adminService.deleteByadminId(id).subscribe((serverResponse: any) => {
      this.forms.pop(id);
      console.log('deleteByID - serviceResponse : ', serverResponse);

    });
  }


  navToEditPage = (id: number) => {
    console.log("nav called", id);
    this.router.navigate(['/admin_edit', id]);

  }


}

// searchByCriteria = (this.text) => {
//   console.log("search called ");
// }





