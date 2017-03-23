import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class AppService {

  elements = ["abc","aab","aaa","bac","bba","baa","acc"];

  constructor() { }

  getElements() : Promise<any>{
    return Promise.resolve(this.elements);
  }

}
