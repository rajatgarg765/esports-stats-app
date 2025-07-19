import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  eventId: string | null = null;
  event = {
    name: 'PCS Asia',
    year: '2024',
    teams: 16,
    matches: 24,
    final_results: [
      { rank: 1, team: 'Team Alpha', matches_played: 24, wins: 5, total_points: 250 },
      { rank: 2, team: 'Team Beta', matches_played: 24, wins: 4, total_points: 230 },
      { rank: 3, team: 'Team Gamma', matches_played: 24, wins: 3, total_points: 220 },
      { rank: 4, team: 'Team Delta', matches_played: 24, wins: 2, total_points: 210 },
      { rank: 5, team: 'Team Epsilon', matches_played: 24, wins: 1, total_points: 200 },
      { rank: 6, team: 'Team Zeta', matches_played: 24, wins: 0, total_points: 190 },
      { rank: 7, team: 'Team Eta', matches_played: 24, wins: 0, total_points: 180 },
      { rank: 8, team: 'Team Theta', matches_played: 24, wins: 0, total_points: 170 },
      { rank: 9, team: 'Team Iota', matches_played: 24, wins: 0, total_points: 160 },
      { rank: 10, team: 'Team Kappa', matches_played: 24, wins: 0, total_points: 150 }
    ],
    match_statistics: [
      { match: 'Match 1', winner: 'Team Alpha', most_kills: 'Player X', duration: '30 min' },
      { match: 'Match 2', winner: 'Team Beta', most_kills: 'Player Y', duration: '25 min' },
      { match: 'Match 3', winner: 'Team Gamma', most_kills: 'Player Z', duration: '35 min' },
      { match: 'Match 4', winner: 'Team Delta', most_kills: 'Player W', duration: '32 min' },
      { match: 'Match 5', winner: 'Team Epsilon', most_kills: 'Player V', duration: '28 min' }
    ],
    key_moments: [
      { title: "Match 1: Team Alpha's Clutch Victory", round: "Round 10", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZh98ZbHuLawFOc-_lrJ5foroA04P1G7FxIi8W3mCSOT35w8x4ZffOTmwEnLNe7648sSiYBanZDC_Grx3pIzZJlvDeRY-2k05GnJ2Pm4O2GWz2cTxMiizDp-wgQ-pxgAT7fPR90NK3nWyAwezLEpc-SnQ_feVwyIJw71eq3yxHW-mwsd3WQ89kDEqdojvBkXs6eSUSes6gE9EguYyeqUtXnze3oOazHJCfbqgG822IEusNa3wtYDtGFeuJuBEi2uA1RKX5HefxtSU" },
      { title: "Match 5: Player X's Ace", round: "Round 15", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDk3BVlw3TPvWmfcs_obt4dumnqych3sEVBfmVD4E5b5bAkGfyZ1etuPAoip9d8vHxBzHGlsSX2T733xW4c3OKOArpgJ0q5yKrBSxxFyq4Gf-H4102KPmSWXIK0AZkVCfMJMLvahkmM5Pmp-nu1dImW6ug4q1Q6e0Yc_XcuSueQ14FaB5w1ymc883_gxujpEidFbAiGSqX46dB1FtR8oxqyg6t2BJ2Azw_N4dBCYKFbVCsL3tlLsA4KIM7DeZcZqwHI63qxys9bhQ" },
      { title: "Match 10: Team Beta's Comeback", round: "Round 20", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVuEoxQr2OTB5n8WJK2MMB5lR51BuO3VeRc04f04hB__s1ifak8qnmY_XH5M1V2w1wlFPnzz1hJ58i8jTA7Fqr6Yui540bqjE3zjNjNMP7P50Tg9ShHRemauaNQGeKdEBBFoEg02E7W9NscwQBGNQPSSO3p_1DVsP3JYLYjZK1iHyy5sSPiA_6dZJh3Tr35x_ZOdbZtS5FKgfJ1_PzIILO33s8TWu1-4qD7um7HsZtLgm0bluq_1n9ioVO2GpgiJrKqlH0r7RZZio" }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    // In a real app, you would fetch the event details using this ID
  }
}
