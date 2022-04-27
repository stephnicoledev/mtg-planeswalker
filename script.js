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
  nicolbolas: {
    name: "Nicol Bolas",
    description:
      "Nicol Bolas is the youngest and most infamous of the seven Elder Dragons that survived the Elder Dragon War. He was also known as the Forever Serpent, the Horned One, as well as the Second Sun and God-Pharaoh of Amonkhet.",
  },
};

// JACE
document.querySelector("#jace").addEventListener("click", planeswalkerJace);

function planeswalkerJace() {
  document.querySelector("h1").innerText = planeswalkers.jace.name;

  const image = document.querySelector(".child-2 img");
  image.src = "./images/jace-planeswalker.png";

  document.querySelector("p").innerText = planeswalkers.jace.description;

  document.querySelector("a").style.visibility = "visible";
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

  document.querySelector("a").style.visibility = "visible";
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

  document.querySelector("a").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/kaya-ghost-assassin";
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

  document.querySelector("a").style.visibility = "visible";
  document.querySelector("a").href =
    "https://magic.wizards.com/en/story/planeswalkers/nicol-bolas";
}
