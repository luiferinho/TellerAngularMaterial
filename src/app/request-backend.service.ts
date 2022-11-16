import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestBackendService {

  constructor(
    private http : HttpClient
  ) { }

  getData(entidad:string) : Observable<any> {

    return this.http.get(`http://localhost:3000/${entidad}`);

  }

  getDataFilter(entidad:string, data:string , keyName:string) : Observable<any> {

    const field:any = {};
    field [keyName] = {"like":data, "options": "i"};

    const filter = {
      where : field
    }

    const params = new HttpParams().append("filter", JSON.stringify(filter));

    const headers = new HttpHeaders({
     'Content-type' : 'application/json'
    });

    const httpOptions = {
      //headers, 
      params
    }
     

    return this.http.get(`http://localhost:3000/${entidad}`,httpOptions);

  }



  posData(entidad:string, datos: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-type' : 'application/json'
    });

    const httpOptions = {
      headers
    };

    return this.http.post(`http://localhost:3000/${entidad}`,datos, httpOptions);

  }

  updateData(entidad:string, datos: string, code: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Content-type' : 'application/json'
    });

    const httpOptions = {
      headers
    };

    return this.http.put(`http://localhost:3000/${entidad}/${code}`,datos, httpOptions);

  }

  deleteData(entidad: string, code: string): Observable<any>{
    const headers = new HttpHeaders({
      'Content-type' : 'application/json'
    });
    const httpOptions = {
      headers
    };
    return this.http.delete(`http://localhost:3000/${entidad}/${code}`, httpOptions);
  }
}
