function teste(){}
//função de forma literal



const fun2 = function(){ }
// armazenar em uma variável



const array = [function (a, b){ return a+b}, teste, fun2]
console.log(array[0](2,3))
//armazenar em um array



const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())


function run(fun){
    fun()
}

run(function(){console.log('Executando ....')})
//passar função como parametro

function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }

}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)



