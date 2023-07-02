import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package } from '../models/package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  baseUrl="/api/Meeting/";
  constructor(private _http:HttpClient) { }

  getAllPackages():Observable<Package>{
    return this._http.get<Package>(this.baseUrl+"GetAllPackages");
  }

  addNewPackage(packageObj:Package):Observable<Package>{
    return this._http.post<Package>(`${this.baseUrl}/CreatePackage`,packageObj);
  }
  getPackageById(packageId:number):Observable<Package>{
    return this._http.get<Package>(`${this.baseUrl}/GetPackgeById?id=${packageId}`);
  }

  updatePackge(packageObj:Package):Observable<Package>{
    return this._http.post<Package>(`${this.baseUrl}UpdatePackge`,packageObj);
  }

  deletePackage(packageId:number):Observable<Package>{
    return this._http.post<Package>(`${this.baseUrl}DeletePackgeById?id=${packageId}`,{});
  }
}
