/**
 * todo: tipos de datos
 * ? string
 * ? number
 * ? null
 * ? undefined
 * ? any
 */
export class Base {

    // variables -> variable: tipo = valor;
    nombre: string = 'Jan Charris';
    edad: number = 24;
    cualquierCosa: any = "asdasd";

    // asignación de dos o más tipos a una variable
    // nombre: tipo1 | tipo2 = valor;
    estado: string | number = 656;

    // objetos -> nombre:tipo = {atributos};
    carro: any = {
        marca: "Mazda",
        modelo: 2022
    }

    // implementación de interfaces
    persona1: ModeloPersona = {
        nombre: "Santy",
        edad: 14,
        cualquierCosa: "Hola mundo" // este atributo es opcional
    }

    persona2: ModeloPersona = {
        nombre: "Andrés",
        edad: 11,
        cualquierCosa: "Hola mundo" // este atributo es opcional
    }

    // arrays -> nombre: Array<tipo> = [valores]
    personal: Array<ModeloPersona> = [
        this.persona1,
        this.persona2,
        {
            nombre: "ejemplo",
            edad: 12
        }
    ];
}

// interfaces -> interface nombre {atributos};
// atributo opcional -> atributo?: tipo
interface ModeloPersona {
    nombre: string;
    edad: number;
    cualquierCosa?: any; // este atributo es opcional y de cualquier tipo de dato
    cualquierCosa2?: any;
}