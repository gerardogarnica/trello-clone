import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RecoveryFormComponent } from './components/recovery-form/recovery-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

// Pages
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';

// Modules
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ForgotPasswordFormComponent,
    HeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RecoveryFormComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RecoveryComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class AuthModule { }
