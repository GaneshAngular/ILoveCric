import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../../src/app/pages/home/home.component').then(
        (h) => h.HomeComponent
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('../../src/app/pages/signin/signin.component').then(
        (h) => h.SigninComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../../src/app/pages/signup/signup.component').then(
        (h) => h.SignupComponent
      ),
  },
  {
    path: 'cricket',
    loadComponent: () =>
      import('../../src/app/pages/cric-home/cric-home.component').then(
        (h) => h.CricHomeComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'matches',
        pathMatch: 'full',
      },
      {
        path:'matches',
        loadComponent: () =>
          import('../../src/app/pages/matches/matches.component').then(
            (h) => h.MatchesComponent
          ),
      },
      {
        path:'tournaments',
        loadComponent: () =>
          import('../../src/app/pages/tournaments/tournaments.component').then(
            (h) => h.TournamentsComponent
          ),
      },
      {
        path: 'teams',
        loadComponent: () =>
          import('../../src/app/pages/teams/teams.component').then(
            (h) => h.TeamsComponent
          ),
      },{
        path:"completed",
        loadComponent: () =>
          import('../../src/app/pages/matches/matches.component').then(
            (h) => h.MatchesComponent
          ),
      }
    ],
  },
];
