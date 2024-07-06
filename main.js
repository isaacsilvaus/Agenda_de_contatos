document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();

        const cellNome = novaLinha.insertCell(0);
        const cellTelefone = novaLinha.insertCell(1);

        cellNome.textContent = nome;
        cellTelefone.textContent = telefone;

        document.getElementById('form').reset();
    }
});
