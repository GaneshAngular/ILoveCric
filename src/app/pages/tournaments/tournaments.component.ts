import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tournaments',
  imports: [CommonModule,FormsModule],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {
  filterType: 'all' | 'domestic' | 'international' = 'all';
  showHostModal = false;

  tournaments = [
    {
      id: '1',
      name: 'ICC T20 World Cup',
      type: 'international',
      startDate: new Date('2023-10-16'),
      endDate: new Date('2023-11-13'),
      teams: 16,
      matches: 45,
      status: 'upcoming',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/International_Cricket_Council_logo.svg/1200px-International_Cricket_Council_logo.svg.png',
      prizeMoney: '$5.6 million',
      organizer: 'ICC'
    },
    {
      id: '2',
      name: 'Indian Premier League',
      type: 'domestic',
      startDate: new Date('2023-03-31'),
      endDate: new Date('2023-05-28'),
      teams: 10,
      matches: 74,
      status: 'ongoing',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Indian_Premier_League_Official_Logo.svg/1200px-Indian_Premier_League_Official_Logo.svg.png',
      prizeMoney: '$10 million',
      organizer: 'BCCI'
    },
    {
      id: '3',
      name: 'The Ashes',
      type: 'international',
      startDate: new Date('2023-06-16'),
      endDate: new Date('2023-07-31'),
      teams: 2,
      matches: 5,
      status: 'upcoming',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Ashes_urn.svg/1200px-Ashes_urn.svg.png',
      prizeMoney: 'Trophy',
      organizer: 'ECB & CA'
    },
    {
      id: '4',
      name: 'Big Bash League',
      type: 'domestic',
      startDate: new Date('2022-12-13'),
      endDate: new Date('2023-02-04'),
      teams: 8,
      matches: 61,
      status: 'completed',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Big_Bash_League_logo.svg/1200px-Big_Bash_League_logo.svg.png',
      prizeMoney: '$450,000',
      organizer: 'Cricket Australia'
    },
    {
      id: '5',
      name: 'Caribbean Premier League',
      type: 'domestic',
      startDate: new Date('2023-08-31'),
      endDate: new Date('2023-09-30'),
      teams: 6,
      matches: 34,
      status: 'upcoming',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Caribbean_Premier_League_Logo.svg/1200px-Caribbean_Premier_League_Logo.svg.png',
      prizeMoney: '$250,000',
      organizer: 'CWI'
    },
    {
      id: '6',
      name: 'Asia Cup',
      type: 'international',
      startDate: new Date('2023-09-01'),
      endDate: new Date('2023-09-17'),
      teams: 6,
      matches: 13,
      status: 'upcoming',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Asia_Cup_Logo.svg/1200px-Asia_Cup_Logo.svg.png',
      prizeMoney: '$1.5 million',
      organizer: 'ACC'
    }
  ];

  get filteredTournaments() {
    if (this.filterType === 'all') {
      return this.tournaments;
    }
    return this.tournaments.filter(t => t.type === this.filterType);
  }

  getStatusBadgeClass(status: string) {
    switch (status) {
      case 'ongoing':
        return 'px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800';
      case 'upcoming':
        return 'px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800';
      case 'completed':
        return 'px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800';
      default:
        return 'px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800';
    }
  }

  openHostModal() {
    this.showHostModal = true;
  }

  closeHostModal() {
    this.showHostModal = false;
  }

  hostTournament() {
    // Implement tournament creation logic here
    console.log('Tournament creation submitted');
    this.closeHostModal();
  }
}
