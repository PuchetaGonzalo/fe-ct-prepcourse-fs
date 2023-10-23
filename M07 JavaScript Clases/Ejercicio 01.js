/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   class Usuario {
     constructor(usuario, nombre, email, password) {
       this.usuario = usuario;
       this.nombre = nombre;
       this.email = email;
       this.password = password;
     }
 
     saludar() {
       return `Hola, mi nombre es ${this.nombre}`;
     }
   }
 
   return Usuario; // Retorna la clase directamente
 }
 

function agregarMetodoPrototype (Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function() {
   return "Hello World!"
   }


Usuario.prototype.saludar = function() {
   return "Hello World!";
   }
};

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".

   String.prototype.reverse = function() {
      return this.split('').reverse().join('');
   };
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
