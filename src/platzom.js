// Lo que van a tener que escribir para acceder a la funcion
//import platzom from 'platzom'

export default function platzom(str){
  let translation = str

  //si la palabra termina en "ar"
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2)
  }

  //si la palabra inicia con z
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe"
  }

  //si tiene 10 o mas letras
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }
  //Separa por cada ,
  //const reverse = str => str.split(",")
  

  const reverse = str => str.split("").reverse().join("").toLowerCase()

  function minMay(str) {
    const length = str.length
    let translation = ""
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }

    return translation
  }

  //si la palabra original es capicua
  if (str.toLowerCase() == reverse(str)) {
    return minMay(str)
  }

  return translation
}
