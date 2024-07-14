import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    standalone:true,
    selector: 'sidebar-app',
    templateUrl: './sidebar.component.html',
    imports:[CommonModule,RouterLink,RouterLinkActive]
})
 export class SidebarComponent{
    @Input() product: any;

    handleLike(){
        console.log("sidebar")
    }
 }