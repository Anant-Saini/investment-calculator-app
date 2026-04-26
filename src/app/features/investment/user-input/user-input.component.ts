import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investment } from '../../../shared/models/investment.model';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('12');
  durationInYears = signal('5');


  constructor(private calculateService: CalculateService) {
  };

  onSubmit() {
    let investment: Investment = {
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      durationInYears: +this.durationInYears()
    }
    this.calculateService.calculateInvestmentResults(investment);
    this.resetForm();
  
  }

  resetForm() {
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('12');
    this.durationInYears.set('5');
  }

}
