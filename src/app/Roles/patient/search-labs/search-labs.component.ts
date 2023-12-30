import { Component } from '@angular/core';

@Component({
  selector: 'app-search-labs',
  templateUrl: './search-labs.component.html',
  styleUrls: ['./search-labs.component.css']
})
export class SearchLabsComponent {
  basicLabChecked: boolean = false;
  advancedLabChecked: boolean = false;

  labTests: any[] = [
    { name: 'Test 1', checked: false },
    { name: 'Test 2', checked: false },
    // Add more tests as needed
  ];

  constructor() {}

  searchLab() {
    // Implement your lab search logic here
    console.log('Lab Search Filter:', {
      basicLabChecked: this.basicLabChecked,
      advancedLabChecked: this.advancedLabChecked,
      labTests: this.labTests.filter(test => test.checked)
    });
  }
}
