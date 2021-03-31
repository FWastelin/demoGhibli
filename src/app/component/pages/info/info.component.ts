import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  // mes variable:
  id : string;
  film : Film;

  constructor(
    private _service : FilmService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];//snapshot c'est l'image de l'url auquel on met un paramétre
    this._service.getById(this.id, "https://ghibliapi.herokuapp.com/films")
                .subscribe(data => this.film = data);
  }

}
