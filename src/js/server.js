let posts = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://img.freepik.com/fotos-gratis/mulheres-posando-juntas-ao-ar-livre_23-2148634676.jpg?semt=ais_hybrid&w=740&q=80",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
];

const playerForm = document.querySelector(".player-form");
const postList = document.querySelector("#postList");

window.onload = () => {
    showPost();
    playerForm.addEventListener("submit", addPost);

    postList.addEventListener('click', handleClick);
};

const handleClick = (infosDoEvento) => {
    const action = infosDoEvento.target.dataset.action;
    const index = infosDoEvento.target.dataset.index;
    
    if (action === "Editar") updatePost(index);
    else if (action === "Deletar") deletePost(index);
}

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
        gols: parseFloat(golsJogadora),
        assistencias: parseFloat(assistenciasJogadora),
        jogos: parseFloat(jogosJogadora),
    };

    posts.unshift(novoPost);
    showPost();
    playerForm.reset();
};

function showPost(){
    const postArea = document.querySelector("#postList");
    postArea.innerHTML = "";

     posts.forEach((item, i) => {
        const cardPost = document.createElement("div");
        cardPost.classList.add("player-card");

        cardPost.innerHTML = `
         <div class="card-image">
                <img src="${item.foto}" alt="Foto de ${item.nome}">
            </div>
            <div class="card-content">
                <h3>${item.nome}</h3>
                <p><strong>Posição:</strong> ${item.posicao}</p>
                <p><strong>Clube:</strong> ${item.clube}</p>
                <p><strong>Gols:</strong> ${item.gols}</p>
                <p><strong>Assistências:</strong> ${item.assistencias}</p>
                <p><strong>Jogos:</strong> ${item.jogos}</p>
                <button data-action="Editar" data-index="${i}">Editar</button>
                <button data-action="Deletar" data-index="${i}">Deletar</button>
            </div>
        `;

        postArea.appendChild(cardPost);
    });
};

function deletePost(index){
    const confirmar = confirm("Voce deseja realmente excluir")
    if (confirmar) posts.splice(index, 1);
    showPost();
};
