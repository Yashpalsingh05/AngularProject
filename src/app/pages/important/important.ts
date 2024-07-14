import { Component, inject} from '@angular/core';
import { AppPageHeaderComponent } from '../PageHeader/pageheader';
import { TasKListComponent } from "../Tasklist/tasklist";
import { HttpService } from '../../services/http.service';

@Component({
    standalone:true,
    templateUrl: './important.component.html',
    imports: [AppPageHeaderComponent, TasKListComponent]

})

export class ImportantTasksComponent{
    newtask="";
    tasklist:any[]=[];
    httpservice=inject(HttpService)
    ngOnInit() {
        this.getAllTasks();
    }
    addTask(){
        this.httpservice.addTask(this.newtask).subscribe(
           ()=>{
               this.newtask="";
               this.getAllTasks();
           }
       )
   }
   getAllTasks(){
       this.httpservice.getAllTasks().subscribe((result:any)=>{
        this.tasklist=result.filter((task:any)=>task.important==true);
       })

   }
}