import { AbstractControl } from '@angular/forms';

export function validarPorcentaje(porcentaje) {
  return (control: AbstractControl): { [key: string]: any } => {
    const porcentajeNoValido = control.value > porcentaje;
    return porcentajeNoValido ? { 'porcentajeInvalido': { value: control.value } } : null;
  };
}

export function validarDecimales() {
  const objRegExp = /^\s*-?\d+(\.\d{1,2})?\s*$/;
  return (control: AbstractControl): { [key: string]: any } => {
    const decimalesValidos = control.value ? objRegExp.test(control.value) : true;
    return !decimalesValidos ? { 'decimalesInvalidos': { value: control.value } } : null;
  };
}

export function validarCampoNumerico() {
  const objRegExp = /^\d+$/;
  return (control: AbstractControl): { [key: string]: any } => {
    const numeroDocValido = control.value ? objRegExp.test(control.value) : true;
    return !numeroDocValido ? { 'campoNumericoInvalido': { value: control.value } } : null;
  };
}

export function validarCorreoElectronico() {
  // tslint:disable-next-line:max-line-length
  const objRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (control: AbstractControl): { [key: string]: any } => {
    const correoValido = control.value ? objRegExp.test(control.value) : true;
    return !correoValido ? { 'correoInvalido': { value: control.value } } : null;
  };
}

export function validarTamanioExactoCaracteres(numeroCaracteres) {
  return (control: AbstractControl): { [key: string]: any } => {
    const tamanioValido = control.value ? control.value.length !== numeroCaracteres : false;
    return tamanioValido ? { 'tamanioInvalido': { value: control.value } } : null;
  };
}

export function validarTamanioMaximoCaracteres(numeroCaracteres) {
  return (control: AbstractControl): { [key: string]: any } => {
    const tamanioValido = control.value ? control.value.length > numeroCaracteres : false;
    return tamanioValido ? { 'tamanioInvalido': { value: control.value } } : null;
  };
}
export function validarCampoAlfaNumerico() {
  const objRegExp = /^[A-Za-z0-9]+$/;
  return (control: AbstractControl): { [key: string]: any } => {
    const alfanumericoDocValido = control.value ? objRegExp.test(control.value) : true;
    return !alfanumericoDocValido ? { 'caracteresInvalidos': { value: control.value } } : null;
  };
}

export function validarCorreoMultiplesValores() {
  // tslint:disable-next-line:max-line-length
  const objRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (control: AbstractControl): { [key: string]: any } => {
    const emailsValidar = control.value ? control.value :  [];
    const emailInvalido = emailsValidar.find(email => !objRegExp.test(email));
    return !!emailInvalido ? { 'emailInvalido': { value: emailInvalido } } : null;
  };
}

export function validarCorreo(correo: string) {
  // tslint:disable-next-line:max-line-length
  const objRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return objRegExp.test(correo);
}
