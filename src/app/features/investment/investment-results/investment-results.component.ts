import { Component, EventEmitter, Output } from '@angular/core';
import { AnnualData } from '../../../shared/models/annual-data.model';
import { Investment } from '../../../shared/models/investment.model';
import { CalculateService } from '../calculate.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {

  result = this.calculateService.investmentResults;
  totalInterest = this.calculateService.totalInterest;


  constructor(private calculateService: CalculateService) {
    
  }


}
