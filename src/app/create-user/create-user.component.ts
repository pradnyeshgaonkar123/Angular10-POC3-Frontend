import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/users']);
  }


  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
