
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

  it('Si la palabra termina en "ar" se eliminan estos dos caracteres', function () {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con z se le agrega al final "pe"', function () {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })
  it('Si tiene 10 o mas letras se le agrega "-" en la mitad de la palabra', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Si la palabra original es capicua se escribe cada dos letras una mayuscula', function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})
