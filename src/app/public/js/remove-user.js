let tabelaUsers = document.querySelector('#users');
tabelaUsers.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let userId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/users/${userId}`, { method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#user_${userId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});

