const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');
const form = document.querySelector('form');
const contatos = [];

let linhas = '';

inputNome.focus();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  adicionaContato();
  atualizaTabela();
  limpaCampos();
});

function adicionaContato() {
  const nomeContato = inputNome.value;
  const telefoneContato = inputTelefone.value;

  if (verificaContato(nomeContato)) {
    alert(`Contato ${nomeContato} já existe.`);
    return;
  }

  contatos.push(nomeContato);

  preparaLinhas(nomeContato, telefoneContato);
}

function verificaContato(nomeContato) {
  return contatos.includes(nomeContato);
}

function preparaLinhas(nomeContato, telefoneContato) {
  let linha = '<tr>';
  linha += `<td>${nomeContato}</td>`;
  linha += `<td>${telefoneContato}</td>`;
  linha += '<tr>';

  linhas += linha;
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');

  corpoTabela.innerHTML = linhas;
}

function limpaCampos() {
  inputNome.value = '';
  inputTelefone.value = '';
  inputNome.focus();
}
