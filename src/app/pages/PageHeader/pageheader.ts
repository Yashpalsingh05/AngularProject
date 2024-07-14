import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    standalone:true,
    templateUrl: './pageheader.component.html',
    selector: 'app-pageheader',
    imports:[DatePipe]
})
export class AppPageHeaderComponent{
    datenow=new Date();
}