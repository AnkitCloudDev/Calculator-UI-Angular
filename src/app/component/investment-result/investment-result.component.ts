import { Component, Input } from '@angular/core';
import { InvestmentCalculation } from '../../service/investment-calculation.service';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {

  @Input() investmentResults: any[] = [];
  constructor(private investmentCalculationService: InvestmentCalculation) {}



  }
