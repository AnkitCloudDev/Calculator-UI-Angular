import { Component, Input } from '@angular/core';
import { InvestmentCalculation } from '../../service/investment-calculation.service';
import { InvestmentData } from '../../model/investment-data.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
  providers: [InvestmentCalculation]
})
export class InvestmentResultComponent {
  @Input() investmentData!: InvestmentData;
  @Input() investmentResults: any[] = [];
  constructor(private investmentCalculationService: InvestmentCalculation) {}


  calculateInvestmentResults() {
    this.investmentResults = this.investmentCalculationService.calculateInvestmentResults(this.investmentData);
}
  }
