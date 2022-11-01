import { Component, OnInit } from '@angular/core';
import { MaryleboneService } from '../../core/services';

@Component({
  selector: 'app-prime-numbers-input',
  templateUrl: './prime-numbers-input.component.html'
})
export class PrimeNumbersInputComponent implements OnInit {

  inputNumber: string = "";

  output: Array<number> = [];

  errorMessage: string = "";

  constructor(private maryleboneService: MaryleboneService) { }

  ngOnInit(): void { }

  generatePrimes(): void {

    if (isNaN(Number(this.inputNumber)) || Number(this.inputNumber) < 1 || Number(this.inputNumber) > 100) {
      this.output = [];
      this.errorMessage = "Enter a valid number between 1 and 100";
      return;
    }

    this.maryleboneService.getPrimeNumbersBetween(0, Number(this.inputNumber)).subscribe((response: Array<number>) => {

      this.output = response;
      this.errorMessage = "";

    });

  }

}
