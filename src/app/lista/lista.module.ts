import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListViewComponent } from './list-view/list-view.component'; // fornece os principais comandos do module

// Diferente de um componente um modulo nao é adicionado automaticamente a outros componentes.

@NgModule({
  declarations: [InputComponent, ListViewComponent],
  exports: [InputComponent, ListViewComponent],
  imports: [CommonModule],
})
export class ListaModule {}
