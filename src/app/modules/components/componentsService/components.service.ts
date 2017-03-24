import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ComponentsService {
    private componentsResource: string = '/techne/';

    constructor(private http: Http) {}

    getComponentList(): Observable<any> {
        let components =
            this.http
                .get(this.componentsResource + 'index.json')
                .map( (res:Response) => res.json() );
        return components;
    }

    getComponent(category, id: string): Observable<any> {
        let component =
            this.http
                .get(this.componentsResource + 'components/' + category + '/' + id + '/' + id + '.json')
                .map( (res:Response) => res.json() );
        return component;
    }

}