import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8085";

  constructor(private httpClient: HttpClient) { }


  getUsersList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/users`);
  }


  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
  
  softDelete(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/softDelete/${id}`, user);
  }


  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/user/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`, user);
  }

  getUserByOr(firstName: string, lastName: string, pincode: string): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/user/${firstName}/${lastName}/${pincode}`)
  }

  getUserByFirstName(firstName: string): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/fname/${firstName}`)
  }
  getUserByLastName(lastName: string): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/lname/${lastName}`)
  }
  getUserSortedByDoj(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/sort/doj`)
  }

  getUserSortedByDob(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/sort/dob`)
  }

  getUserByPincode(pincode: string): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/pincode/${pincode}`)
  }
  
}
