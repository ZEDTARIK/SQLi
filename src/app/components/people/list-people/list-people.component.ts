import { Router } from '@angular/router';
import { Ipeople } from './../../../class/ipeople';
import { PeopleService } from './../../../services/people.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {

  constructor(private peopleservice: PeopleService,
              private  router: Router) { }



  peoples: Ipeople[] = [];
  ResultPeoples: Ipeople[] = [];
  searchTxt = '';

  ngOnInit(): void {
    this.getPeoples();
  }

  // GET All Peoples
  getPeoples() {
    this.peopleservice.getAllPeopls()
      .subscribe(data => {
        this.peoples = this.ResultPeoples = data.results;
      });
  }

  onSearchTxt() {
    return  this.peoples = this.ResultPeoples.filter(people =>
      people.name.toLowerCase().indexOf(this.searchTxt.toLowerCase()) !== -1);
  }

}
