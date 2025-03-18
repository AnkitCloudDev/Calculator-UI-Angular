import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { UserInputComponent } from './component/user-input/user-input.component';
import { InvestmentResultComponent } from './component/investment-result/investment-result.component';
import { InvestmentData } from './model/investment-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,UserInputComponent,InvestmentResultComponent]
})
export class AppComponent {
    investmentData: InvestmentData= new InvestmentData();

    submit: boolean= false;

    onSubmit(data: InvestmentData){
        this.investmentData = data;
        this.submit = true;
    }
}
