import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-edit-user-detail-dialog',
  templateUrl: './edit-user-detail-dialog.component.html',
  styleUrls: ['./edit-user-detail-dialog.component.scss']
})
export class EditUserDetailDialogComponent {
user: User;
loading = false;
birthDate: Date;
userID: string;


constructor(public dialogRef: MatDialogRef<EditUserDetailDialogComponent>, private firestore: AngularFirestore){}

saveUser(){
  this.loading = true;
  this.firestore
  .collection('users')
  .doc(this.userID)
  .update(this.user.toJson())
  .then(() => {
    this.loading = false;
    this.dialogRef.close();
  })

}

onNoClick(){
  this.dialogRef.close();
}
}


