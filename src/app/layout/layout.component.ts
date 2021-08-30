import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  deviceXs: boolean;
  mediaSubscription: Subscription;
  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaSubscription = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }

}
