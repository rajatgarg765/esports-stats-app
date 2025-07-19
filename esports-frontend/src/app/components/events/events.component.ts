import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [
    {
      id: 'global-championship-2023',
      name: 'Global Championship 2023',
      date: 'Dec 1 - Dec 17, 2023',
      overview: 'Team Alpha wins the championship'
    },
    {
      id: 'continental-series-americas-2023',
      name: 'Continental Series Americas 2023',
      date: 'Oct 15 - Oct 29, 2023',
      overview: 'Team Bravo secures the top spot'
    },
    {
      id: 'asia-invitational-2023',
      name: 'Asia Invitational 2023',
      date: 'Aug 20 - Sep 5, 2023',
      overview: 'Team Charlie dominates the competition'
    },
    {
      id: 'european-masters-2023',
      name: 'European Masters 2023',
      date: 'Jun 10 - Jun 25, 2023',
      overview: 'Team Delta emerges as the winner'
    },
    {
      id: 'oceania-pro-league-2023',
      name: 'Oceania Pro League 2023',
      date: 'Apr 5 - Apr 20, 2023',
      overview: 'Team Echo claims victory'
    }
  ];
}
