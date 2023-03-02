import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service'
import { Item } from '../../models/Item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    public dataService: DataService
  ) {}

  public items$!: Observable<Item[]>;

  ngOnInit(): void {
    this.items$ = this.dataService.GetItems$();
  }
}
