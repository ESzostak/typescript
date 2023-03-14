type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Eduardo',
  sobrenome: 'Szostak',
  idade: 25,
};

console.log(pessoa);

//module mode
export { pessoa };
