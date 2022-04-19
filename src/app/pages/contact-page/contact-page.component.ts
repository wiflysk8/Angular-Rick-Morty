import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
contactForm!: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.contactForm = this.formBuilder.group(
    {
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      description: [""],
      race: ["", [Validators.required]],
    }
    )
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.contactForm);
    console.log(this.contactForm.value);
  }
}
