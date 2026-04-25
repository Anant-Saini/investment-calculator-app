import { Component, EventEmitter, Output } from '@angular/core';
import { AnnualData } from '../../../shared/models/annual-data.model';
import { Investment } from '../../../shared/models/investment.model';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {

  get getInvestmentResults(): AnnualData[] {
    return this.calculateService.getInvestmentResults();
  }

  constructor(private calculateService: CalculateService) {
    
  }


}
