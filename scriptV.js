let opcoesTeclas = ['#num1', '#num2', '#num3', '#num4', '#num5', '#num6', '#num7', '#num8', '#num9', '#num0'];

function preencher(tecla) {
    if (document.getElementById("voto1").value.length == 0) {
        document.getElementById("voto1").value = tecla.value;
    }
    else if (document.getElementById("voto2").value.length == 0) {
        document.getElementById("voto2").value = tecla.value;
    }
    else if (document.getElementById("voto3").value.length == 0) {
        document.getElementById("voto3").value = tecla.value;
    }
    else if (document.getElementById("voto4").value.length == 0) {
        document.getElementById("voto4").value = tecla.value;
    }
    else if (document.getElementById("voto5").value.length == 0) {
        document.getElementById("voto5").value = tecla.value;

        const nomeVereador = document.getElementById("nomeVereador");
        nomeVereador.innerHTML += "<i>SuperBrasil</i>";

        const nomePartido = document.getElementById("nomePartido");
        nomePartido.innerHTML += "<i>SB</i>";

        document.getElementById("imagemCandidato").src ="./imagens/S.jpg";
    }
}

opcoesTeclas.forEach((item) => {
    let tecla = document.querySelector(item);
    tecla.addEventListener('click', () => preencher(tecla));
})

function corrigir () {
    document.getElementById("voto1").value = '';
    document.getElementById("voto2").value = '';
    document.getElementById("voto3").value = '';
    document.getElementById("voto4").value = '';
    document.getElementById("voto5").value = '';

    const nomeVereador = document.getElementById("nomeVereador");
    nomeVereador.innerHTML = "";
    nomeVereador.innerHTML += "Nome: ";

    const nomePartido = document.getElementById("nomePartido");
    nomePartido.innerHTML = "";
    nomePartido.innerHTML += "Partido: ";

    document.getElementById("imagemCandidato").src ="./imagens/imagemPerfil.jpg";
}

let corrige = document.querySelector('#corrigir');
corrige.addEventListener('click', corrigir);

function emBranco () {
    alert("Tem certeza que deseja votar em branco?")

    const nomeVereador = document.getElementById("nomeVereador");
    nomeVereador.innerHTML = "";

    const nomePartido = document.getElementById("nomePartido");
    nomePartido.innerHTML = "";
    nomePartido.innerHTML += "<h1><i><strong>VOTO EM BRANCO</strong></i></h1>";

    document.getElementById("voto1").value = 00;
    document.getElementById("voto2").value = 00;
    document.getElementById("voto3").value = 00;
    document.getElementById("voto4").value = 00;
    document.getElementById("voto5").value = 00;

}

