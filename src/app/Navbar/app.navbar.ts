import { Component, inject, Inject } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { SearchComponentComponent } from "../search-component/search-component.component";
import { StateService } from "../services/state.services";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component(
    {
        selector: 'app-navbar',
        standalone:true,
        templateUrl: './navbar.component.html',
        imports:[MatIconModule,MatFormFieldModule,SearchComponentComponent,FormsModule,ReactiveFormsModule]
    }
)
export class AppNavbar{
    stateService=inject(StateService);
    searchControl=new FormControl('');

    ngOnInit() {
        this.searchControl.valueChanges.subscribe((value) =>{
            this.stateService.searchSubject.next(value || "");
        })
    }
}