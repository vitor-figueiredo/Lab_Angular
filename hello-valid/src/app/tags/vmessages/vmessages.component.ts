import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'vmessages',
  templateUrl: './vmessages.component.html',
  styleUrls: ['./vmessages.component.scss']
})
export class VmessagesComponent {

  @Input() control ?: AbstractControl;

  @Input() requiredText  = '';
  @Input() minlengthText = '';
  @Input() maxlengthText = '';

}
