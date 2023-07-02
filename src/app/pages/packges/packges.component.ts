import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/core/models/package';
import { PackageService } from 'src/app/core/services/package.service';

@Component({
  selector: 'app-packges',
  templateUrl: './packges.component.html',
  styleUrls: ['./packges.component.scss']
})
export class PackgesComponent implements OnInit {
  isLoader:boolean=false;
  packagesData:Package[]=[];
  createFromToggle:boolean=false;

  packageObj={
    "packageId": 0,
    "packageName": "",
    "packageCost": "",
    "packageDescription": "",
    "isPackageActive": false
  };

  constructor(private _packageService:PackageService) { }

  ngOnInit(): void {
    this.loadPackages();
  }
 
  
  loadPackages(){
    this.isLoader=true;
    this._packageService.getAllPackages().subscribe((response:any)=>{
      this.isLoader=false;
      this.packagesData=response.data;
    });
  }

  createPackage(){
    this.isLoader=true;
    this._packageService.addNewPackage(this.packageObj).subscribe((response:any)=>{
      if(response.result){
        this.isLoader=false;
        this.loadPackages();
        alert(response.message);
        this.createFromToggle=false;
        this.packageObj={
          "packageId": 0,
          "packageName": "",
          "packageCost": "",
          "packageDescription": "",
          "isPackageActive": false
        }
      }else{
        alert(response.message)
      }
    })
  }

  resetPackage(){
   this.packageObj={
      "packageId": 0,
      "packageName": "",
      "packageCost": "",
      "packageDescription": "",
      "isPackageActive": false
    }
  }

  editRecord(id:number){
    this.createFromToggle=true;
    this._packageService.getPackageById(id).subscribe((response)=>{
      if(response){
        this.loadPackages();
        this.packageObj=response.data;
        // this.packageObj={
        //   "packageId": response.data.packageId,
        //   "packageName": response.data.packageName,
        //   "packageCost": response.data.packageCost,
        //   "packageDescription": response.data.packageDescription,
        //   "isPackageActive": response.data.isPackageActive
        // }
      }
    })
  }

  UpdatePackage(){
    this.isLoader=true;
    this._packageService.updatePackge(this.packageObj).subscribe((response:any)=>{
      if(response.result){
        this.isLoader=false;
        this.loadPackages();
        alert(response.message);
        this.createFromToggle=false;
        this.packageObj={
          "packageId": 0,
          "packageName": "",
          "packageCost": "",
          "packageDescription": "",
          "isPackageActive": false
        }
      }else{
        alert(response.message);
      } 
    })
  }

  deleteRecord(packageId:number){
    const isDelete=confirm(`are you sure to ${packageId} delete?`);
    if(isDelete){
      this._packageService.deletePackage(packageId).subscribe((response)=>{
        if(response.result){
          this.loadPackages();
          alert(response.message);
        }else{
          alert(response.message);
        } 
      });
    }
  }

  openCreateFrom(){
    this.createFromToggle=!this.createFromToggle;
  }
}
