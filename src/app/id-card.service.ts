import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdCardService {

  constructor(private _httpClient:HttpClient) { }
  getidCard():Observable<any>{
     return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student')
  }
   getFilteredidCard(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term);

 
}

getSortedIdCard(column:any,order:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+column+"&order="+order);
}

getPagination(limit:any,page:any):Observable<any>{
  return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+"&page="+page);
}

createIdCard(data:any):Observable<any>{
  return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data);
}

deleteIdCard(id:any):Observable<any>{
  return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/' +id);
}

}