import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  resourceUrl = "https://api.github.com/users/ranraj/gists?per_page=2&page=5"
  constructor(private http: HttpClient) { }

  loadGist(): Observable<HttpResponse<Gist[]>> {

    return this.http.get<Gist[]>(this.resourceUrl, { observe: 'response' });
  }

}

export interface IGist {

  id?: string,
  url?: string
}

export class Gist implements IGist {
  constructor(id?: String, url7?: string) { }
}



//   constructor() { }
// }
