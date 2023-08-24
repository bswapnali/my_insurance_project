import {Component, OnInit, Output, Type} from '@angular/core';

interface Country {
  [key: string]: any
}

const COUNTRIES: Country[] = [
  {
    TITLE:'FTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    TITLE:'WTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russian',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    TITLE:'MTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russiana',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    TITLE:'TTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russiaanas',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    TITLE:'TTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russiay',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    TITLE:'TTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russiaiss',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    TITLE:'TTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russiaads',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    TITLE:'TTD',
    POLICY:'POLICY',
    AMOUNT:'AMOUNT',
    name: 'Russiasfdg',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  }
];

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styles: []
})

export class RegularComponent implements OnInit {
  @Output() RegularComponent : Type<Component>;
  heading = 'Regular Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';
  page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;
  countries: Country[];
  constructor() {
  }


  ngOnInit() {
    this.refreshCountries();
  }
  
  getHeaders() {
    let headers: string[] = [];
    if(this.countries) {
      this.countries.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }
  refreshCountries() {
    this.countries = COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
