import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'validation-password';
  // regLettersOnly = /[a-zA-Z]+/g;
  // regDigitsOnly = /[0-9]+/g;
  // regSumbolsOnly = /[@$-\/:-?{-~!"^_`\[\]]+/g;
  passwordStatus = ['', '', ''];
  // genRegexp = (body: string) => new RegExp(`${body}`, "g");

  validatePassword = (ev: any) => {
    if (!ev.target.value || ev.target.value === '' || ev.target.value === ' ') {
      this.passwordStatus = this.passwordStatus.map(item => item = '');
    } else if (ev.target.value.length < 8) {
      this.passwordStatus = this.passwordStatus.map(item => item = 'red');
    } else if (ev.target.value.length >= 8) {
      this.passwordStatus = this.passwordStatus.map(item => item = '');
      
      if (/[a-zA-Z]+/g.test(ev.target.value)
        || /[0-9]+/g.test(ev.target.value)
        || /[@$-\/:-?{-~!"^_`\[\]]+/g.test(ev.target.value)) {
        this.passwordStatus[0] = 'red';

        if (/[a-zA-Z]+/g.test(ev.target.value) && /[0-9]+/g.test(ev.target.value)
          || /[a-zA-Z]+/g.test(ev.target.value) && /[@$-\/:-?{-~!"^_`\[\]]+/g.test(ev.target.value)
          || /[@$-\/:-?{-~!"^_`\[\]]+/g.test(ev.target.value) && /[0-9]+/g.test(ev.target.value)) {
          this.passwordStatus = this.passwordStatus.map((item, i) => i !== 2 ? item = 'yellow' : item = '');

          if (/[a-zA-Z]+/g.test(ev.target.value) && /[0-9]+/g.test(ev.target.value) && /[@$-\/:-?{-~!"^_`\[\]]+/g.test(ev.target.value)) {
            this.passwordStatus = this.passwordStatus.map(item => item = 'green');
          }
        }
      }
    }
  }
}
