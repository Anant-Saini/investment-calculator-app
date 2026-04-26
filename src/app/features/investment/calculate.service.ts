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
    const {
      initialInvestment,
      annualInvestment,
      expectedReturn,
      durationInYears,
    } = investment;
    let investmentValue = initialInvestment;

    for (let i = 0; i < durationInYears; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue -
        annualInvestment * year -
        initialInvestment;
      annualDataArr.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          initialInvestment + annualInvestment * year,
      });
    }
    this.resultSignal.set(annualDataArr);
  }
}
