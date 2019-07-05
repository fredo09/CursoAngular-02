import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroesComponent } from './components/search-heroes/search-heroes.component';

import { Routes, RouterModule  } from '@angular/router';


const APP_RUOTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroe/:Id', component: HeroeComponent},
    {path: 'searchHeroes/:termino', component: SearchHeroesComponent },
    {path: '**', pathMatch: 'full', redirectTo: ''}
];


export const APP_ROUTING = RouterModule.forRoot(APP_RUOTES);
