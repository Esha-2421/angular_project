import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  plans=[
    {
      box:1,
      image1:'https://imagevars.gulfnews.com/2020/12/22/Zaid-Darbar-and-Gauahar-Khan-_1768982912a_thumbnail.JPG',
      image2:'https://image.wedmegood.com/resized/1000X/uploads/member/3784591/1670415641_paran_singh_photography_250971188_245428377643443_3519853355594087726_n.webp_1_1024x683.jpg?crop=0,107,1024,576',
    },
    {
      box:2,
      tilte:'Plan a Marriage',
      description:'WITH US',
      image3:'https://im.indiatimes.in/content/2021/Jun/wedding_60d84668bde7e.jpg?w=1200&h=900&cc=1&webp=1&q=75',
      link:'BOOK NOW',
    },
    {
      box:3,
      image4:'https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/69537692_10157466542121684_7751151371994267648_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=QYMsY5vIuJUQ7kNvgEuS5G8&_nc_ht=scontent.fixr3-1.fna&oh=00_AYBdhuEn-xpE0FwlXjlsxpFAw_TV_7VJCMZPQ3wvQptLFQ&oe=66B31817',
      image5:'https://catchmotion.com/wp-content/uploads/2018/03/Indian_Wedding_Virginia-33-1024x682.jpg',
    }
  ];
}
