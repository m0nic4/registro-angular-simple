import { Component } from '@angular/core';
import { Alumno } from './models/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnoArray:Alumno[] =[

    {id:1,nombre_completo:'Monica Torrez',identidad:'333332'},
    
    {id:2,nombre_completo:'pep Torre',identidad:'3335332'},
    
    {id:3,nombre_completo:'Marvin t',identidad:'32333332'},
  ];
  selectedAlumno:Alumno={id:0,nombre_completo:'',identidad:''};
  openForEdit(Alumno: Alumno) : void{
    this.selectedAlumno=Alumno;

  }
   addOrEdit():void{
    if(this.selectedAlumno.id === 0){
      this.selectedAlumno.id=this.alumnoArray.length+1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno ={id:0,nombre_completo:'',identidad:''};
  }
  delete():void {
    if (confirm('are you sure want to delete it?'))
    {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0, nombre_completo:'',identidad:'' };
      
    }
  }
  title = 'registro-angular-simple';
  
}
