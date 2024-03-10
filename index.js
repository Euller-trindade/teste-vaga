/////////// Questão 01 //////////
let indice = 13;
let soma = 0;
let K = 0;

while (K < indice) {
  K = K + 1;
  soma = soma + K;
}

console.log(soma);
/////////// Questão 02 //////////

function verificaFibonacci(numero) {
  let n1 = 0;
  let n2 = 1;

  while (n2 <= numero) {
    if (n2 === numero) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
      return;
    }
    let somaNum = n1 + n2;
    n1 = n2;
    n2 = somaNum;
  }

  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

verificaFibonacci(12);

/////////// Questão 03 //////////

// A- adiciona 2 ao numero anterior. Por tanto o resultado é: 9.
// B- multiplica o número anterior por 2. Por tanto o resultado é: 128.
// C- os quadrados dos números naturais começando em 0. Por tanto o resultado é: 49.
// D- sequência dos quadrados dos números pares (2, 4, 6, 8, ...). Por tanto o resultado é: 100.
// E- é a soma dos dois números anteriores.Por tanto o resultado é: 13.

/////////// Questão 04 //////////

//Ligaria um interruptor e iria ver qual luz acendeu, voltaria e ligaria outro interruptor e veria novamente qual luz acendeu. O interruptor que restou seria referente à luz que não ligou.

/////////// Questão 05 //////////

function inverterString(str) {
  let invertedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
  }
  return invertedStr;
}
console.log(inverterString("euller trindade"));
