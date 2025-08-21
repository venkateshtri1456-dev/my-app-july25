import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor( private _httpClient:HttpClient) { }  // first will be loading -constructor
  getVehicle():Observable<any>{
    return this._httpClient.get( 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');
  }

  // for getting filtered   -- + concatination->result will be continue
 // (url?filter='+term=>input varaible)

  getFilteredVehicle(term:any):Observable<any>{
    return this._httpClient.get( 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term);
  }
// sorting (url?sortBy='+column=col name+"order=" order=>+asc or desc)
   getSortedVehicle(column:any,order:any):Observable<any>{
    return this._httpClient.get( 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+column+"&order="+order);
  }
// pagination (url?limit='+number+ "&page="+page=>pagenumber)
  getPaginationVehicle(limit:any,page:any):Observable<any>{
    return this._httpClient.get( 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page);
  }
// delete
   deleteVehicle(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }


}
