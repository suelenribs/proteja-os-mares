
/*Vídeo de fundo do banner (Gemini)*/
var player;
function onYouTubeIframeAPIReady() {
player=new YT.Player('playerId',{
    playerVars: {
        autoplay: 1,
        loop: 1,
        controls: 0,
        showinfo: 0,
        autohide: 1,
        modestbranding: 1,
        vq: 'hd1080'
    },
    events:{
        onReady:onPlayerReady
    }
})
}
function onPlayerReady(event){
    player.mute();
    player.setVolume(0);
    player.playVideo();
}


setTimeout(() => {
    document.querySelector("#playerId").style.opacity = "1";
},3000);


/*Popup click cards*/
function pop(animal) {
    pop_img = document.querySelector(".pop-img");
    pop_h = document.querySelector(".pop-h");
    pop_p = document.querySelector(".pop-p");
    pop_a = document.querySelector(".pop-a");

    switch (animal) {
        case "an1":
            pop_img.src = "baleiaazul.jpg";
            pop_h.innerText = "Baleia Azul";
            pop_p.innerHTML = "<b>Poluição marinha:</b> Poluentes no oceano, como plásticos e produtos químicos, podem afetar a saúde das baleias.";
            break;

        case "an2":
            pop_img.src = "tubarao-branco.jpg";
            pop_h.innerText = "Tubarão Branco";
            pop_p.innerHTML = "A degradação dos ecossistemas marinhos, poluição e mudanças nos locais de alimentação afetam diretamente suas populações.<br>Esses fatores, combinados com o fato de que tubarões-brancos têm um ciclo reprodutivo lento, dificultam sua recuperação populacional.";
            break;

            
        case "an3":
            pop_img.src = "coral.jpg";
            pop_h.innerText = "Corais";
            pop_p.innerHTML = "Os corais estão entrando em extinção por causa de vários fatores relacionados à poluição, que afetam diretamente sua saúde e capacidade de sobreviver. Alguns dos principais motivos incluem:<br><b>Acidificação dos Oceanos:</b> A poluição por dióxido de carbono (CO₂) aumenta a acidez dos oceanos, dificultando a capacidade dos corais de formar seus esqueletos de carbonato de cálcio, essenciais para seu crescimento e sobrevivência.<br><b>Poluição por Plásticos:</b> Detritos plásticos podem sufocar os corais, bloqueando a luz solar e comprometendo o processo de fotossíntese das algas simbióticas, além de carregar bactérias que aumentam a incidência de doenças nos corais.<br><b>Poluentes Químicos:</b> Produtos químicos, como pesticidas e fertilizantes, que chegam aos oceanos via escoamento, alteram a composição da água e promovem o crescimento excessivo de algas, que competem com os corais por espaço e nutrientes.<br>Esses fatores, junto com a pesca destrutiva e a exploração costeira, estão colocando muitas espécies de corais em risco de extinção.";
            break;

            
        case "an4":
            pop_img.src = "cute-fish.jpg";
            pop_h.innerText = "Atum azul";
            pop_p.innerHTML = "<b>Mudanças Climáticas e Destruição de Habitat:</b> A mudança nas temperaturas dos oceanos afeta os padrões migratórios do atum azul, tornando-os mais vulneráveis à pesca. Além disso, a poluição dos oceanos e a degradação dos habitats marinhos contribuem para o declínio de suas populações.";
            break;
    }

    /*Animações de entrada*/
    document.querySelector(".pop-over").style.display = "flex";
    setTimeout(() => {
        document.querySelector(".pop-over").classList.remove("hid");
    },50)
    setTimeout(() => {
        document.querySelector(".pop-card").style.display = "flex";
    }, 500);
    setTimeout(() => {
        document.querySelector(".pop-card").classList.remove("hid");
    }, 550);

} 


