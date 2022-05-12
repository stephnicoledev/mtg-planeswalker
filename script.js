let planeswalkers = {
  jace: {
    name: "Jace Beleren",
    description:
      "Jace Beleren is a human planeswalker and mind-mage from Vryn. He is the former Living Guildpact of Ravnica and a founding member of the Gatewatch.",
    avatar: "./assets/jace-planeswalker.png",
    background: "https://magic.wizards.com/en/story/planeswalkers/jace-beleren",
    mana: "./assets/mana-island.png",
  },
  garruk: {
    name: "Garruk Wildspeaker",
    description:
      "Garruk, called the Wildspeaker, is a planeswalker with warrior-druid abilities and a special affinity with animals and beasts.",
    avatar: "./assets/garruk-planeswalker.webp",
    background:
      "https://magic.wizards.com/en/story/planeswalkers/garruk-wildspeaker",
    mana: "./assets/mana-forest.png",
  },
  kaya: {
    name: "Kaya, Ghost Assassin",
    description:
      "Kaya, a.k.a. the Ghost-Assassin, is a Planeswalker with a growing reputation as an accomplished ghost hunter. She is also the nominal guildmaster of the Orzhov Syndicate on Ravnica.",
    avatar: "./assets/kaya-planeswalker.png",
    background:
      "https://magic.wizards.com/en/story/planeswalkers/kaya-ghost-assassin",
  },
  sorin: {
    name: "Sorin Markov",
    description:
      "Sorin Markov is a vampire planeswalker and a master of sangromancy, a dark corner of black mana specialization.",
    avatar: "./assets/sorin-planeswalker.png",
    background: "https://magic.wizards.com/en/story/planeswalkers/sorin-markov",
  },
  nicolbolas: {
    name: "Nicol Bolas",
    description:
      "Nicol Bolas is the youngest and most infamous of the seven Elder Dragons that survived the Elder Dragon War. He was also known as the Forever Serpent, the Horned One, as well as the Second Sun and God-Pharaoh of Amonkhet.",
    avatar: "./assets/nicol-bolas-planeswalker.png",
    background: "https://magic.wizards.com/en/story/planeswalkers/nicol-bolas",
  },
  chandra: {
    name: "Chandra Nalaar",
    description:
      "Chandra Nalaar is a human planeswalker from Kaladesh. She is a member of the Gatewatch.",
    avatar: "./assets/chandra-planeswalker.png",
    background:
      "https://magic.wizards.com/en/story/planeswalkers/chandra-nalaar",
    mana: "./assets/mana-mountain.png",
  },
  ajani: {
    name: "Ajani Goldmane",
    description:
      "Ajani Goldmane is a leonin planeswalker from Naya, Alara. He is a large one-eyed albino cat warrior, torn between his leonin ferocity and his sense of justice.",
    avatar: "./assets/ajani-planeswalker.png",
    background:
      "https://magic.wizards.com/en/story/planeswalkers/ajani-goldmane",
    mana: "./assets/mana-plains.png",
  },
  liliana: {
    name: "Liliana Vess",
    description:
      "Liliana Vess is a human planeswalker from Dominaria and is both a master necromancer and a healer.",
    avatar: "./assets/liliana-planeswalker.png",
    background: "https://magic.wizards.com/en/story/planeswalkers/liliana-vess",
    mana: "./assets/mana-swamp.png",
  },
  vraska: {
    name: "Vraska",
    description:
      "Vraska is a black and green-aligned gorgon planeswalker assassin from Ravnica. She was part of a mercenary organization known as 'the assassins of the Ochran.'",
    avatar: "./assets/vraska-planeswalker.png",
    background: "https://magic.wizards.com/en/story/planeswalkers/vraska",
  },
};

//////// JACE ////////
document.querySelector("#jace").addEventListener("click", planeswalkerJace);

function planeswalkerJace() {
  document.querySelector("h1").innerText = planeswalkers.jace.name;
  document.querySelector(".avatar").src = planeswalkers.jace.avatar;
  document.querySelector(".mana").src = planeswalkers.jace.mana;
  document.querySelector("p").innerText = planeswalkers.jace.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.jace.background;
}

//////// GARRUK ////////
document.querySelector("#garruk").addEventListener("click", planeswalkerGarruk);

function planeswalkerGarruk() {
  document.querySelector("h1").innerText = planeswalkers.garruk.name;
  document.querySelector(".avatar").src = planeswalkers.garruk.avatar;
  document.querySelector("p").innerText = planeswalkers.garruk.description;
  document.querySelector(".mana").src = planeswalkers.garruk.mana;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.garruk.background;
}

//////// KAYA ////////
document.querySelector("#kaya").addEventListener("click", planeswalkerKaya);

function planeswalkerKaya() {
  document.querySelector("h1").innerText = planeswalkers.kaya.name;
  document.querySelector(".planeswalker-info img").src =
    planeswalkers.kaya.avatar;
  document.querySelector("p").innerText = planeswalkers.kaya.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.kaya.background;
}

//////// SORIN ////////
document.querySelector("#sorin").addEventListener("click", planeswalkerSorin);

function planeswalkerSorin() {
  document.querySelector("h1").innerText = planeswalkers.sorin.name;
  document.querySelector(".planeswalker-info img").src =
    planeswalkers.sorin.avatar;
  document.querySelector("p").innerText = planeswalkers.sorin.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.sorin.background;
}

//////// NICOL BOLAS ////////
document
  .querySelector("#nicol-bolas")
  .addEventListener("click", planeswalkerNicolBolas);

function planeswalkerNicolBolas() {
  document.querySelector("h1").innerText = planeswalkers.nicolbolas.name;
  document.querySelector(".planeswalker-info img").src =
    planeswalkers.nicolbolas.avatar;
  document.querySelector("p").innerText = planeswalkers.nicolbolas.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.nicolbolas.background;
}

//////// CHANDRA ////////
document
  .querySelector("#chandra")
  .addEventListener("click", planeswalkerChandra);

function planeswalkerChandra() {
  document.querySelector("h1").innerText = planeswalkers.chandra.name;
  document.querySelector(".avatar").src = planeswalkers.chandra.avatar;
  document.querySelector(".mana").src = planeswalkers.chandra.mana;
  document.querySelector("p").innerText = planeswalkers.chandra.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.chandra.background;
}

//////// AJANI ////////
document.querySelector("#ajani").addEventListener("click", planeswalkerAjani);

function planeswalkerAjani() {
  document.querySelector("h1").innerText = planeswalkers.ajani.name;
  document.querySelector(".avatar").src = planeswalkers.ajani.avatar;
  document.querySelector(".mana").src = planeswalkers.ajani.mana;
  document.querySelector("p").innerText = planeswalkers.ajani.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.ajani.background;
}

//////// LILIANA ////////
document
  .querySelector("#liliana")
  .addEventListener("click", planeswalkerLiliana);

function planeswalkerLiliana() {
  document.querySelector("h1").innerText = planeswalkers.liliana.name;
  document.querySelector(".avatar").src = planeswalkers.liliana.avatar;
  document.querySelector(".mana").src = planeswalkers.liliana.mana;
  document.querySelector("p").innerText = planeswalkers.liliana.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.liliana.background;
}

//////// VRASKA ////////
document.querySelector("#vraska").addEventListener("click", planeswalkerVraska);

function planeswalkerVraska() {
  document.querySelector("h1").innerText = planeswalkers.vraska.name;
  document.querySelector(".planeswalker-info img").src =
    planeswalkers.vraska.avatar;
  document.querySelector("p").innerText = planeswalkers.vraska.description;
  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href = planeswalkers.vraska.background;
}
