import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminEntity } from '../entity/admin.entity';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { AdminService } from '../services/admin.services';

@Component({
  selector: 'admin-edit',
  templateUrl: './admin-edit.component.html'
})
export class AdminEditComponent {
  forms: any = [];
  adminDetails: Array<AdminEntity> = new Array();
  admin_form: Array<AdminEntity> = new Array();

  adminId: number = 0;

  admin: AdminEntity = new AdminEntity();
  text: any;

  editId: any = 0;;

  ngOnInit(): void {
    let iod = this.route.snapshot.paramMap.get('id');
    console.log("id value ", iod)
    this.editId = iod;
  }

  constructor(private adminService: AdminService, private route: ActivatedRoute) {

    // this.adminService.getAllAdmins().subscribe((serverResponse: any) => {
    //   console.log('constrcutor serverResponse ', serverResponse);
    //   this.forms = serverResponse;
    // })
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

    this.adminService.editAdmin(this.editId, this.admin).subscribe((serverResponse: any) => {
      console.log('edit  - serviceResponse : ', serverResponse);

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



}






