import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Player {
  avatar: string;
  nickname: string;
  kd: number;
  adr: number;
  hs: number;
  assists: number;
}

interface PastPerformance {
  event: string;
  placement: string;
  prize: string;
}

interface Team {
  name: string;
  logo: string;
  region: string;
  founded: string;
  roster: Player[];
  pastPerformances: PastPerformance[];
}

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  standalone: true,
  imports: [RouterLink, NgFor]
})
export class TeamDetailsComponent {
  team: Team = {
    name: 'FaZe Clan',
    logo: 'https://img-cdn.hltv.org/teamlogo/SMhzsxzbkIrgqCOOKGRXlW.svg?ixlib=java-2.1.0&s=e6a9ce0345c7d703e5eaac14307f69aa',
    region: 'Europe',
    founded: '2010',
    roster: [
      {
        avatar: 'https://img-cdn.hltv.org/playerbodyshot/S_P_flgWW4kmpZ4TMV_MtR.png?ixlib=java-2.1.0&w=400&s=9fded1df59aa07bf0acbc7bb0a79d96d',
        nickname: 'broky',
        kd: 1.15,
        adr: 75.2,
        hs: 51.2,
        assists: 245
      },
      {
        avatar: 'https://img-cdn.hltv.org/playerbodyshot/W0UdvVDSlirRVYxhY4M1jS.png?ixlib=java-2.1.0&w=400&s=4db789fa7459928219dae604f21fdc52',
        nickname: 'rain',
        kd: 1.05,
        adr: 72.8,
        hs: 48.5,
        assists: 198
      },
      {
        avatar: 'https://img-cdn.hltv.org/playerbodyshot/mS2yBVAm-zQuZDyfn4k7TB.png?ixlib=java-2.1.0&w=400&s=e26fe02a416090b1e5e88957c07927ce',
        nickname: 'karrigan',
        kd: 0.95,
        adr: 68.4,
        hs: 45.8,
        assists: 312
      },
      {
        avatar: 'https://img-cdn.hltv.org/playerbodyshot/61HKnWk2_lcUHiiDXrXy3O.png?ixlib=java-2.1.0&w=400&s=a70ce00cec1c981e32f2bb172158d71f',
        nickname: 'ropz',
        kd: 1.18,
        adr: 78.9,
        hs: 53.1,
        assists: 178
      },
      {
        avatar: 'https://img-cdn.hltv.org/playerbodyshot/S6VtGgdiWrlKq0pSRlmz_k.png?ixlib=java-2.1.0&w=400&s=8cda8bef9441bd1353fe96bf8edbfdd4',
        nickname: 'frozen',
        kd: 1.12,
        adr: 76.5,
        hs: 49.7,
        assists: 201
      }
    ],
    pastPerformances: [
      {
        event: 'IEM Katowice 2024',
        placement: '3rd-4th',
        prize: '$40,000'
      },
      {
        event: 'BLAST Premier Spring Groups 2024',
        placement: '1st',
        prize: '$27,500'
      },
      {
        event: 'CS2 Major Copenhagen 2024 Europe RMR',
        placement: 'Qualified',
        prize: '-'
      }
    ]
  };
}
