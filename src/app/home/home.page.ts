import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AngularFrameworkDelegate } from '@ionic/angular/common/providers/angular-delegate';
import { doc, setDoc } from 'firebase/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rutled1:any;
  rutled2:any;
  rutled3:any;
  led1Status: any;
  led2Status: any;
  led3Status: any;

  constructor(private db:Firestore) { 
  }

  async led1() {
    this.led1Status = !this.led1Status;
    this.rutled1 = doc(this.db,'controlLed','LED1');
    await setDoc(this.rutled1, { encender: this.led1Status });
  }

  async led2() {
    this.led2Status = !this.led2Status;
    this.rutled2 = doc(this.db,'controlLed','LED2');
    await setDoc(this.rutled2, { encender: !this.led2Status });  
  }

  async led3() {
    this.led2Status = !this.led2Status;
    this.rutled3 = doc(this.db,'controlLed','LED3');
    await setDoc(this.rutled3, { encender: !this.led2Status });
  }

  async leds() {
    this.led1Status = !this.led1Status;
    this.led2Status = !this.led2Status;
    this.led3Status = !this.led3Status;
    this.rutled1 = doc(this.db,'controlLed','LED1');
    await setDoc(this.rutled1, { encender: this.led1Status })
    this.rutled2 = doc(this.db,'controlLed','LED2');
    await setDoc(this.rutled2, { encender: !this.led2Status }); 
    this.rutled3 = doc(this.db,'controlLed','LED3');
    await setDoc(this.rutled3, { encender: !this.led2Status });
  }

  
  
}
