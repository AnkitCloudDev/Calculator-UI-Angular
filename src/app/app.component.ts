import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UserInputComponent } from './component/user-input/user-input.component';
import { InvestmentResultComponent } from './component/investment-result/investment-result.component';
import { InvestmentData } from './model/investment-data.model';
import { InvestmentCalculation } from './service/investment-calculation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,UserInputComponent,InvestmentResultComponent],
  providers: [InvestmentCalculation]
})
export class AppComponent {
    investmentData: InvestmentData= new InvestmentData();
    investmentResults: any[] = [];

    constructor(private investmentCalculationService: InvestmentCalculation){}

    onSubmit(data: InvestmentData){
        this.investmentData = data;
        this.investmentResults = this.investmentCalculationService.calculateInvestmentResults(this.investmentData);
    }


}
