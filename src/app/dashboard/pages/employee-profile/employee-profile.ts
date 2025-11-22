import { Component, inject, OnInit } from '@angular/core';
import { Title } from '../../shared/title/title';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-profile',
  imports: [Title, ReactiveFormsModule],
  templateUrl: './employee-profile.html',
  styles: ``,
})
export default class EmployeeProfile implements OnInit {
  /**
   * 1- ReactiveFormsModule
   * 2- 3 conceptos
   *    FormGroup
   *    FormBuilder
   *    FormArray
   *    Formcontrol
   *    
   * 3- Crear modelo del formulario
   * 
   * 4-Para enlazar en el template FormGroup
   * 
   */

  private fb = inject(FormBuilder); 

  public profileForm!: FormGroup;
  public sikllsList = [];

  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }

  ngOnInit(){
    this.createForm();
  }

  /**
   * addSkill
   */
  public addSkill() {
    this.skills.push(this.fb.control('', [Validators.required, Validators.minLength(2)]));
  }

  /**
   * removeSkill
   */
  public removeSkill(index: number) {
    this.skills.removeAt(index);
  }


  /**
   * createForm
   */
  public createForm() {
    this.profileForm = this.fb.group({
      //FormGroup Anidado
      basicInfo: this.fb.group({
          name: ['', [Validators.required, Validators.minLength(3)]],
          role: ['', Validators.required]
        }),

      //simple control... first value in array is initial value
      email: ['', [Validators.required, Validators.email] ],
      // FormArray for dinamic controls.
      skills: this.fb.array([
        this.fb.control('Angular', [Validators.required, Validators.minLength(2)])
      ])
    });
  }


  /**
   * onSubmit
   */
  public onSubmit() {
    console.log('Form sent', this.profileForm.value);
    if (this.profileForm.valid){
      console.log('Form saved succesfully!');
    } else {
      console.log('Not valid form!');
    }
  }


}
