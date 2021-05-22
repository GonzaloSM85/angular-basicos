import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroesBorrados: string[] = [];

  borrarHeroe(){
    console.log('borrando...');
    let aBorrar: string | undefined = this.heroes.pop();
    if(aBorrar != undefined){
      this.heroesBorrados.push(aBorrar);    
    }
    
  }

}
