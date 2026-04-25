import { computed, Injectable, signal } from '@angular/core';
import { Investment } from '../../shared/models/investment.model';
import { AnnualData } from '../../shared/models/annual-data.model';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  private resultSignal = signal<AnnualData[]>([]);

  investmentResults = this.resultSignal.asReadonly();

  isInvestmentResultsEmpty = computed(() => this.resultSignal().length === 0);
  totalInterest = computed(() =>
    this.resultSignal().reduce(
      (acc, yearData) => acc + yearData.interest,
      0,
    ),
  );

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
    this.resultSignal.set(annualDataArr);
  }
}
