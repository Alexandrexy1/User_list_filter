import { NgModule } from '@angular/core';


import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    UsersListComponent,
    UserDetailsComponent,
    FilterComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
