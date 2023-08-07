import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { EditUserDetailDialogComponent } from '../edit-user-detail-dialog/edit-user-detail-dialog.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
userID: string;
user: User = new User();


  constructor(public route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog){

  }

  ngOnInit(): void {
    this.route.params.subscribe((result) =>{
      this.userID = result['id'];
      console.log("UserID:", this.userID);
      this.getUser();
    })
  }


  getUser(){
    this.firestore
    .collection('users')
    .doc(this.userID)
    .valueChanges()
    .subscribe((user: User) => {
      this.user = new User(user);
      console.log("Retreived User", this.user);
    })
  }


  editUserDetailMenu(){
  const dialog = this.dialog.open(EditUserDetailDialogComponent);
  dialog.componentInstance.user = new User(this.user.toJson());
  dialog.componentInstance.userID = this.userID;
  }

  editUserMenu(){
  const dialog = this.dialog.open(DialogEditAddressComponent);
  dialog.componentInstance.user = new User(this.user.toJson());
  dialog.componentInstance.userID = this.userID;
  }
}


