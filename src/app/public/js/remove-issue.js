let tabelaIssues = document.querySelector('#issues');
tabelaIssues.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let issueId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/issues/${issueId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#issue_${issueId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});

