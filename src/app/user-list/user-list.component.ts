import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  firstName:string;
  lastName:string;
  pincode:string;
  user:User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  users: User[];



  ngOnInit(): void {
    this.getUsers();
  }


  private getUsers(){
    this.userService.getUsersList().subscribe(data=>{
      this.users = data;
    })
  }

  private getUserByOr(){
    this.userService.getUserByOr(this.firstName, this.lastName, this.pincode).subscribe(data=>{
      this.users = data
    })
  }

  getUserByFirstName(firstName:string){
    this.userService.getUserByFirstName(firstName).subscribe(data=>{
      this.users = data
    })
  }

  getUserByLastName(lastName:string){
    this.userService.getUserByLastName(lastName).subscribe(data=>{
      this.users = data
    })
  }

  getUserByPincode(pincode:string){
    this.userService.getUserByPincode(pincode).subscribe(data=>{
      this.users = data
    })
  }

  getUserSortedByDoj(){
    this.userService.getUserSortedByDoj().subscribe(data=>{
      this.users = data
    })
  }
  

  getUserSortedByDob(){
    this.userService.getUserSortedByDob().subscribe(data=>{
      this.users = data
    })
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

  softDeleteUser(id: number){
    this.userService.softDelete(id, this.user).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }



  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

}
