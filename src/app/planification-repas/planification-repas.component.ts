import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RepasService } from '../services/repas.service';

@Component({
  selector: 'app-planification-repas',
  templateUrl: './planification-repas.component.html',
  styleUrls: ['./planification-repas.component.css']
})
export class PlanificationRepasComponent implements OnInit{
   planificationForm!: FormGroup;

   constructor(
    private formBuilder: FormBuilder,
    private repasService: RepasService
   ) {}


  ngOnInit(): void {
      this.initForm();
  }

   initForm(): void {
    this.planificationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      desc: ['', Validators.required],
      calories: [0, [Validators.required, Validators.min(0)]]
    });
   }

   onSubmit(): void {
    if (this.planificationForm.valid) {
      const nom = this.planificationForm.get('nom')?.value;
      const desc =  this.planificationForm.get('desc')?.value;
      const calories = this.planificationForm.get('calories')?.value;
      this.repasService.PlanifierRepas(nom, desc, calories);
      this.planificationForm.reset();
    }
   }

}
