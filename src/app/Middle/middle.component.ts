import { Component, EventEmitter, Output } from "@angular/core";
import { SidebarComponent } from "../Sidebar/sidebar.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { SearchComponentComponent } from "../search-component/search-component.component";

@Component({
standalone: true,
selector: 'middle-component',
templateUrl: './middle.component.html',
styleUrl:'./middle.component.css',
imports: [SidebarComponent,MatCardModule,MatButtonModule,CommonModule,SearchComponentComponent],

})
export class MiddleComponent{
    cards=[
        {
          "title": "The Future of Transportation",
          "subtitle": "Exploring Sustainable and Efficient Solutions",
          "paragraph": "As urbanization continues to increase, the need for sustainable transportation solutions becomes paramount. Innovations such as electric vehicles, autonomous driving technology, and public transit advancements are shaping the future of transportation. These developments aim to reduce emissions, alleviate traffic congestion, and enhance overall mobility.",
          "image_url": "https://example.com/images/future-transportation.jpg"
        },
        {
          "title": "The Impact of Climate Change on Agriculture",
          "subtitle": "Adapting Farming Practices to a Changing Climate",
          "paragraph": "Climate change poses significant challenges to global agriculture, affecting crop yields, water availability, and pest distribution. Farmers worldwide are adopting resilient farming practices such as crop diversification, precision agriculture, and water conservation techniques. These efforts are crucial for ensuring food security in the face of environmental uncertainties.",
          "image_url": "https://example.com/images/climate-agriculture.jpg"
        },
        {
          "title": "Empowering Women in STEM",
          "subtitle": "Breaking Barriers and Encouraging Diversity",
          "paragraph": "Gender disparity in science, technology, engineering, and mathematics (STEM) fields remains a persistent issue. Initiatives promoting mentorship, education, and workplace inclusivity are essential for empowering women in STEM. By fostering a supportive environment and providing equal opportunities, we can harness the full potential of diverse talent in driving innovation and progress.",
          "image_url": "https://example.com/images/women-stem.jpg"
        },
        // {
        //   "title": "The Rise of Remote Work",
        //   "subtitle": "Navigating the Shift to a Virtual Workspace",
        //   "paragraph": "The COVID-19 pandemic accelerated the adoption of remote work models, transforming the traditional office setup. Organizations are embracing digital collaboration tools, flexible work arrangements, and remote-friendly policies to support remote teams. While presenting new challenges, remote work offers opportunities for increased productivity, work-life balance, and access to a global talent pool.",
        //   "image_url": "https://example.com/images/remote-work.jpg"
        // },
        // {
        //   "title": "Exploring the Mysteries of the Universe",
        //   "subtitle": "Unraveling the Secrets of Space and Time",
        //   "paragraph": "From black holes to the origins of the universe, space exploration continues to captivate our imagination. Breakthroughs in astronomy, cosmology, and space technology are shedding light on cosmic phenomena and expanding our understanding of the cosmos. By pushing the boundaries of human knowledge, scientists strive to unlock the mysteries of the universe and our place within it.",
        //   "image_url": "https://example.com/images/universe-mysteries.jpg"
        // }
      ]
     sidebarList= [
        { "title": "Home","id":0},
        { "title": "About Us","id":1 },
        { "title": "Services" ,"id":2},
        { "title": "Contact","id":3}
      ]
        @Output() likedButton=new EventEmitter<void>();
       likebutton(data: any){
        console.log(data);
        this.likedButton.emit(data);
      }
      handleLike(){
        console.log("hello")
      }
      
}