import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Input() coin: object = {};
  selectedCoin: string = "bitcoin";

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.getCoin(this.selectedCoin);
    console.log(this.coin);
  }

  getCoin(coin: string): void {
    this.http.get('https://api.coinmarketcap.com/v1/ticker/' + coin).subscribe(data => {
      console.log(data);
      this.coin = data[0];
    })
  }

  changeCoin(event): void {
    this.selectedCoin = event.target.name;
    this.getCoin(this.selectedCoin);
  }


}
