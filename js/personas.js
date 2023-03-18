class Familiar {

  constructor(id, nivel, tipo, status, nombres, apellidos, sexo, nace, muere, detalle, url) {
    this.id = id;
    this.nivel = nivel;
    this.tipo = tipo;
    this.status = status;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.nace = nace;
    this.muere = muere;
    this.detalle = detalle;
    this.url = url;    
  }

  raiz() {
    let raiz2 = this.id.toString();
    raiz2 = raiz2.slice(0,3);
    raiz2 = raiz2 + "d";
    return raiz2;
  }

  abreDetalle() {
    let mostrar="";
    if (this.nivel==2 && this.tipo=="f") {  
      mostrar=`<details id="${this.id}d"><summary>&nbsp;</sumary></details>`;

      mostrar = `
      <div id="${this.id}d" class="detalle" style="display: block;" >
      </div>
      `;

    }

    return mostrar;
  } 

  tFoto() {
    let claseFoto='';
    if (this.tipo=="f") {
      claseFoto=`f${this.nivel}`
    } else if (this.tipo=="p") {
      claseFoto=`fp${this.nivel}`
    }
    
    return claseFoto;
  }

  tFila() {
    let claseFila='';
    if (this.tipo=="f") {
      if (this.nivel==2) {
        claseFila='fam2';
      } else {
        claseFila='family';
      }
    } else  {
        claseFila='pareja';
    }
    return claseFila;
  }

  iconStatus() {
    let icono = " ";
    if (this.tipo=='f') {
      icono ="&nbsp;";
    } else {
      switch (this.status) {
        case "c": icono = "&#128149;"; break;
        case "d": icono = "&#128148;"; break;
        case "v": icono = "&#128420;"; break;
        case "r": icono = "&hearts;"; break;
        case "s": icono = "&#9825;"; break;
        default: icono ="&nbsp;"; break;
      } 
    }
  
    return icono;
  }

  tNivel() {
    let tituloNivel="";
    let sufijo =((this.sexo =='f') ? "a" : "o")

    switch (this.nivel) {
      case 2: tituloNivel = "hij" + sufijo ; break;
      case 3: tituloNivel = "niet" + sufijo; break;
      case 4: tituloNivel = "bisniet" + sufijo; break;
      case 5: tituloNivel = "tataraniet" + sufijo; break;
      default: tituloNivel = "descendiente directo"; break;
    }
 
    if (this.tipo!='f') {
      tituloNivel = ((this.status =='d' || this.status =='s') ? 'ex-pareja ' : 'pareja ');
    }
    return tituloNivel;
  }

  cruz() {
    let iconCruz = "";
    
    if (this.muere === 'v' || this.muere =='') {
      iconCruz='';
    } else if (this.muere === 'm' ) {
      iconCruz=" &#9840; ";
    } else {
      iconCruz = " &#9840; " + "fallece: " + this.muere
    }

    return iconCruz;
  }

  vida() {
    let fechas ='';
    if (this.nace!='') {
      fechas  += "cumple: " + this.nace;
    }
    if (this.cruz()!='') {
      fechas += this.cruz();
    }
    return fechas;
  }

  enlaceImagen() {
    let imagenMostrar="";
    let n = (this.nivel==1)?'1':'';
    if (this.url == '-' || this.url[0] == "+") {
      imagenMostrar = `<img class="foto${n} ${this.tFoto()}" title="${this.nombres} (${this.id})" src="./img/${this.id}.png"/>`
    } else {
      imagenMostrar = `
      <a target="_blank" href="${this.url}">
        <img class="foto${n} ${this.tFoto()}" title="${this.id} ${this.nombres}" src="./img/${this.id}.png"/>
      </a>
      `
    }
    return imagenMostrar;
  }

  toString() {
    let gridPersona = "";
    let n = this.nivel;
    
      gridPersona += `
          <div id="${this.id}" class="nivel${n}">
          <div class="imagen">${this.enlaceImagen()}</div>
          <div class="status"></div>
          <div class="${this.tFila()}" title="${this.tNivel()}">
            ${this.nombres} ${this.apellidos} ${this.iconStatus()}
          </div>
          <div class="vacio">&nbsp;</div>
          <div class="dates">${this.vida()}</div>
      `
      if (this.nivel==2 && this.tipo=="f" && this.detalle) {  
        gridPersona += `
          <details class="detalles" id="${this.raiz()}">
            <summary>&nbsp;</summary>
          </details> 
        `
      } 
      gridPersona += '</div>';

    
    return gridPersona;
  }

  encabezado1() {
    let gridPersona = "";
    let n = this.nivel;
    gridPersona += `  
      <div id="${this.id}" class="nivel${n}">
        <div class="imagen1">${this.enlaceImagen()}</div>
        <div id="fam1" class="fam1">
          ${this.nombres}<br>
          <a title="Chirivella Varela" href="index.html">&#9664;</a> 
          ${this.apellidos}
        </div>
        <div id="date1" class="date1">${this.vida()}</div>
      </div>
    `
    return gridPersona;
  }

  pareja(){
    let gridPersona = "";
    let n = this.nivel;
    gridPersona += ` 
      <div class="imagen1a">${this.enlaceImagen()}</div>
      <div id="fam1a" class="fam1a">${this.nombres}<br>${this.apellidos}</div>
      <div id="date1a" class="date1a">${this.vida()}</div>
    `
    return gridPersona;
  }
}

