import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./components/events/events.component').then(m => m.EventsComponent)
  },
  {
    path: 'events/:id',
    loadComponent: () => import('./components/event-details/event-details.component').then(m => m.EventDetailsComponent)
  },
  {
    path: 'teams',
    loadComponent: () => import('./components/team-details/team-details.component').then(m => m.TeamDetailsComponent)
  },
  {
    path: 'players',
    loadComponent: () => import('./components/players/players.component').then(m => m.PlayersComponent)
  },
  {
    path: 'players/:id',
    loadComponent: () => import('./components/player-details/player-details.component').then(m => m.PlayerDetailsComponent)
  }
];
