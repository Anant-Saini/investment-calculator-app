import { Component, EventEmitter, Output } from '@angular/core';
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

  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  durationInYears: number = 0;
  @Output() calculate = new EventEmitter<void>();


  constructor(private calculateService: CalculateService) {
  };

  onSubmit() {
    let investment: Investment = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      durationInYears: this.durationInYears
    }
    this.calculateService.calculateInvestmentResults(investment);
    this.calculate.emit();
  }

}
