import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public form : FormGroup;
  /*
  form = new FormGroup({
    username: new FormControl("User", [ Validators.required ]),
    password: new FormControl("abc132", [ Validators.required ]),
    remember: new FormControl()
  })
  */
  constructor(private formBuilder : FormBuilder ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['blah', Validators.required],
      password: ['abc123', Validators.required],
      remember: [false,]
    });

  }

  OnSubmit(jsonForm) {
    console.log(jsonForm)
  }

}
