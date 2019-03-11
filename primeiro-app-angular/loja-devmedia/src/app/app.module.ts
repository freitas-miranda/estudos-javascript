import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { UppercaseDirective } from './uppercase.directive';
import { ProdutoService } from './produto.service';

const appRoutes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/:id', component: EditarProdutoComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ProdutosComponent,
    EditarProdutoComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
