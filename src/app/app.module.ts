import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonIrArribaComponent } from './componentes/boton-ir-arriba/boton-ir-arriba.component';
import { BarraSocialVerticalComponent } from './componentes/barra-social-vertical/barra-social-vertical.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/encabezado/navbar/navbar.component';
import { BannerComponent } from './componentes/encabezado/banner/banner.component';
import { AcercaDeComponent } from './componentes/encabezado/acerca-de/acerca-de.component';
import { LogoAPComponent } from './componentes/encabezado/navbar/logo-ap/logo-ap.component';
import { RedesComponent } from './componentes/encabezado/navbar/redes/redes.component';
import { ModalLoginComponent } from './componentes/encabezado/navbar/modal-login/modal-login.component';
import { ModalEdtBannerComponent } from './componentes/encabezado/banner/modal-edt-banner/modal-edt-banner.component';
import { FotoPerfilComponent } from './componentes/encabezado/acerca-de/foto-perfil/foto-perfil.component';
import { InfoProfesionalComponent } from './componentes/encabezado/acerca-de/info-profesional/info-profesional.component';
import { TitulosComponent } from './componentes/encabezado/acerca-de/info-profesional/titulos/titulos.component';
import { SobreMiComponent } from './componentes/encabezado/acerca-de/info-profesional/sobre-mi/sobre-mi.component';


@NgModule({
  declarations: [
    AppComponent,
    BotonIrArribaComponent,
    BarraSocialVerticalComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeComponent,
    LogoAPComponent,
    RedesComponent,
    ModalLoginComponent,
    ModalEdtBannerComponent,
    FotoPerfilComponent,
    InfoProfesionalComponent,
    TitulosComponent,
    SobreMiComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
