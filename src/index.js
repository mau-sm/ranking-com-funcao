let heroi = "wolfgang amadeus"
let vitorias = 250
let derrotas = 100
let saldoVitorias = vitorias - derrotas

let rank = subtracao(vitorias, derrotas)
console.log(`O herói, ${heroi}, tem um saldo de ${saldoVitorias} vitórias e está no ranking ${rank}`)

function subtracao(valor1, valor2){
    let saldo = valor1 - valor2
    if (saldo <= 10){
    saldo = "ferro"
      return saldo
    }
        if (saldo >= 11 && saldo <= 20 ){
            saldo = "bronze"
            return saldo
        }
            if(saldo >= 21 && saldo <= 50){
                saldo = "prata"
                return saldo
            }
                if(saldo >= 51 && saldo <=80){
                    saldo = "ouro"
                    return saldo
                }
                    if(saldo >=81 && saldo <= 90){
                        saldo = "diamante"
                        return saldo
                    }
                        if(saldo >= 91 && saldo <= 100){
                            saldo = "lendário"
                            return saldo
                        }
                            if(saldo >= 101){
                                saldo = "imortal"
                                return saldo
                            }

}