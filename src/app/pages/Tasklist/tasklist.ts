import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import {  MatIconModule } from "@angular/material/icon";
import { AppPageHeaderComponent } from '../PageHeader/pageheader';

@Component({
    standalone:true,
    templateUrl: './tasklist.component.html',
    selector: 'app-tasklist',
    imports:[MatIconModule,FormsModule,MatCardModule,MatFormFieldModule, MatInputModule, MatDatepicker,DatePipe,AppPageHeaderComponent]
})
export class TasKListComponent{
  @Input() taskList:any[]=[];
  @Output() important=new EventEmitter();
  @Output() completed=new EventEmitter();
  @Output() delete=new EventEmitter();
  @Output() progress=new EventEmitter();
  

 markImportant(task:any){
this.important.emit(task)
  }
  markCompleted(task:any){
    this.completed.emit(task)

  }
  markDelete(task:any){
    this.delete.emit(task)
  }
  markprogress(task:any){
    this.progress.emit(task)
  }
}