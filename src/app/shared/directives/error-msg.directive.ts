import {
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  @Input() set mensaje(value: string) {
    this._mensaje = value;
    this.setMensaje();
  }
  @Input() set valido(isValid: boolean) {
    if (isValid) this.htmlElement.nativeElement.classList.remove('hidden');
    else this.htmlElement.nativeElement.classList.add('hidden');
  }

  constructor(private elt: ElementRef<HTMLElement>) {
    this.htmlElement = elt;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
