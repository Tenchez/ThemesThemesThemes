import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaterialComponent implements OnInit, OnDestroy {



  constructor() {}

  public ngOnInit() {

  }

  public ngOnDestroy(): void { }

}
