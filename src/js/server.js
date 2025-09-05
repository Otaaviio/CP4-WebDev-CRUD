let posts = [
  {
    nome: "Andressa Alves",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    gols: 15,
    assistencias: 10,
    jogos: 28,
    favorita: false,
  },
  {
    nome: "Dayana Rodríguez",
    posicao: "Meio-campo",
    clube: "Corinthians",
    foto: "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    gols: 5,
    assistencias: 12,
    jogos: 30,
    favorita: false,
  },
  {
    nome: "Mariza",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    gols: 2,
    assistencias: 1,
    jogos: 32,
    favorita: false,
  },
  {
    nome: "Thaís Regina",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://st5.depositphotos.com/12982378/72804/i/450/depositphotos_728044286-stock-photo-woman-white-jersey-holds-soccer.jpg",
    gols: 1,
    assistencias: 2,
    jogos: 25,
    favorita: false,
  },
  {
    nome: "Letícia Teles",
    posicao: "Zagueira",
    clube: "Corinthians",
    foto: "https://img.freepik.com/fotos-gratis/mulheres-posando-juntas-ao-ar-livre_23-2148634676.jpg?semt=ais_hybrid&w=740&q=80",
    gols: 0,
    assistencias: 0,
    jogos: 18,
    favorita: false,
  },
];

const playerForm = document.querySelector(".player-form");
const postList = document.querySelector("#postList");

const modal = document.getElementById("modal");
const editForm = document.getElementById("edit-form");
const closeBtn = document.querySelector(".close-btn");

window.onload = () => {
  loadPosts();
  showPost();

  playerForm.addEventListener("submit", addPost);
  postList.addEventListener("click", handleClick);

  editForm.addEventListener("submit", saveEditedPost);
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

const handleClick = (infosDoEvento) => {
  const action = infosDoEvento.target.dataset.action;
  const index = infosDoEvento.target.dataset.index;

  if (action === "Editar") updatePost(index);
  else if (action === "Deletar") deletePost(index);
};

function addPost(e) {
  e.preventDefault();

  const nomeJogadora = document.querySelector("#postNome").value;
  const posicaoJogadora = document.querySelector("#postPosicao").value;
  const clubeJogadora = document.querySelector("#postClube").value;
  const fotoJogadora = document.querySelector("#postFoto").value;
  const golsJogadora = document.querySelector("#postGols").value;
  const assistenciasJogadora =
    document.querySelector("#postAssistencias").value;
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
  savePosts();
  showPost();
  playerForm.reset();
}

function showPost() {
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
}

function deletePost(index) {
  const confirmar = confirm("Você deseja realmente excluir?");
  if (confirmar) {
    posts.splice(index, 1);
    savePosts();
    showPost();
  }
}

function updatePost(index) {
  const jogadora = posts[index];

  document.getElementById("jogadora-id").value = index;
  document.getElementById("edit-nome").value = jogadora.nome;
  document.getElementById("edit-posicao").value = jogadora.posicao;
  document.getElementById("edit-clube").value = jogadora.clube;
  document.getElementById("edit-foto").value = jogadora.foto;
  document.getElementById("edit-gols").value = jogadora.gols;
  document.getElementById("edit-assistencias").value = jogadora.assistencias;
  document.getElementById("edit-jogos").value = jogadora.jogos;

  modal.style.display = "flex";
}

function saveEditedPost(e) {
  e.preventDefault();

  const index = document.getElementById("jogadora-id").value;

  posts[index].nome = document.getElementById("edit-nome").value;
  posts[index].posicao = document.getElementById("edit-posicao").value;
  posts[index].clube = document.getElementById("edit-clube").value;
  posts[index].foto = document.getElementById("edit-foto").value;
  posts[index].gols = parseFloat(document.getElementById("edit-gols").value);
  posts[index].assistencias = parseFloat(
    document.getElementById("edit-assistencias").value
  );
  posts[index].jogos = parseFloat(document.getElementById("edit-jogos").value);

  savePosts();
  showPost();

  modal.style.display = "none";
}

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPosts() {
  const storedPosts = localStorage.getItem("posts");
  if (storedPosts) {
    posts = JSON.parse(storedPosts);
  }
}
