import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UserInputComponent } from './component/user-input/user-input.component';
import { InvestmentResultComponent } from './component/investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,UserInputComponent,InvestmentResultComponent]
})
export class AppComponent {
    initialInvestment: number = 0;
    annualInvestment: number = 0;
    expectedReturn: number = 0;
    duration: number = 0;
    submit: boolean= false;

    onSubmit(data: {initialInvestment: number,annualInvestment: number, expectedReturn: number, duration: number}){
        this.initialInvestment = data.initialInvestment;
        this.annualInvestment = data.annualInvestment;
        this.expectedReturn = data.expectedReturn;
        this.duration = data.duration;
        this.submit = true;
    }
}
