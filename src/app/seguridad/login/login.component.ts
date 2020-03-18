import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ERROR_DEFS } from '../../shared/validation-error/errors-defs';
import { SecurityService } from 'src/app/shared/services/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  ERROR_DEFS = ERROR_DEFS;

  constructor(private readonly fb: FormBuilder,
    private readonly securityService: SecurityService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreDeUsuario: [ '', [Validators.required, Validators.email]],
      contrasena: [ '', [Validators.required]],
    });
  }

  login(): void {
    if(this.form.valid){
      console.log(this.form.value)
      this.securityService.login(this.form.value).subscribe((data: any) => console.log(data));;

    }

  }

}
