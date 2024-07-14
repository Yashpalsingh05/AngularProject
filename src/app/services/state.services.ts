import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateService {
  
    searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
    
    constructor(){
        console.log(this.searchSubject);
    }
}