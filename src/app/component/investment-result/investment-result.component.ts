import { Component, Input } from '@angular/core';
import { InvestmentCalculation } from '../../service/investment-calculation.service';
import { InvestmentData } from '../../model/investment-data.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [NgFor],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {

  @Input() investmentResults: any[] = [];
  constructor(private investmentCalculationService: InvestmentCalculation) {}



  }
