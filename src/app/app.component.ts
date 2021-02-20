import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'openFinancialsTest';
  applyClassToNavBar: boolean;
  monthlyIncome = 0;
  monthlyExpense = 0;
  rePayment= new FormControl('0');

  ngOnInit() {
    this.rePayment = new FormControl('6')
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 25) {
      this.applyClassToNavBar = true;
    } else {
      this.applyClassToNavBar = false;
    }

  }

  updateValue(e) {
      this.monthlyIncome = e.value  ;
    
  }
  updateValueMonthlyExp(event) {
    this.monthlyExpense = event.value ;
  }
}
