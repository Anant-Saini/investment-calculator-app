import { Component } from '@angular/core';
import { HeaderComponent } from "./core/header/header.component";
import { UserInputComponent } from "./features/investment/user-input/user-input.component";
import { InvestmentResultsComponent } from "./features/investment/investment-results/investment-results.component";
import { CalculateService } from './features/investment/calculate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {

  isAnnualDataEmpty = this.calculateService.isInvestmentResultsEmpty;

  constructor(private calculateService: CalculateService ) {

  }



}
