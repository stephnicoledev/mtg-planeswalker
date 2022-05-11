let planeswalkers = {
  jace: {
    name: "Jace Beleren",
    description:
      "Jace Beleren is a human planeswalker and mind-mage from Vryn. He is the former Living Guildpact of Ravnica and a founding member of the Gatewatch.",
  },
  garruk: {
    name: "Garruk Wildspeaker",
    description:
      "Garruk, called the Wildspeaker, is a planeswalker with warrior-druid abilities and a special affinity with animals and beasts.",
  },
  kaya: {
    name: "Kaya, Ghost Assassin",
    description:
      "Kaya, a.k.a. the Ghost-Assassin, is a Planeswalker with a growing reputation as an accomplished ghost hunter. She is also the nominal guildmaster of the Orzhov Syndicate on Ravnica.",
  },
  sorin: {
    name: "Sorin Markov",
    description:
      "Sorin Markov is a vampire planeswalker and a master of sangromancy, a dark corner of black mana specialization.",
  },
  nicolbolas: {
    name: "Nicol Bolas",
    description:
      "Nicol Bolas is the youngest and most infamous of the seven Elder Dragons that survived the Elder Dragon War. He was also known as the Forever Serpent, the Horned One, as well as the Second Sun and God-Pharaoh of Amonkhet.",
  },
  chandra: {
    name: "Chandra Nalaar",
    description:
      "Chandra Nalaar is a human planeswalker from Kaladesh. She is a member of the Gatewatch.",
  },
  ajani: {
    name: "Ajani Goldmane",
    description:
      "Ajani Goldmane is a leonin planeswalker from Naya, Alara. He is part of the Gatewatch. Ajani is a large one-eyed albino cat warrior, torn between his leonin ferocity and his sense of justice.",
  },
  liliana: {
    name: "Liliana Vess",
    description:
      "Liliana Vess is a human planeswalker from Dominaria and is both a master necromancer and a healer.",
  },
  vraska: {
    name: "Vraska",
    description:
      "Vraska is a black and green-aligned gorgon planeswalker assassin from Ravnica. She was part of a mercenary organization known as 'the assassins of the Ochran.'",
  },
};

// JACE
document.querySelector("#jace").addEventListener("click", planeswalkerJace);

function planeswalkerJace() {
  document.querySelector("h1").innerText = planeswalkers.jace.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/jace-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.jace.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/jace-beleren";
}

// GARRUK
document.querySelector("#garruk").addEventListener("click", planeswalkerGarruk);

function planeswalkerGarruk() {
  document.querySelector("h1").innerText = planeswalkers.garruk.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/garruk-planeswalker.webp";

  document.querySelector("p").innerText = planeswalkers.garruk.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/garruk-wildspeaker";
}

// KAYA
document.querySelector("#kaya").addEventListener("click", planeswalkerKaya);

function planeswalkerKaya() {
  document.querySelector("h1").innerText = planeswalkers.kaya.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/kaya-planeswalker.webp";

  document.querySelector("p").innerText = planeswalkers.kaya.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/kaya-ghost-assassin";
}

// SORIN
document.querySelector("#sorin").addEventListener("click", planeswalkerSorin);

function planeswalkerSorin() {
  document.querySelector("h1").innerText = planeswalkers.sorin.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/sorin-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.sorin.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/sorin-markov";
}

// NICOL BOLAS
document
  .querySelector("#nicol-bolas")
  .addEventListener("click", planeswalkerNicolBolas);

function planeswalkerNicolBolas() {
  document.querySelector("h1").innerText = planeswalkers.nicolbolas.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/nicol-bolas-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.nicolbolas.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/nicol-bolas";
}

// CHANDRA
document
  .querySelector("#chandra")
  .addEventListener("click", planeswalkerChandra);

function planeswalkerChandra() {
  document.querySelector("h1").innerText = planeswalkers.chandra.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/chandra-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.chandra.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/chandra-nalaar";
}

// AJANI
document.querySelector("#ajani").addEventListener("click", planeswalkerAjani);

function planeswalkerAjani() {
  document.querySelector("h1").innerText = planeswalkers.ajani.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/ajani-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.ajani.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/ajani-goldmane";
}

// LILIANA
document
  .querySelector("#liliana")
  .addEventListener("click", planeswalkerLiliana);

function planeswalkerLiliana() {
  document.querySelector("h1").innerText = planeswalkers.liliana.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/liliana-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.liliana.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/liliana-vess";
}

// VRASKA
document.querySelector("#vraska").addEventListener("click", planeswalkerVraska);

function planeswalkerVraska() {
  document.querySelector("h1").innerText = planeswalkers.vraska.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/vraska-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.vraska.description;

  document.querySelector("button").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/vraska";
}
