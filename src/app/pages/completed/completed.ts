import { Component, inject } from "@angular/core";
import { AppPageHeaderComponent } from "../PageHeader/pageheader";
import {  TasKListComponent } from "../Tasklist/tasklist";
import { HttpService } from "../../services/http.service";

@Component({

    selector: 'app-completed',
    standalone:true,
    templateUrl:'./completed.component.html',
    imports:[AppPageHeaderComponent,TasKListComponent]
})

export class CompletedComponent{
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
        this.tasklist=result.filter((task:any)=>task.completed==true);
       })
   }
}