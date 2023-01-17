import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes.model';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  heroes: Heroes[] = []
  array_heroes: number[] = [1,3,4,5,14,10]

  constructor(private serviceApi: ServiceApiService) { }

  ngOnInit(): void {
    this.serviceApi.getHeroes().subscribe((data: Heroes[]) => {
      console.log('data: ', data)
      data.map((hero: Heroes) => {  
        if(this.array_heroes.includes(hero.id)){
          this.heroes.push(hero)
        }
      })
    })
  }

}
