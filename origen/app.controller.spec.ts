importar  {  Test ,  TestingModule  }  desde  '@nestjs/testing' ;
importar  {  AppController  }  desde  './app.controller' ;
importar  {  AppService  }  desde  './app.service' ;

describir ( 'AppController' ,  ( )  =>  {
  dejar  appController : AppController ;

  antes de cada uno ( asíncrono ( ) => {   
    const  app : TestingModule  =  await  Test . crear módulo de prueba ( {
      controladores : [ AppController ] ,
      proveedores : [ AppService ] ,
    } ) . compilar ( ) ;

    appController  =  aplicación . obtener < AppController > ( AppController ) ;
  } ) ;

  describir ( 'raíz' ,  ( )  =>  {
    it ( 'debería devolver "¡Hola Mundo!"' ,  ( )  =>  {
      esperar ( appController . getHello ( ) ) . toBe ( '¡Hola mundo!' ) ;
    } ) ;
  } ) ;
} ) ;
