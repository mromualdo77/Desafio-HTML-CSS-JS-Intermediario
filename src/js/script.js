const form = document.getElementById('form');
const campos = document.querySelectorAll('.informacaoDados');


form.addEventListener('input', event => {
    event.preventDefault();

    campos.forEach(informacaoDados => {
        if (informacaoDados.value === '') {
            informacaoDados.classList.add('erro');
            informacaoDados.nextElementSibling.classList.add("error");
        } else {
            informacaoDados.classList.remove('erro');
            informacaoDados.nextElementSibling.classList.remove("error");
            informacaoDados.classList.add('sucesso');
        }
    });
});