import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {  MatIconModule } from "@angular/material/icon";
import { HttpService } from "../../services/http.service";
import { MatCardModule } from "@angular/material/card";
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DatePipe } from "@angular/common";
import { AppPageHeaderComponent } from "../PageHeader/pageheader";
import {  TasKListComponent } from "../Tasklist/tasklist";
import { StateService } from "../../services/state.services";
@Component({
    standalone:true,
    selector: 'app-alltask',
    templateUrl:'./alltask.component.html',
    styleUrl:'./alltask.component.css',
    imports:[MatIconModule,FormsModule,MatCardModule,MatFormFieldModule, MatInputModule, MatDatepicker,DatePipe,AppPageHeaderComponent,TasKListComponent]

})
export class AllTaskComponent{
    newtask="";
    tasklist:any[]=[];
    initialTasklist:any[]=[];
    datenow=new Date();
httpservice=inject(HttpService)
stateService=inject(StateService);


ngOnInit() {
    this.stateService.searchSubject.subscribe((value)=>{
        if(value){
            this.tasklist=this.initialTasklist.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()))
        }
        else{
            this.tasklist=this.initialTasklist;
        }
    })
    this.getAllTasks();
}
     addTask(){
        if(this.newtask){
         this.httpservice.addTask(this.newtask).subscribe(
            ()=>{
                this.newtask="";
                this.getAllTasks();
            }
        )
    }
    else{
        this.getAllTasks();
    }
    }
   
    getAllTasks(){
        this.httpservice.getAllTasks().subscribe((result:any)=>{
         this.tasklist=this.initialTasklist=result;
        })
    }

    onCompleted(task:any){  
        
        if(task.completed===true){
            task.completed=false;
            this.getAllTasks();
        }
        else{
            task.completed=true;
            this.getAllTasks();
        }
        this.httpservice.updateTask(task).subscribe({

        })
        this.getAllTasks();
    }
    onImportant(task:any){
        if(task.important===true){
            task.important=false;
            this.getAllTasks();
        }
        else{
            task.important=true;
            this.getAllTasks();
        }
        this.httpservice.updateTask(task).subscribe({
            
        })
        this.getAllTasks();
    }
    onDelete(task:any){

        this.httpservice.deleteTask(task).subscribe({
            
        })
        this.getAllTasks();
    }

    Onprogress(task:any){
        if(task.inprogress===true){
            task.inprogress=false;
            
            this.httpservice.updateTask(task).subscribe({
            
            })
            this.getAllTasks();
        }
        else{
            task.inprogress=true;
            this.httpservice.updateTask(task).subscribe({
            
            })
        }
        this.getAllTasks();
    }

}