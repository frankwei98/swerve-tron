import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  account$: Observable<string>;
  balance$: Observable<any>;

  constructor(private StateService: StateService) {
    const state$ = StateService.getState$();

    this.account$ = state$.pipe(
      map(state => state.account)
    );
    this.balance$ = state$.pipe(
      map(state => state.balance)
    );
  }

  ngOnInit(): void {
  }

}
