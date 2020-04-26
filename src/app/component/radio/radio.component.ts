import { Component, OnInit, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComponentType, InputTypes, Appearance, ComponentPosition, AlignmentLayoutDirection, Floatinglabel } from 'projects/falcon-core/src/lib/view-models/component-type.enum';
import { BaseFormComponent } from 'projects/falcon-core/src/lib/common/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseFormComponent<any> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();
  constructor(fb: FormBuilder) {
    super(fb);
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig =
    {
      layoutConfig: {
        layoutDirection: ComponentPosition.Row,
        fxLayoutGap: "10px",
        alignmentLayoutDirectionHorizontal: AlignmentLayoutDirection.SpaceAround,
        alignmentLayoutDirectionVertical: AlignmentLayoutDirection.SpaceAround
      },
      componentConfig: [{
        componentProperty: {
          label: "Positon BEFORE (css=radio-group-column) (with prefilled value)",
          options : ['Option 1', 'Option 2'],
          groupCss: "radio-group-column",
          componentCss : "radio-button",
          appearance : Appearance.Before,
          value : 'Option 1'
        },
        componentType: ComponentType.Radio,
        formControlName: "basicRadios",
      },
      {
        componentProperty: {
          label: "Pick your favorite season (with positon AFTER & css=radio-group-column)",
          options : ['Winter', 'Spring', 'Summer', 'Autumn'],
          groupCss: "radio-group-column",
          componentCss : "radio-button",
          appearance : Appearance.After
        },
        componentType: ComponentType.Radio,
        formControlName: "radiosWithLabel"
      }
    ]
    }
  }

  ngOnInit(): void {
    this.form = this.createControls();
  }

  protected getDatasource(): Observable<any> {
    return of();
  }
  protected submitDatasource(model: any): Observable<any> {
    console.log(model);
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Radios_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Radio_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
