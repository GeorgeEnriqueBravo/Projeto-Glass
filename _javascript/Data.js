const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Quando você nasceu? [DD/MM/AAAA] ', function (dataDeNascimento) {
  const diaDigitadoPeloUsuario = dataDeNascimento.substring(0, 2);
  const mesDigitadoPeloUsuario = dataDeNascimento.substring(3, 5);
  const anoDigitadoPeloUsuario = dataDeNascimento.substring(6, 10);
  
  const dataDoMagro = new Date(anoDigitadoPeloUsuario, mesDigitadoPeloUsuario - 1, diaDigitadoPeloUsuario);
  const dataAtual = new Date();
  const mesAtual = dataAtual.getMonth();
  const anoDoAniversario = dataDoMagro.getMonth();
  const mesesParaOAniversario = mesAtual - anoDoAniversario;
  const diaAniversario = dataAtual.toString().substring(8, 10);
  console.log(`Voce nasceu em ${dataDoMagro.toLocaleDateString('pt-br')}`);
  console.log(`Sua idade é de ${dataAtual.getFullYear() - dataDoMagro.getUTCFullYear()} anos`);
  console.log(`Faltam ${mesesParaOAniversario} meses para o seu aniversário!`);
  if (mesesParaOAniversario === 0 && diaDigitadoPeloUsuario === diaAniversario) {
    console.log('Parabéns, você está fazendo aniversário!');
  }
  rl.close();
});

rl.on('close', () => process.exit(0));