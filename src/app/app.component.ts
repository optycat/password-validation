import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  public formGroup = new FormGroup({
    customInput: new FormControl('')
  });
  title = 'validation-password';
  someAction() {
    let tmp = `${this.formGroup.value.customInput}`.split('.');
    return(tmp);
  }
}
