import { Routes } from '@angular/router';
import { ImportantTasksComponent } from './pages/important/important';
import { CompletedComponent } from './pages/completed/completed';
import { AllTaskComponent } from './pages/alltask/alltask';
import { AppInProgressComponent } from './pages/inProgress/inprogress';

export const routes: Routes = [
{
    path:"",
    component:AllTaskComponent
},
{
    path:'important',
    component:ImportantTasksComponent
},
{
    path:'inprogress',
    component:AppInProgressComponent
},
{
    path:'completed',
    component:CompletedComponent
},

];
