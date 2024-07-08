import { Component } from '@angular/core';

@Component({
  selector: 'app-venue',
  standalone: true,
  imports: [],
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent {
clubs=[
  {
    box:1,
    image:'https://im.hunt.in/cg/Hisar/City-Guide/BanquetHissar.jpg',
    title:'TELCO CLUB',
    description:'KNOW MORE',
  },
  {
    box:2,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtgfcaQa1foFvEhDfj_y1Pzx1z9eWycySQRjUtpzVyxQo8Kjb',
    title:'BISTUPUR CLUB',
    description:'KNOW MORE',
  },
  {
    box:3,
    image:'https://image.wedmegood.com/resized/540X/uploads/member/444796/1556715628_20190129_190035.jpg',
    description:'KNOW MORE',
    title:'AGRICO CLUB',
  },
];
}
