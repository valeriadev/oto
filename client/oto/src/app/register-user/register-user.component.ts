import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router, Params } from '@angular/router';
import {
  Country,
  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,
  PhoneValidator
} from '../validators';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  errorMessage = '';
  successMessage = '';
  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;
  carForm: FormGroup;

  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;
  parentErrorStateMatcher = new ParentErrorStateMatcher();

  cars = [
    'Abarth',
    'Acura',
    'Arash',
    'Alfa Romeo',
    'Ariel Motor Company',
    'Ascari',
    'Aston Martin',
    'Audi',
    'Bentley',
    'Bowler',
    'BMW',
    'Briggs Automotive Company',
    'Bristol Cars',
    'Brooke Cars',
    'Bugatti',
    'Buick',
    'Cadillac',
    'Caparo Vehicle Technologies',
    'Caterham',
    'Chery',
    'Chevrolet',
    'Chevron Cars',
    'Chrysler',
    'Citroen',
    'Corvette',
    'Dacia',
    'Daihatsu',
    'Datsun',
    'Dodge',
    'Donkervoort',
    'Ferrari',
    'Fiat',
    'Fisker',
    'Ford',
    'FPV',
    'Ginetta',
    'GMC',
    'Hennessey',
    'Holden',
    'Honda',
    'Hyundai',
    'Infiniti',
    'Isuzu',
    'Jaguar',
    'Jeep',
    'Joss',
    'Kamaz',
    'Kia',
    'Koenigsegg',
    'KTM',
    'Lamborghini',
    'Lancia',
    'Land Rover',
    'Lexus',
    'Lister',
    'Lincoln Motor Company',
    'Lotus',
    'Mahindra & Mahindra',
    'MarutiSuzuki',
    'Maserati',
    'Mastretta',
    'Mazda',
    'McLaren Automotive',
    'Mercedes-Benz',
    'MG Motor',
    'Mini',
    'Mitsubishi',
    'Morgan',
    'Nissan',
    'Noble',
    'Opel',
    'Pagani',
    'Perodua',
    'Peugeot',
    'Porsche',
    'Proton',
    'Radical Sportscars',
    'Ram',
    'Renault',
    'Roewe',
    'Rolls-Royce Motor Cars',
    'RUF',
    'Saleen',
    'Saab',
    'Scion',
    'Seat',
    'Skoda',
    'Smart Automobile',
    'SRT',
    'SsangYong Motor',
    'Subaru',
    'Superformance',
    'Suzuki',
    'Tata',
    'Tesla',
    'Toyota',
    'TVR',
    'Ultima Sports',
    'Vauxhall Motors',
    'Venturi',
    'Volkswagen',
    'Volvo',
    'Westfield',
    'Wiesmann',
    'Zenvo',
    'Other'
  ];

  genders = ['Male', 'Female', 'Other'];

  countries = [new Country('IL', 'Israel'), new Country('US', 'United States')];

  validation_messages = {
    fullname: [{ type: 'required', message: 'Full name is required' }],
    bio: [
      {
        type: 'maxlength',
        message: 'Bio cannot be more than 256 characters long'
      }
    ],
    gender: [{ type: 'required', message: 'Please select your gender' }],
    birthday: [{ type: 'required', message: 'Please insert your birthday' }],
    phone: [
      { type: 'required', message: 'Phone is required' },
      {
        type: 'validCountryPhone',
        message: 'Phone incorrect for the country selected'
      }
    ]
  };

  account_validation_messages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long'
      },
      {
        type: 'pattern',
        message:
          'Your password must contain at least one uppercase, one lowercase, and one number'
      }
    ],
    terms: [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  userLocation: { lat: 0; long: 0 };

  ownCar = false;

  car = {};

   /*car = {
    brand: '',
    model: '',
    color: '',
    license: ''
    };
    */
  isLinear = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.onFirebaseSuccessfulRegister = this.onFirebaseSuccessfulRegister.bind(
      this
    );
    this.onFirebaseFailedRegister = this.onFirebaseFailedRegister.bind(this);
    this.createForms();
  }

  facebookLogin() {
    this.authService.doFacebookAuth().then(
      res => {
        this.router.navigate(['/user/homepage']);
      },
      err => console.log(err)
    );
  }

  twitterLogin() {
    this.authService.doTwitterAuth().then(
      res => {
        this.router.navigate(['/user/homepage']);
      },
      err => console.log(err)
    );
  }

  googleLogin() {
    this.authService.doGoogleAuth().then(
      res => {
        this.router.navigate(['/user/homepage']);
      },
      err => console.log(err)
    );
  }

  tryRegister() {
    const emailPasswordValue = this.accountDetailsForm.value;
    this.authService
      .doRegister({
        email: emailPasswordValue.email,
        password: emailPasswordValue.matching_passwords.password
      })
      .then(this.onFirebaseSuccessfulRegister, this.onFirebaseFailedRegister);
  }

  onFirebaseFailedRegister(err: any) {
    console.log(err);
    this.errorMessage = err.message;
    this.successMessage = '';
  }

  onFirebaseSuccessfulRegister(res: firebase.auth.UserCredential) {
    const uid = res.user.uid;
    const emailPasswordValue = this.accountDetailsForm.value;
    const user = {
      uid,
      email: emailPasswordValue.email,
      password: emailPasswordValue.matching_passwords.password,
      ...this.userDetailsForm.value,
      ...this.accountDetailsForm.value,
      ...this.car,
      ...this.userLocation,
      ...this.country_phone_group.value
    };
    this.http
      .post('http://localhost:8080/user', user)
      .subscribe(
        data => {
          console.log('Exten user details', data);
          this.router.navigateByUrl('/welcome');

        },
        error => {
          console.log('Error', error);
        }
      );
    console.log(res);
    this.errorMessage = '';
    this.successMessage = 'Your account has been created';
  }

  onLocationChanged(payload: any) {
    this.userLocation = payload;
  }

  createForms() {

    this.matching_passwords_group = new FormGroup(
      {
        password: new FormControl(
          '',
          Validators.compose([
            Validators.minLength(5),
            Validators.required,
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'
            )
          ])
        ),
        confirm_password: new FormControl('', Validators.required)
      },
      (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      }
    );

    const country = new FormControl(this.countries[0], Validators.required);

    const phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.country_phone_group = new FormGroup({
      country: country,
      phone: phone
    });

    this.userDetailsForm = this.fb.group({
      fullname: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: new FormControl(this.genders[0], Validators.required),
      country_phone: this.country_phone_group
    });

    // user links form validations
    this.accountDetailsForm = this.fb.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(false, Validators.pattern('true'))
    });
  }

  onSubmitAccountDetails(value) {
    console.log(value);
  }

  onSubmitUserDetails(value) {
    console.log(value);
  }
}
