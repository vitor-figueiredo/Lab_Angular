import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Hero } from '../models/hero';



@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  formHero : FormGroup;

  constructor() { 
    const hero = new Hero();

    this.formHero = new FormGroup({
      name    : new FormControl(hero.name , [Validators.required, Validators.minLength(4)] ),
      power   : new FormControl(hero.power, [Validators.required, Validators.maxLength(10)] ),
      alterEgo: new FormControl(hero.alterEgo),
    });
  }


  onSave() {
    alert( this.formHero.patchValue );
  }


  onCancel() {
    alert('Canceled');
  }


  /*
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  */

}
