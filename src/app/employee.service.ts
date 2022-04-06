import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  constructor() { }
  getemployee(){
    return [
    {"id": 1, "name": 'vihar'},
    {"id": 2,"name": 'nency'  }  
    ]
  }

}
