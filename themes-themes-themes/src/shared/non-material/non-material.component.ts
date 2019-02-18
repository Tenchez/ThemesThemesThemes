import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-non-material',
  templateUrl: './non-material.component.html',
  styleUrls: ['./non-material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NonMaterialComponent implements OnInit, OnDestroy {



  constructor() {}

  public ngOnInit() {

  }

  public ngOnDestroy(): void { }

}
