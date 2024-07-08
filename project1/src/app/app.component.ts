import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SlideareaComponent } from './components/slidearea/slidearea.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PareaComponent } from './components/parea/parea.component';
import { SegmentComponent } from './components/segment/segment.component';
import { DecorComponent } from './components/decor/decor.component';
import { PlanComponent } from './components/plan/plan.component';
import { VenueComponent } from './components/venue/venue.component';
import { SpecialComponent } from './components/special/special.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    SlideareaComponent,
    WelcomeComponent,
    PareaComponent,
    SegmentComponent,
    DecorComponent,
    PlanComponent,
    VenueComponent,
    SpecialComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
