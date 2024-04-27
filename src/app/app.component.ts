import { Component, ViewChild } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ]
})
export class AppComponent {
  step1Complete = false;
  step2Complete = false;
  toggleStep1Complete() {
    this.step1Complete = !this.step1Complete;
  }
  toggleStep2Complete() {
    this.step2Complete = !this.step2Complete;
  }

  selectionChange(event: StepperSelectionEvent) {
    console.log(event.selectedStep.label);
    let stepLabel = event.selectedStep.label;
    if (stepLabel == 'Step 2') {
      console.log('CLICKED STEP 2');
    }
  }
}
