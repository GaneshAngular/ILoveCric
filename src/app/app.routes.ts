import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { isLogoutGuard } from './core/guards/isLogout/is-logout.guard';
import { isLoggedGuard } from './core/guards/isLogged/is-logged.guard';

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
      canActivate:[isLogoutGuard]
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../../src/app/pages/signup/signup.component').then(
        (h) => h.SignupComponent
      ),
      canActivate:[isLogoutGuard]

  },
  {
    path: 'cricket',
    loadComponent: () =>
      import('../../src/app/pages/cric-home/cric-home.component').then(
        (h) => h.CricHomeComponent
      ),
      canActivate:[isLoggedGuard],
    children: [
      {
        path: '',
        redirectTo: 'matches',
        pathMatch: 'full',
      },{
        path:'profile',
        loadComponent:()=> import('../../src/app/pages/profile/profile.component').then(
          (h) => h.ProfileComponent
        ),
        canActivate:[isLoggedGuard]
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
