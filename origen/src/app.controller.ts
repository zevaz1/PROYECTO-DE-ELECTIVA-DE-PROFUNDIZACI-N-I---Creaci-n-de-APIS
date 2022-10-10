importar  {  Controlador ,  Obtener  }  de  '@nestjs/common' ;
importar  {  AppService  }  desde  './app.service' ;

@ Controlador ( )
exportar  clase  AppController  {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
