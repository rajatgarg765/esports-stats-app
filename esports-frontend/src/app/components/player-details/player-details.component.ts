import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface PlayerDetails {
  id: string;
  name: string;
  team: string;
  joinedYear: string;
  avatar: string;
  stats: {
    avgDamage: number;
    damageGrowth: number;
    kills: number;
    wins: number;
    top10: number;
  };
  achievements: {
    title: string;
    year: string;
    icon: 'Trophy' | 'Medal' | 'Flag';
  }[];
}

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player: PlayerDetails = {
    id: '1',
    name: "Alex 'SniperX' Johnson",
    team: 'Team Alpha',
    joinedYear: '2021',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTUpmAge6xLexgz5nmuk6RKy74FuVqb6wXlGnqn88s969Zr8LltcMSOTAjSSw5X9G1dkooG2wLdbKC7V2udwtyww9y4l1i5rHOj2RxFqScEHqwBZiAiK9SSZJr6tQB4oURypo93Ix8L3nSfofeHXfbu9vbSK0-Pd2auAmmj2ba8BntsosK2SJkOajlCSXq2oWkl6DG57HN5BgPWhUMERrfSv_weBHbWIXzCtf12yVWLPHTk4dF5HyWHAsjWShPL8EGho00ZH1aRjk',
    stats: {
      avgDamage: 250,
      damageGrowth: 15,
      kills: 1250,
      wins: 50,
      top10: 200
    },
    achievements: [
      {
        title: 'Regional Champion',
        year: '2022',
        icon: 'Trophy'
      },
      {
        title: 'National Finalist',
        year: '2023',
        icon: 'Medal'
      },
      {
        title: 'International Qualifier',
        year: '2024',
        icon: 'Flag'
      }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // In a real app, fetch player details using params['id']
      console.log('Player ID:', params['id']);
    });
  }
}
