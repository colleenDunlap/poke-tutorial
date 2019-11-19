import { Component, OnInit } from '@angular/core';
import { PokeDataService} from './poke-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokeDataService]
})
export class AppComponent implements OnInit{
  poke: any;
  url = 'https://pokeapi.co/api/v2/pokemon/growlithe/'
  constructor(private srv: PokeDataService){
    let self = this;
    window.onload=function(){
      let btn = document.getElementById("iChooseYou");
      btn.addEventListener("click", (e:Event) => self.changeURL());

    }
  }
  changeURL():void{
    let pokemon2use = (<HTMLInputElement>document.getElementById("Pokemon2Get")).value
    this.url = 'https://pokeapi.co/api/v2/pokemon/'+ pokemon2use + '/'
    console.log(this.url)
    this.getPoke()
  }
  getPoke():void{
    this.srv.getData(this.url).subscribe(data=>this.poke=data)
    console.log(this.poke)
  }
  ngOnInit(){
    this.getPoke()
  }
}

