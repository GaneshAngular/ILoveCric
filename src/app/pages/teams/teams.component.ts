import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teams',
  imports: [CommonModule,FormsModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teamType:string=''
  filteredTeams = [
    {
      name: 'India National Team',
      country: 'India',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
      matches: 240,
      wins: 140,
      losses: 80,
      captain: 'Rohit Sharma',
      type: 'international',
    },
    {
      name: 'Sydney Sixers',
      country: 'Australia',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Sydney_Sixers_logo.svg/1200px-Sydney_Sixers_logo.svg.png',
      matches: 95,
      wins: 60,
      losses: 30,
      captain: 'Moises Henriques',
      type: 'domestic',
    },
    {
      name: 'England Lions',
      country: 'England',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/England_cricket_team_logo.svg',
      matches: 200,
      wins: 110,
      losses: 70,
      captain: 'Jos Buttler',
      type: 'international',
    },
    // Add more dummy teams as needed
  ];

}
