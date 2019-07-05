import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styleUrls: ['./search-heroes.component.css']
})
export class SearchHeroesComponent implements OnInit {

  public searchHeroe: any = {};
  public termino: string;
  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(( params ) => {
      this.termino = params.termino;
      this.searchHeroe = this.heroesService.SearchHeroes(params.termino);
    });
    console.log('mis heros ', this.searchHeroe);
  }

}
