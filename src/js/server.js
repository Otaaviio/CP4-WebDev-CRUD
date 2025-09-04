let posts = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/andressa.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://example.com/dayana.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/mariza.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/thais.jpg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://example.com/leticia.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
];

window.onload = () => {
    showPost();
};


function addPost(e){
    e.preventDefault();

    const nomeJogadora = document.querySelector("#postNome").value;
    const posicaoJogadora = document.querySelector("#postPosicao").value;
    const clubeJogadora = document.querySelector("#postClube").value;
    const fotoJogadora = document.querySelector("#postFoto").value;
    const golsJogadora = document.querySelector("#postGols").value;
    const assistenciasJogadora = document.querySelector("#postAssistencias").value;
    const jogosJogadora = document.querySelector("#postJogos").value;

    const novoPost = {
        nome: nomeJogadora,
        posicao: posicaoJogadora,
        clube: clubeJogadora,
        foto: fotoJogadora,
        gols: golsJogadora,
        assistencias: assistenciasJogadora,
        jogos: jogosJogadora,
    };

    posts.unshift(novoPost);
};

function showPost(){
    const postArea = document.querySelector("#postArea");
    postArea.innerHTML = "";

    posts.forEach((pegaItem, i) => {
        const cardPost = document.createElement("div");

        cardPost.classList.add("card");

        cardPost.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${pegaItem.foto}" class="img-fluid rounded-start" alt="${pegaItem.nome}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${pegaItem.nome}</h5>
                    <p class="card-text">Posição: ${pegaItem.posicao}</p>
                    <p class="card-text">Clube: ${pegaItem.clube}</p>
                    <p class="card-text">Gols: ${pegaItem.gols}</p>
                    <p class="card-text">Assistências: ${pegaItem.assistencias}</p>
                    <p class="card-text">Jogos: ${pegaItem.jogos}</p>
                </div>
            </div>
        </div>
        `;

        postArea.appendChild(cardPost);
    });
};
