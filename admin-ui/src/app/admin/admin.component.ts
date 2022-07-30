import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminEntity } from '../entity/admin.entity';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.services';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  // @Output()
  // addAdminEvent: EventEmitter<AdminEntity> = new EventEmitter();
  flag: number = 1;
  forms: any = [];
  allForms: any = [];
  searchForms: any = [];
  adminDetails: Array<AdminEntity> = new Array();
  admin_form: Array<AdminEntity> = new Array();

  adminId: number = 0;

  admin: AdminEntity = new AdminEntity();
  //searchText: string = '';

  query: any;

  firstName: any;
  constructor(private adminService: AdminService, private router: Router) {
    //this.getAll();

  }
  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe((serverResponse: any) => {
      console.log('constrcutor serverResponse ', serverResponse);
      // this.forms = serverResponse;
      this.allForms = serverResponse;
      console.log("ngoninit all forms -- ", this.allForms);
      this.allData();
    })
  }
  allData() {
    //   this.forms = this.
    if (this.flag == 1) {
      this.forms = this.allForms;
      console.log("all data allforms -- ", this.allForms);
      console.log("all data forms -- ", this.forms);

    }
    else {
      this.forms = this.searchForms;
      console.log("all data allforms -- ", this.allForms);
      console.log("all data forms -- ", this.forms);
    }
  }

  // searchByCriteria = () => {
  //   this.adminService.searchByCriteria(this.searchText).subscribe((serverResponse: any) => {
  //     console.log('search  - serviceResponse : ', serverResponse);
  //     this.searchForms.push(serverResponse);
  //     console.log("serarch by --search forms -- ", this.searchForms);
  //     // console.log("all data forms -- ", this.forms);
  //     this.flag = 2;
  //     this.allData();
  //   });

  // }

  search() {
    if (this.firstName == "") {
    }
    else {
      this.forms = this.forms.filter((res: { firstName: string; }) => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
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
      adminMail: this.adminForm.value['adminMail']
    };



    this.adminService.createNewAdmin(this.admin).subscribe((serverResponse: any) => {
      console.log('createNewAdmin - serviceResponse : ', serverResponse);

      this.forms.push(serverResponse);
    })

    console.log(this.adminForm.value);
    this.adminService.addAdmins(admin_form);

  }

  // searchByCriteria = () => {
  //   this.adminService.searchByCriteria(this.searchText).subscribe((serverResponse: any) => {
  //     console.log('search  - serviceResponse : ', serverResponse);
  //     this.searchForms.push(serverResponse);
  //   });





  deleteAdminById = (id: any) => {
    console.log("delete called ", id);
    this.adminService.deleteByadminId(id).subscribe((serverResponse: any) => {
      this.forms.pop(id);
      console.log('deleteByID - serviceResponse : ', serverResponse);

    });
  }


  searchPipe = (query: any) => {
    this.forms = this.allForms.filter((val: any) =>
      val.name.toLowerCase().includes(query)
    );
  }

  navToEditPage = (id: number) => {
    console.log("nav called", id);
    this.router.navigate(['/admin_edit', id]);

  }



  // changeName(event: Event) {
  //   this.age = (<HTMLInputElement>event.target).value;
  // }





}







