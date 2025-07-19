import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Player {
  id: string;
  name: string;
  team: string;
  kills: number;
  assists: number;
  damage: number;
  matchesPlayed: number;
  winRate: number;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  players: Player[] = [
    {
      id: '1',
      name: 'Ethan "Ace" Carter',
      team: 'Team Alpha',
      kills: 250,
      assists: 120,
      damage: 15000,
      matchesPlayed: 50,
      winRate: 60
    },
    {
      id: '2',
      name: 'Liam "Blitz" Harper',
      team: 'Team Beta',
      kills: 220,
      assists: 110,
      damage: 14000,
      matchesPlayed: 48,
      winRate: 55
    },
    // Add more players as needed
  ];
}
