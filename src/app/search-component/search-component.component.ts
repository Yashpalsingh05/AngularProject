import { Component, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent {
  @Output() 
  searchHandler(event:any){
    console.log("kk")
  }
  onSearchChange(event:any){
    console.log(event.target.value);
  }
}
