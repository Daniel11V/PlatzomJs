# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del idioma

- Si la palabra termina en "ar" se eliminan estos dos caracteres.
- Si la palabra inicia con z se le agrega al final "pe".
- Si tiene 10 o mas letras se le agrega "-" en la mitad de la palabra.
- Si la palabra original es capicua se escribe cada dos letras una mayuscula.

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'
platzom("Programar") //Program
platzom("Zorro")  //Zorrope
platzom("Zarpar") //Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos") //SoMeTeMoS
```

## Creditos
- [Daniel Vinet](https://github.com/Daniel11V)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
