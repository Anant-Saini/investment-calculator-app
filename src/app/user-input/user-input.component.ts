import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  durationInYears: number = 0

  onSubmit() {
    console.log("Submitted: ", this.initialInvestment, this.annualInvestment, this.expectedReturn, this.durationInYears);
  }

}