/*Fecha o popup*/
function close() {
    console.log("aaaaaaaaaaaaa")
    document.querySelector(".pop-card").classList.add("hid");
    setTimeout(() => {
        document.querySelector(".pop-card").style.display = "none";
    },500);
    setTimeout(() => {
        document.querySelector(".pop-over").classList.add("hid");
    }, 550);
    setTimeout(() => {
        document.querySelector(".pop-over").style.display = "none";
    }, 1050);

}

/*Listeners do que fecha popup*/
document.querySelector(".close").addEventListener("mousedown", close);
document.querySelector(".pop-over").addEventListener("mousedown", close);



// Lista de materiais de pesquisa com links
const materiais = {
    "Relatório da ONU sobre poluição plástica alerta sobre falsas soluções e confirma necessidade de ação global urgente": "https://www.unep.org/pt-br/noticias-e-reportagens/comunicado-de-imprensa/relatorio-da-onu-sobre-poluicao-plastica-alerta-sobre",

    "A poluição química e suas consequências para a vida marinha": "https://jra.abaae.pt/plataforma/fotografia/a-poluicao-quimica-e-suas-consequencias-para-a-vida-marinha/",

    "Poluição dos oceanos: quais são as consequências para o planeta": "https://umsoplaneta.globo.com/biodiversidade/noticia/2021/06/19/poluicao-dos-oceanos-quais-sao-as-consequencias-para-o-planeta.ghtml",

    "Qual o tempo de decomposição dos resíduos no oceano?": "https://mamiferosaquaticos.org.br/blog/tempodedecomposicaodosresiduosnooceano",

    "Plástico nos oceanos, um problema que chega às profundezas do oceano": "https://www.iberdrola.com/sustentabilidade/poluicao-plastica-nos-oceanos",

    "ombate à poluição marinha por plásticos | Reduzir o uso de produtos plásticos descartáveis": "https://brasil.oceana.org/campanhas/combate-a-poluicao-marinha-por-plasticos/",

    "Poluição oceânica. Consequências da poluição oceânica - Brasil Escola": "https://brasilescola.uol.com.br/geografia/poluicao-oceanica.htm",

    "Esgoto no mar: impactos da falta de saneamento para os oceanos": "https://www.nivetec.com.br/esgoto-mar-poluicao-saneamento/",

    "Esgoto humano e seus impactos nos oceanos": "https://marsemfim.com.br/esgoto-humano-e-seus-impactos-nos-oceanos/",

    "Poluentes tóxicos são achados no lugar mais profundo dos oceanos": "https://exame.com/ciencia/poluentes-toxicos-sao-achados-no-lugar-mais-profundo-dos-oceanos/"
};


// Função para pesquisar exibindo sugestões em tempo real (Gemini)

// Função para abrir o link
function pesquisar() {
    const input = document.getElementById('scholl-data').value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    const suggestionsBox = document.getElementById('suggestions');

    // Limpa as sugestões anteriores
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'none';

    // Filtra os materiais que correspondem à pesquisa
    const resultados = Object.keys(materiais).filter(material => material.toLowerCase().includes(input));

    if (resultados.length > 0) {
        // Exibe os resultados encontrados em novas abas
        resultados.forEach(item => {
            const link = document.createElement('a');
            link.href = materiais[item];
            window.open(link, '_blank');
        });
    }
}

// Função para exibir sugestões em tempo real (Gemini)
function showSuggestions() {
    const input = document.getElementById('scholl-data').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
  
    // Limpa as sugestões anteriores
    suggestionsBox.innerHTML = '';
    suggestionsBox.style.display = 'none';
  
    if (input.length > 0) {
      // Filtra os materiais que correspondem ao que foi digitado
      const suggestions = Object.keys(materiais).filter(material => material.toLowerCase().includes(input));
  
      if (suggestions.length > 0) {
        suggestionsBox.style.display = 'block';
        // Exibe as sugestões
        suggestions.forEach(item => {
          p = document.createElement('p');
          p.textContent = item;
          p.onclick = () => {
            document.getElementById('scholl-data').value = "";
            pesquisar(); // Pesquisa automaticamente ao clicar na sugestão
          };
          suggestionsBox.appendChild(p);
        });
      }
    }
  }