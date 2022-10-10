import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
importar  {  AppService  }  desde  './app.service' ;
importar  configuración  desde  './config' ;
importar  {  DatabaseModule  }  desde  './database/database.module' ;

@ Módulo ( {
  importaciones : [
    Módulo de configuración . para Raíz ( {
      envFilePath : '.env' ,
      cargar : [ configuración ] ,
      esGlobal : cierto ,
    } ) ,
    Módulo de base de datos ,
  ] ,
  controladores : [ AppController ] ,
  proveedores : [ AppService ] ,
} )
 clase de  exportación AppModule  { }
