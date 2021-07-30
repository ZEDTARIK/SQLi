import { Ipeople } from './../../../class/ipeople';
import { PeopleService } from './../../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.scss']
})
export class DetailPeopleComponent implements OnInit {

  private id: number;
  peolpe: Ipeople;

  constructor(private Peopleservice: PeopleService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id  = + params.get('id');
      this.Peopleservice.getPeopleDetail(this.id)
        .subscribe(data => {
          this.peolpe = data;
        });
    });
  }

}
