import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo',
  standalone: true,
  imports: [],
  templateUrl: './calculo.component.html',
  styleUrl: './calculo.component.css'
})
export class CalculoComponent {

  constructor(){
  }
  
  cadena = "Administrador|Analista De Compras|Analista De Nomina|Aprendiz Sena|Asistente Administrativo|Asistente Comercial|Asistente De Gestión Integral|Asistente De Talento Humano|Auditor|Aux Administrativo|Aux Calidad|Aux Cartera|Aux Contable|Aux Cuarto Frio|Aux Cuarto Frio - Aux Ruta|Aux Cuarto Operario Montacarga|Aux De Ruta|Aux Importaciones|Aux Impuestos|Aux Ingenieria Y Logística|Aux Mostrador|Aux Mostrador - Cajero|Aux Proceso|Aux Proceso - Ruta|Aux Servicios|Aux Tecnologías De La Información|Aux Tesorería|Cajero|Conductor|Conductor Supernumerario|Contadora|Coord Administrativo|Coord Calidad e Innovacion|Coord Mantenimiento Y Control De Vehículos|Coord Tecnologías De La Información|Coord Compras Internacionales|Coord Talento Humano|Coord De Importaciones|Coord De Transporte|Domicilio|Ing Tecnologías De La Información|Jefe Cuarto Frio|Jefe Ingeniería Y Logística|Jefe Sala De Proceso|Mensajero|Practicante Universitario|Servicios Generales|Supernumeraria Administrativa|Supervisor Comercial|Supervisor De Logística E Inventarios|Tesorera"
  result: number = 0;
  N0: any = "";
  N1: any = "";
  N2: any = "";
  Ope: string =" ";
  historias: any =[]
  historia: string = ""
  
  


  main(value: string, operator:boolean){

    this.N2 =""
    
    if(operator){
      if(this.historia.slice(-1) == "/" || this.historia.slice(-1)=="*"
       || this.historia.slice(-1) == "+" || this.historia.slice(-1) == "-" 
       || this.historia.slice(-1)=="=" || this.historia.slice(-1) == "<"){

        if(this.historia.slice(-1) != value){
          this.historia = this.historia.slice(0,-1);
          this.historia += value
        }else{
          
        }
      }else{
        this.historia += value
      }
    }else{
      this.historia += value
    }
    for(let h of this.historia){

      //console.log("este es h",h)
      if(h == "/" || h=="*" || h == "+" || h == "-" || h=="=" || h == "<"){
        this.Ope = h
        
        //copio la variable la convierto a texto y le quito las comas 
        this.N1 = [...this.N0].toString().replace(",","");
        this.N2=""
        //console.log("n0:",this.N0,"esto vbale n2:",this.N2, "cuanto vale n1:",this.N1)
        continue
      }
      console.log(this.Ope)
      if(this.Ope == ""){
        this.N2 += h
        this.N0 = [...this.N2].toString().replace(",","");
     
      }else{
        this.N2 += h
        //console.log("este es pro n0:",this.N0,"esto vbale n2:",this.N2, "cuanto vale n1:",this.N1)
        this.calculo(this.Ope) 
        
      }
    }
  
  }

  calculo(o: string){
    console.log("no mames esto entra a calculo?")
      switch(o){
        case '*':
          this.N0= String(Number(this.N1) * Number(this.N2))
          break;
        case '/' :
          this.N0= String(Number(this.N1) / Number(this.N2))
          break;
        case '+' :
          console.log("n0",this.N0, "n1",this.N1,"n2", this.N2)
          this.N0=String(Number(this.N1) + Number(this.N2))
          console.log(this.N0, this.N1, this.N2)
          break;
        case '-':
          this.N0=String(Number(this.N1) * Number(this.N2))
          break;  
        case '=':
          this.result= Number(this.N0)
          this.historias+= this.historia
          break;
        case '<':
          this.N2 =this.N2.slice(0,-1);
          this.historia = this.historia.slice(0,-1);
          break;
        default:
          
          
    } 

  }
}

