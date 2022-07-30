

// @Pipe({
//   name: 'searchFilter'
// })
// export class SearchPipe implements PipeTransform {
//   transform(forms: Array<AdminEntity>, query: string): Array<AdminEntity> {
//     let filteredAdminEntitys: Array<AdminEntity> = [];
//     if (query === '') {
//       return forms;
//     }
//     for (let data of forms) {
//       if (data.name.includes(query) || data.email.includes(query)) {
//         filteredAdminEntitys.push(data);

//       }

//     }
//     return filteredAdminEntitys;
//   }
// }

// @Pipe({ name: 'searchFilter' })
// export class SearchFilterPipe implements PipeTransform {

//   transform(list: any[], filterText: string): any {
//     return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
//   }
// }


import { Pipe, PipeTransform } from '@angular/core';
import { AdminEntity } from './entity/admin.entity';
@Pipe({
  name: 'searchadv'
})


export class SearchPipe implements PipeTransform {
  transform(admins: Array<AdminEntity>, searchText: string): Array<AdminEntity> {
    let filteredAdminEntitys: Array<AdminEntity> = [];
    if (searchText === '') {
      return admins;
    }
    for (let admin of admins) {
      if (admin.name.includes(searchText) || admin.email.includes(searchText)) {
        filteredAdminEntitys.push(admin);
      }
    }
    return filteredAdminEntitys;
  }
}