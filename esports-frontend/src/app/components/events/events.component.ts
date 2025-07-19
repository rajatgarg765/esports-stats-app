import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    {
      name: 'Global Championship 2023',
      date: 'Dec 1 - Dec 17, 2023',
      overview: 'Team Alpha wins the championship'
    },
    {
      name: 'Continental Series Americas 2023',
      date: 'Oct 15 - Oct 29, 2023',
      overview: 'Team Bravo secures the top spot'
    },
    {
      name: 'Asia Invitational 2023',
      date: 'Aug 20 - Sep 5, 2023',
      overview: 'Team Charlie dominates the competition'
    },
    {
      name: 'European Masters 2023',
      date: 'Jun 10 - Jun 25, 2023',
      overview: 'Team Delta emerges as the winner'
    },
    {
      name: 'Oceania Pro League 2023',
      date: 'Apr 5 - Apr 20, 2023',
      overview: 'Team Echo claims victory'
    }
  ];
}
