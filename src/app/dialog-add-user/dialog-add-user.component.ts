import { Component, Input } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;

constructor(){
  
}



  onNoClick(){
    // Close
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log("Current User:", this.user);
  }
}
