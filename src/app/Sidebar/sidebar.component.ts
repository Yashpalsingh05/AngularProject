import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    standalone:true,
    selector: 'sidebar-app',
    templateUrl: './sidebar.component.html',
    styleUrl:'./sidebar.component.css',
    imports:[CommonModule]
})
 export class SidebarComponent{
    @Input() product: any;

    handleLike(){
        console.log("sidebar")
    }
 }