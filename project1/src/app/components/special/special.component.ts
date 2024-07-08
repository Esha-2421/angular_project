import { Component } from '@angular/core';

@Component({
  selector: 'app-special',
  standalone: true,
  imports: [],
  templateUrl: './special.component.html',
  styleUrl: './special.component.css'
})
export class SpecialComponent {
  specials=[
    {
      box:1,
      image:'http://rajtenthouse.in/images/guest-relatn.png',
      title:'PROPOSAL',
      description:'With our signature Proposal Planning Service, we handle everything from start to finish so that your Best Proposal goes off without a hitch.',
    },
    {
      box:2,
      image:'http://rajtenthouse.in/images/decoration-tenting.png',
      title:'DECOR & TENTING',
      description:'We suggest caterers, assist with menu planning and creating signature dishes and beverages to suit the occasion and guest profiles.',
    },
    {
      box:3,
      image:'http://rajtenthouse.in/images/celeb.png',
      title:'ENTERTAINMENT',
      description:'Our wedding entertainment administrations incorporate a plenty of choices, which will make you and the guests faint with delight.',
    },
    {
      box:4,
      image:'http://rajtenthouse.in/images/hospitality.png',
      title:'CATERING',
      description:'Proposal With our signature Proposal Planning Service, we handle everything from start to finish so that your Best Proposal goes off without a hitch. Catering',
    },  
    {
      box:5,
      image:'http://rajtenthouse.in/images/photographers.png',
      title:'PHOTOGRAPHY',
      description:'We want you to have the very best photographer for your wedding that will shape your memories as you look back on your photogra',
    },  
    {
      box:6,
      image:'http://rajtenthouse.in/images/theme-party.png',
      title:'THEME PARTIES',
      description:'With our signature Proposal Planning Service, we handle everything from start to finish so that your Best Proposal goes off without a hitch.',
    },  
    {
      box:7,
      image:'http://rajtenthouse.in/images/dhol.png',
      title:'BAND/DHOL',
      description:'With our signature Proposal Planning Service, we handle everything from start to finish so that your Best Proposal goes off without a hitch.',
    },  
    {
      box:8,
      image:'http://rajtenthouse.in/images/transport-logistic.png',
      title:'TRANSPORTATION',
      description:'With our signature Proposal Planning Service, we handle everything from start to finish so that your Best Proposal goes off without a hitch.',
    },
    {
      box:9,
      image:'http://rajtenthouse.in/images/decoration-tenting.png',
      title:'PROPOSAL',
      description:'With our signature Proposal Planning Service, we handle everything from start to finish so that your Best Proposal goes off without a hitch.',
    },
  ];
}
