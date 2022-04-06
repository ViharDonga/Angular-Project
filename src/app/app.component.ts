import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, Output, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
public  employee=  [];
  constructor ( private empservice: EmployeeService){}
  ngOnInit(): void {
    this.employee = this.empservice.getemployee();
  }
  serverElements = [{type: '', name: 'server test', content: 'just test'},
  {type: 'blueprint', name: 'server test', content: 'dnchd test'}];


  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }  

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
}
}
