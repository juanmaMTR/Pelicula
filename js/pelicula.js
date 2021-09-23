'use strict'

//console.log('Cargado JS');

class Pelicula{
  constructor(){
    //console.log('Se ha creado una película');
    //this es el objeto que ejecuta el código
    this.titulo='Tiroteo en Mississippi'
    this.pueblo=new Pueblo('TodoPolvo','muy polvoriento, en mitad del desierto de Arizona.')
    this.narrador=new Narrador()
    this.paco=new PersonajeBueno('Paco')
    this.maria=new PersonajeBueno('Maria')
    this.morgan=new PersonajeMalo('Morgan Ojo Morao\'')
    this.paco.arma= new Arma(10,7,'Paco')
    this.morgan.arma=new Arma(5,6,'Morgan Ojo Morao\'')
    this.maria.arma=new Arma(4,4,'Maria')




    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`)
    this.narrador.hablar(`Era una soleada mañana..`)
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un día espléndido.`)
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad es que sí.`)
    this.narrador.hablar(`Ambos se miraron un instante y siguieron su camino...`)
    this.narrador.hablar(`De repente, llega una persona nueva al pueblo llamada Morgan.`)
    this.morgan.hablar(`Vaya pueblo más... polvoriento.`)
    this.morgan.hablar(`¡Eh tú! ¡Pringáo! Dame tu caballo y la cartera.`)

    this.morgan.arma.cargar()
    this.morgan.arma.disparar()
    this.morgan.arma.matar()

    this.paco.arma.cargar()
    this.paco.arma.disparar()
    this.paco.arma.matar()

    this.maria.arma.cargar()
    this.maria.arma.disparar()
    this.maria.arma.matar()


  }
}
class Pueblo{
  constructor(nombre, descripcion){
    this.nombre=nombre
    this.descripcion=descripcion
  }
}

class Personaje{
  constructor(nombre){
    this.nombre=nombre
    this.arma=new Arma()
  }
  hablar(texto){
    //document.write(`<br />- ${this.nombre}: ${texto}`)
    document.write(`<p class=personaje><span>${this.nombre}:</span> ${texto}</p>`)
  }
}
class Narrador{
  hablar(texto){
    document.write(`<p>- ${texto}</p>`)
  }
}
class PersonajeBueno extends Personaje{
  hablar(texto){
    //document.write(`<br />- ${this.nombre}: ${texto}`)
    document.write(`<p class=bueno><span>${this.nombre}:</span> ${texto}</p>`)
  }
}
class PersonajeMalo extends Personaje{
  hablar(texto){
    //document.write(`<br />- ${this.nombre}: ${texto}`)
    document.write(`<p class=malo><span>${this.nombre}:</span>GRRRR... ${texto}</p>`)
  }
}
class Arma{
  constructor(balas, cargador,nombre){
    this.balas=balas
    this.cargador=cargador
    this.nombre=nombre
  }
  cargar(){
    if(this.balas>this.cargador){
      this.balas=7
    }
  }
  disparar(){
    if(this.balas>0){
      document.write(`<p>¡¡PUM!!</p>`)
    }else{
      document.write(`<p>¡¡CLICK!!</p>`)
    }
    this.balas--
  }
  matar(){
    let random=parseInt(Math.random()*2)

    if(random==0){
      document.write(`<p><span>${this.nombre}:</span>¡HE FALLADO!</p>`)
    }else{
      document.write(`<p><span>${this.nombre}:</span>¡TE HE MATADO!</p>`)

    }
  }
}



new Pelicula()
