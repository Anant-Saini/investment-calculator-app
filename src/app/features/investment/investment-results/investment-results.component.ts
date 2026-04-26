import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';
import { CurrencyPipe } from '@angular/common';
import { InrCurrencyPipe } from "../../../shared/pipes/inr-currency.pipe";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [InrCurrencyPipe],
  providers: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {

  results = this.calculateService.investmentResults;
  totalInterest = this.calculateService.totalInterest;


  constructor(private calculateService: CalculateService) {
    
  }


}
