import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // optimization --  means simpfly , apiUrl or baseUrl temp variable anything can use. (28/08/2025).

  apiUrl='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'; 

  constructor( private _httpClient:HttpClient) { }  // first will be loading -constructor
  getVehicle():Observable<any>{
    return this._httpClient.get( this.apiUrl);
  }

  // for getting filtered   -- + concatination->result will be continue
 // (url?filter='+term=>input varaible)

  getFilteredVehicle(term:any):Observable<any>{
    return this._httpClient.get( this.apiUrl+'?filter='+term);
  }
 // specific data --view--26/08/2025
   getSingleVehicle(id:any):Observable<any>{
    return this._httpClient.get( this.apiUrl+'/'+id);
  }


upadateVehicle(id:any,data:any):Observable<any>{
    return this._httpClient.put(this.apiUrl+'/'+id,data);
  }


// sorting (url?sortBy='+column=col name+"order=" order=>+asc or desc)
   getSortedVehicle(column:any,order:any):Observable<any>{
    return this._httpClient.get( this.apiUrl+'?sortBy='+column+"&order="+order);
  }
// pagination (url?limit='+number+ "&page="+page=>pagenumber)
  getPaginationVehicle(limit:any,page:any):Observable<any>{
    return this._httpClient.get( this.apiUrl+'?limit='+limit+"&page="+page);
  }
// delete
   deleteVehicle(id:any):Observable<any>{
    return this._httpClient.delete(this.apiUrl+'/'+id);
  }

// create
  createVehicle(data:any):Observable<any>{
    return this._httpClient.post(this.apiUrl+'/',data);
  }


}
