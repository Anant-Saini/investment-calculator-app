import { Injectable } from '@angular/core';
import { Investment } from '../../shared/models/investment.model';
import { AnnualData } from '../../shared/models/annual-data.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  investmentResults: AnnualData[] = [];

  constructor() {}

  calculateInvestmentResults(investment: Investment) {
    const annualDataArr: AnnualData[] = [];
    let investmentValue = investment.initialInvestment;

    for (let i = 0; i < investment.durationInYears; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investment.expectedReturn / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue -
        investment.annualInvestment * year -
        investment.initialInvestment;
      annualDataArr.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investment.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investment.initialInvestment + investment.annualInvestment * year,
      });
    }

    this.investmentResults = annualDataArr;
  }

  getInvestmentResults(): AnnualData[] {
    return this.investmentResults;
  }

  getIsAnnualDataEmpty(): boolean {
    return this.investmentResults.length === 0;
  }
}
