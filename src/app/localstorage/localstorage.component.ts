import { Component, OnInit } from '@angular/core';
import { Employee } from '../core/models/employee';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.scss']
})
export class LocalstorageComponent implements OnInit {
  
  empObj!:Employee;
  sortBy!:string;
  searchText!:string;
  employees:Employee[]=[];

  constructor() { 
    this.empObj=new Employee();
    this.sortBy="";
    this.searchText="";
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  onSave(){
    const isData=localStorage.getItem("EmpData");
    if(isData==null){
      const newArray=[];
      this.empObj.employeeId=0;
      newArray.push(this.empObj);
      localStorage.setItem("EmpData", JSON.stringify(newArray));
    }else{
      let oldArray=JSON.parse(isData);
      const newId=oldArray.length+1;
      this.empObj.employeeId=newId;
      oldArray.push(this.empObj);
      localStorage.setItem("EmpData",JSON.stringify(oldArray));
    }
    this.getAllEmployee();
  }

  getAllEmployee(){
    const isData=localStorage.getItem("EmpData");
    if(isData !=null){
      const localData=JSON.parse(isData);
      this.employees=localData;
    }
  }
}
