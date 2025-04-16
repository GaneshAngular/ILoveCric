import { Component } from '@angular/core';

@Component({
  selector: 'app-matches',
  imports: [],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {
  matches = [
    {
      team1: { code: 'IND', flag: 'https://flagcdn.com/48x36/in.png' },
      team2: { code: 'AUS', flag: 'https://flagcdn.com/48x36/au.png' },
      tournament: 'T20 World Cup • Group Stage',
      venue: 'Dubai International Stadium',
      score1: '182/5 (20)',
      score2: '156/7 (17.2)',
      status: 'India need 27 runs from 16 balls',
      progress: 65,
      color: 'red'
    },
    {
      team1: { code: 'PAK', flag: 'https://flagcdn.com/48x36/pk.png' },
      team2: { code: 'ENG', flag: 'https://flagcdn.com/48x36/gb-eng.png' },
      tournament: 'T20 World Cup • Group Stage',
      venue: 'Sharjah Cricket Stadium',
      score1: '165/8 (20)',
      score2: '132/3 (14)',
      status: 'England need 34 runs from 36 balls',
      progress: 45,
      color: 'green'
    },
    {
      team1: { code: 'NZ', flag: 'https://flagcdn.com/48x36/nz.png' },
      team2: { code: 'SA', flag: 'https://flagcdn.com/48x36/za.png' },
      tournament: 'T20 World Cup • Group Stage',
      venue: 'Abu Dhabi Stadium',
      score1: '148/10 (19.3)',
      score2: '112/2 (12.4)',
      status: 'South Africa need 37 runs from 44 balls',
      progress: 55,
      color: 'blue'
    }
  ];
}
