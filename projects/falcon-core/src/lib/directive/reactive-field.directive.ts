import { Directive } from '@angular/core';
import {ComponentFactoryResolver,Input,OnInit,ViewContainerRef} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {IComponentConfig } from '../view-models/imeta';
import { ConstantValues } from '../view-models/constant-values';

@Directive({
  selector: "[reactiveField]"
})
export class ReactiveFieldDirective implements OnInit{
  @Input() field: IComponentConfig;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(ConstantValues.ComponentMapper[this.field.componentType]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
