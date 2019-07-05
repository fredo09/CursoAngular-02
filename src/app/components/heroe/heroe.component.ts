import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
      private activatedRoute: ActivatedRoute,
      private heroeService: HeroesService,
      private router: Router ) {

    this.activatedRoute.params.subscribe((params) => {
      // console.log(params.Id);
      this.heroe = this.heroeService.getHeroe(params.Id);
    });
  }

  ngOnInit() {

  }

  RegresaHeroes() {
    this.router.navigate(['/heroes']);
  }

}
