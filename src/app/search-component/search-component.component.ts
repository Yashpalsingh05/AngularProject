import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../services/state.services';
import { SearchService } from '../services/search.services';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,MatIconModule,FormsModule,ReactiveFormsModule],
  templateUrl: './search-component.component.html',
})
export class SearchComponentComponent {

  stateService=inject(StateService);
    // searchControl=new FormControl('');
    searchControl:any;

    // ngOnInit() {
    //     this.searchControl.valueChanges.subscribe((value:any) =>{
    //         this.stateService.searchSubject.next(value || "");
    //         console.log(this.searchControl);
    //     })
        
    // }
    searchHandler(event:any){
      this.stateService.searchSubject.next(event.target.value || "");
    }
}
