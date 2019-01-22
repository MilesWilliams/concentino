import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DirectoryRequest } from '../../interfaces/directory.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  private readonly url: string = "http://localhost:7000/api/v1/directory/read";

  constructor(private _http: HttpClient) { }


  public getAllSongs(path: DirectoryRequest): Observable<any[]> {
    return this._http.post<any[]>(this.url, path);
  }
}
