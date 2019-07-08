import { NgModule } from '@angular/core';
import { NgSemanticComponent } from './ng-semantic.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [NgSemanticComponent, ButtonComponent],
  imports: [],
  exports: [NgSemanticComponent, ButtonComponent]
})
export class NgSemanticModule {}
