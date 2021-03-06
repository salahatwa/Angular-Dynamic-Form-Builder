import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IComponentConfig } from '../../view-models/imeta';

@Component({
  selector: 'lib-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss','../../common/style.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
