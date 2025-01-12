// Código para as imagens (corrigido para melhor legibilidade e eficiência)
const fotos = document.querySelector('.fotos');
const imagens = fotos.querySelectorAll('img');
let indiceAtual = 0;

function mostrarImagem(novoIndice) {
  if (novoIndice === undefined) {
    novoIndice = (indiceAtual + 1) % imagens.length;
  }
  imagens.forEach(imagem => imagem.style.display = 'none'); // Mais eficiente
  imagens[novoIndice].style.display = 'block';
  indiceAtual = novoIndice;
}

imagens.forEach((imagem, index) => {
  imagem.addEventListener('click', () => mostrarImagem(index));
});

setInterval(() => mostrarImagem(), 3000); // Melhor prática: usar arrow function aqui

mostrarImagem();


// Código para a animação de texto
const teamo = document.getElementById('texto');
if (texto) { // Verifica se o elemento existe
    const textoOriginal = texto.textContent;
    texto.textContent = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        const span = document.createElement('span');
        span.textContent = textoOriginal[i];
        texto.appendChild(span);
    }
} else {
    console.error("Elemento com ID 'texto' não encontrado.");
}
