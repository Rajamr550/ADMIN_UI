import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminEntity } from '../entity/admin.entity';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.services';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']

})
export class AdminComponent {
  dtOptions: DataTables.Settings = {};
  forms: any = [];
  adminDetails: Array<AdminEntity> = new Array();
  admin_form: Array<AdminEntity> = new Array();
  public errorMsg: any;
  adminId: number = 0;

  admin: AdminEntity = new AdminEntity();

  constructor(private adminService: AdminService, private router: Router) { }
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,


    };

    this.adminService.getAllAdmins().subscribe((serverResponse: any) => {
      console.log('constrcutor serverResponse ', serverResponse);
      this.forms = serverResponse;

    },
      (error) => {
        this.errorMsg = error;
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

    //userd to post api call
    var admin_form: any = {
      adminName: this.adminForm.value['adminName'],
      adminPass: this.adminForm.value['adminPass'],
      adminPhone: this.adminForm.value['adminPhone'],
      adminMail: this.adminForm.value['adminMail']
    };



    this.adminService.createNewAdmin(this.admin).subscribe((serverResponse: any) => {
      console.log('createNewAdmin - serviceResponse : ', serverResponse);

      this.forms.push(serverResponse);
    },
      (error) => {
        this.errorMsg = error;
      }
    )

    console.log(this.adminForm.value);
    this.adminService.addAdmins(admin_form);

  }






  deleteAdminById = (id: any) => {
    console.log("delete called ", id);
    this.adminService.deleteByadminId(id).subscribe((serverResponse: any) => {
      const i = this.forms.findIndex((e: { id: any; }) => e.id === id);
      if (i !== -1) {
        this.forms.splice(i, 1);
      }


      console.log('deleteByID - serviceResponse : ', serverResponse);

    },
      (error) => {
        this.errorMsg = error;
      }
    );
  }



  navToEditPage = (id: number) => {
    console.log("nav called", id);
    this.router.navigate(['/admin_edit', id]);

  }




}







