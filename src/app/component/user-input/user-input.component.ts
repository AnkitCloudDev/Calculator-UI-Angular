import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  years: number = 0;
  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter<any>();
  onSubmit(){
    console.log(this.initialInvestment);
    console.log(this.annualInvestment);
    console.log(this.expectedReturn);
    console.log(this.years);
    this.onSubmitEvent.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      years: this.years
    });
  }

}
