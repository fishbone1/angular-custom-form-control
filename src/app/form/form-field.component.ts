import {AfterViewInit, Component, forwardRef, Input, NgModule, ViewChild} from '@angular/core';
import {
  ControlValueAccessor,
  DefaultValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'form-field',
  template: `    
    <label>
      {{label}}
      <input ngDefaultControl type="text" >
    </label>
    `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormFieldComponent),
    multi: true
  }]
})
export class FormFieldComponent implements ControlValueAccessor, AfterViewInit {
  @Input() label: String;
  @Input() formControlName: String;
  @ViewChild(DefaultValueAccessor) valueAccessor: DefaultValueAccessor;

  delegatedMethodCalls = new ReplaySubject<(_: ControlValueAccessor) => void>();

  ngAfterViewInit(): void {
    this.delegatedMethodCalls.subscribe(fn => fn(this.valueAccessor));
  }

  registerOnChange(fn: (_: any) => void): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.registerOnChange(fn));
  }
  registerOnTouched(fn: () => void): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.registerOnTouched(fn));
  }

  setDisabledState(isDisabled: boolean): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.setDisabledState(isDisabled));
  }

  writeValue(obj: any): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.writeValue(obj));
  }
}
