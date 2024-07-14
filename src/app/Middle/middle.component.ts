import { Component, EventEmitter, Output } from "@angular/core";
import { SidebarComponent } from "../Sidebar/sidebar.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { SearchComponentComponent } from "../search-component/search-component.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

@Component({
standalone: true,
selector: 'middle-component',
templateUrl: './middle.component.html',
styleUrl:'./middle.component.css',
imports: [SidebarComponent,MatCardModule,MatButtonModule,CommonModule,SearchComponentComponent,MatIconModule,RouterModule],

})
export class MiddleComponent{
      
}