import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  nombre: string = 'Esteban Rosano';
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  campoInvalido(campo: string) {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.nombre = Math.random().toString();
  }

  cambiarColor() {
    this.color = '#xxxxxx'.replace(/x/g, () =>
      ((Math.random() * 16) | 0).toString(16)
    );
  }
}
