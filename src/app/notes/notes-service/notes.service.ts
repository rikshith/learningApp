import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  resourceUrl = "https://api.github.com/users/ranraj/gists?per_page=2&page=5";
  selectedGistData!: IGist;

  constructor(private http: HttpClient) { }

  loadGist(): Observable<HttpResponse<Gist[]>> {
    return this.http.get<Gist[]>(this.resourceUrl, { observe: 'response' });
  }

}

interface IFileDetail {
  filename?: string;
  type?: string;
  language?: string;
  raw_url?: string;
  size?: string;
  truncated?: string;
  content?: string;
}
interface IFiles {
  [key: string]: IFileDetail;
}
export interface IGist {
  id?: string,
  url?: string,
  forks_url?: string;
  commits_url?: string;
  node_id?: string;
  git_pull_url?: string;
  git_push_url?: string;
  html_url?: string;
  files?: IFiles;
}

export class Gist implements IGist {
  constructor(
    id?: String,
    url7?: string,
    forks_url?: string,
    commits_url?: string,
    node_id?: string,
    git_pull_url?: string,
    git_push_url?: string,
    html_url?: string,
    files?: IFiles
  ) { }
}



//   constructor() { }
// }
