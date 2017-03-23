import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ComponentsService {
    private componentsResource: string = '/techne/index.json';

    constructor(private http: Http) {}

    get(): Observable<any> {
        let components =
            this.http
                .get(this.componentsResource)
                .map( (res:Response) => res.json() );
        return components;
    }
}