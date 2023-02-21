import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-costom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true
        }
    ]
})
export class CustomInputComponent implements ControlValueAccessor {
  public value: string | undefined;

    private onChange!: (value: string) => void;
    private onTouched!: () => void;
    public passwordStatus = ['', '', ''];

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    public onInputValueChange(event: Event): void {
        const targetElement = event.target as HTMLInputElement;
        const value = targetElement.value;

        if (!value || value === '' || value === ' ') {
          this.passwordStatus = this.passwordStatus.map(item => item = '');
        } else if (value.length < 8) {
          this.passwordStatus = this.passwordStatus.map((item, i) => i !== 3 ? item = 'red' : item = '');
        } else if (value.length >= 8) {
          this.passwordStatus = this.passwordStatus.map(item => item = '');
        
          if (/[a-zA-Z]+/g.test(value)
            || /[0-9]+/g.test(value)
            || /[@$-\/:-?{-~!"^_`\[\]]+/g.test(value)) {
            this.passwordStatus[0] = 'red';
            
            if (/[a-zA-Z]+/g.test(value) && /[0-9]+/g.test(value)
              || /[a-zA-Z]+/g.test(value) && /[@$-\/:-?{-~!"^_`\[\]]+/g.test(value)
              || /[@$-\/:-?{-~!"^_`\[\]]+/g.test(value) && /[0-9]+/g.test(value)) {
              this.passwordStatus = this.passwordStatus.map((item, i) => i !== 2 ? item = 'yellow' : item = '');
              
              if (/[a-zA-Z]+/g.test(value) && /[0-9]+/g.test(value) && /[@$-\/:-?{-~!"^_`\[\]]+/g.test(value)) {
                this.passwordStatus = this.passwordStatus.map(item => item = 'green');
              }
            }
          }
        }
  
        this.onChange(`${this.passwordStatus[0]}.${this.passwordStatus[1]}.${this.passwordStatus[2]}`);
    }

    public writeValue(value: string): void {
        this.value = value;

        this.changeDetector.detectChanges();
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
