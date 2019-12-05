import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Space } from '../../models/space.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private httpClient: HttpClient) { }

  getAllSpaces(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/space');
  }

  createSpace(space: Space): Observable<any> {
    return this.httpClient.post('http://localhost:8080/space', space);
  }
}
