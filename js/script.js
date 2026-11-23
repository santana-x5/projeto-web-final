document.getElementById('whatsappform').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

 const texto = 'Olá! Meu nome é ' + nome + ' (' + email + '). Mensagem: ' + mensagem;

  window.open(`https://wa.me/5581999693443?text=${encodeURIComponent(texto)}`, '_blank');
});