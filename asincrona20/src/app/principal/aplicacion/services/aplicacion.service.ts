import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicacionService {

  url = environment.apiUrl + "/posts"

  constructor(private http: HttpClient) { }

  getAllPostInterceptor(): Observable<any> {
    return this.http.get(this.url, { observe: "response" })
  }

}
