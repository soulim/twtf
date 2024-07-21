// import level from "./data/level-0.json";

const level = {
  "title": "TODO: Add title",
  "description": "TODO: Add description",
  "cards": [
    {
      "id": "card-1",
      "title": "Fetzenfisch",
      "description": "Zu welcher Familie zählen die Fetzenfische und die Seepferdchen?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/fetzenfisch.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Leafy_Seadragon_Phycodurus_eques_2500px_PLW_edit.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Seenadeln"
        },
        {
          "id": "B",
          "title": "Seedrachen"
        },
        {
          "id": "C",
          "title": "Stockfische"
        }
      ],
      "answer": "A"
    },
    {
      "id": "card-2",
      "title": "Küstenseeschwalbe",
      "description": "Wo brütet seine Eier die Küstenseeschwalbe?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/kuestenseenschwalbe.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:An_arctic_tern_(Sterna_paradisaea)_begrudges_the_other_its_prey.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "In der Arktis"
        },
        {
          "id": "B",
          "title": "In der Antarktis"
        },
        {
          "id": "C",
          "title": "In Afrika"
        }
      ],
      "answer": "A"
    },
    {
      "id": "card-3",
      "title": "Rosaflamingo",
      "description": "Was fressen Rosaflamingos am liebsten?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/rosaflamingo.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Rosaflamingo_(Phoenicopterus_roseus)_Zoo_Salzburg_2014_c.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Algen"
        },
        {
          "id": "B",
          "title": "Insekten und Krebsen"
        },
        {
          "id": "C",
          "title": "Fische"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-4",
      "title": "Haubentaucher",
      "description": "Wofür ist der Haubentaucher bekannt?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/haubentaucher.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Great_Crested_Grebe_(Podiceps_cristatus)_(14).JPG"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Seine Balzrituale"
        },
        {
          "id": "B",
          "title": "Sein Prachtkleid"
        },
        {
          "id": "C",
          "title": "Sein großer Appetit"
        }
      ],
      "answer": "A"
    },
    {
      "id": "card-5",
      "title": "Fetzenfisch",
      "description": "Wie zeigt das Fetzenfisch-Männchen, das es zum Ausbrüten der Eier bereit ist?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/fetzenfisch.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Leafy_Seadragon_Phycodurus_eques_2500px_PLW_edit.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Es tanzt einen Tanz"
        },
        {
          "id": "B",
          "title": "Es färbt sich sein Schwanz gelb"
        },
        {
          "id": "C",
          "title": "Es verfolgt das Fetzenfish-Weibchen"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-6",
      "title": "Prachtfregattvogel",
      "description": "Wann bläst ein Prachtfregattvogel-Männchen seinen roten Kehlsack auf?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/prachtfregattvogel.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Fregata_magnificens_-Galapagos,_Ecuador_-male-8.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Bei der Jagd"
        },
        {
          "id": "B",
          "title": "Zur Verteidigung"
        },
        {
          "id": "C",
          "title": "Während der Balz"
        }
      ],
      "answer": "C"
    },
    {
      "id": "card-7",
      "title": "Blattschwanzgecko",
      "description": "Wo findet man Blattschwanzgeckos?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/blattschwanzgecko.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Mossy_leaf-tailed_gecko_(Uroplatus_sikorae),_Vohimana_reserve,_Madagascar.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Australien"
        },
        {
          "id": "B",
          "title": "Madagaskar"
        },
        {
          "id": "C",
          "title": "Südamerika"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-8",
      "title": "Diamantschildkröte",
      "description": "Wieso heißt die Diamantschildkröte \"Diamantschildkröte\"?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/diamantschildkroete.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Diamond_terrapin_turtle_reptile_malaclemys_terrapin.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Weil sie Diamanten auf der Haut hat"
        },
        {
          "id": "B",
          "title": "Weil sie ein Diamanten-Muster auf ihrer Haut hat"
        }],
      "answer": "B"
    },
    {
      "id": "card-9",
      "title": "Faultier",
      "description": "Warum hat das Faultier so lange Kralen?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/faultier.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Bradypus_variegatus_Costa_Rica_01.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Weil es sich dann besser an den Bäumen festkrallen kann"
        },
        {
          "id": "B",
          "title": "Weil es sich dann besser verteidigen kann"
        },
        {
          "id": "C",
          "title": "Weil es dann zeigen kann, dass es in Ruhe gelassen sein will"
        }
      ],
      "answer": "A"
    },
    {
      "id": "card-10",
      "title": "Faultier",
      "description": "Warum ist das Faultier so langsam?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/faultier.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Bradypus_variegatus_Costa_Rica_01.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Weil es faul ist"
        },
        {
          "id": "B",
          "title": "Weil es nicht schnell sein will"
        },
        {
          "id": "C",
          "title": "Weil das Futter nicht viel Energie liefert"
        }
      ],
      "answer": "C"
    },
    {
      "id": "card-11",
      "title": "Känguru",
      "description": "Haben auch die männlichen Kängurus einen Beutel?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/kaenguru-02.jpg?as=webp&width=600", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:These_kangaroo_family_is_grazing_a_field_nearby_our_golf_club.jpg"
      },
      "audio": {
        "url": new URL("../data/audio/blatschwanzgecko.mp3", import.meta.url)
      },
      "options": [
        {
          "id": "A",
          "title": "Ja"
        },
        {
          "id": "B",
          "title": "Nein"
        },
        {
          "id": "C",
          "title": "Die Forscher wissen es noch nicht"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-12",
      "title": "Chamäleon",
      "description": "Kann ein Chamäleon sich auf jedem Untergrund tarnen?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/chamaeleon.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Chamaeleo_chamaeleon_chamaeleon_195375941.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Ja"
        },
        {
          "id": "B",
          "title": "Nein"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-13",
      "title": "",
      "description": "Welcher Vogel unternimmt die länste Wanderung?",
      "image": {
        "cloaked": true,
        "url": new URL("../data/images/kuestenseenschwalbe.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:An_arctic_tern_(Sterna_paradisaea)_begrudges_the_other_its_prey.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Rosaflamingo"
        },
        {
          "id": "B",
          "title": "Küstenseenschwalbe"
        },
        {
          "id": "C",
          "title": "Weißstorch"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-14",
      "title": "Plumplori",
      "description": "Wie schützen Plumplori-Mütter seine Jungen?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/plumplori.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Nycticebus_coucang_84653116.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Sie lecken die Jungen mit giftigen Spucke ab."
        },
        {
          "id": "B",
          "title": "Sie machen große Augen, um Fressfeinde zu erschrecken."
        },
        {
          "id": "C",
          "title": "Sie laufen schnell weg."
        }
      ],
      "answer": "A"
    },
    {
      "id": "card-15",
      "title": "",
      "description": "Welche Primatenart ist giftig?",
      "image": {
        "cloaked": true,
        "url": new URL("../data/images/plumplori.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Nycticebus_coucang_84653116.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Katta"
        },
        {
          "id": "B",
          "title": "Totenkopfäffchen"
        },
        {
          "id": "C",
          "title": "Plumplori"
        }
      ],
      "answer": "C"
    },
    {
      "id": "card-16",
      "title": "Faultier",
      "description": "Können Faultiere schwimmen?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/faultier.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Bradypus_variegatus_Costa_Rica_01.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Nein"
        },
        {
          "id": "B",
          "title": "Ja"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-17",
      "title": "Okapi",
      "description": "Aus welchen Tieren besteht der Okapi?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/okapi.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Okapi_(Okapia_johnstoni)_2009-04-04_02.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Aus Zebra, Giraffe und Pferd"
        },
        {
          "id": "B",
          "title": "Aus Känguru, Faultier und Koala"
        },
        {
          "id": "C",
          "title": "Aus Zebra, Giraffe und Pony"
        }
      ],
      "answer": "A"
    },
    {
      "id": "card-18",
      "title": "Schnabeltier",
      "description": "Wie lange kann ein Schnabeltier unter Wasser bleiben?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/schnabeltier.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Duck-billed_platypus_(Ornithorhynchus_anatinus)_Scottsdale_2.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Rund fünf Minuten"
        },
        {
          "id": "B",
          "title": "Rund zehn Minuten"
        },
        {
          "id": "C",
          "title": "Rund zwei Minuten"
        }
      ],
      "answer": "C"
    },
    {
      "id": "card-19",
      "title": "Helmkasuar",
      "description": "Wozu ist der Helm auf dem Kopf vom Helmkasuar?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/helmkasuar.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Casuarius_casuarius_(6547866597).jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Zur Orientierung"
        },
        {
          "id": "B",
          "title": "Die Forscher wissen es noch nicht"
        }
      ],
      "answer": "B"
    },
    {
      "id": "card-20",
      "title": "Nasenbär",
      "description": "Warum haben Nasenbären so einen langen Schwanz?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/nasenbaer.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Nasenbaer_Nasua_nasua_Zoo_Augsburg-16.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Zur Futtersuche"
        },
        {
          "id": "B",
          "title": "Zum Kämpfen"
        },
        {
          "id": "C",
          "title": "Zur Balance auf einem Ast"
        }
      ],
      "answer": "C"
    },
    {
      "id": "card-21",
      "title": "Nasenbär",
      "description": "Haben Nasenbären Zähne?",
      "image": {
        "cloaked": false,
        "url": new URL("../data/images/nasenbaer.jpg?as=webp", import.meta.url),
        "source": "https://commons.wikimedia.org/wiki/File:Nasenbaer_Nasua_nasua_Zoo_Augsburg-16.jpg"
      },
      "options": [
        {
          "id": "A",
          "title": "Ja"
        },
        {
          "id": "B",
          "title": "Nein"
        }
      ],
      "answer": "A"
    }
  ]
};

class Deck {
  #cards = [];
  #index = 0;

  #size = 0;

  constructor(size) {
    this.#size = size;

    let start = this.#randomBetween(0, (level.cards.length - size));
    let end = start + size;
    let cards = [];

    for (let i = start; i < end; i++) {
      cards.push(i);
    }

    this.#cards = this.#shuffle(cards);
  }

  current() {
    let index = this.#cards[this.#index];

    return level.cards[index];
  }

  next() {
    if (this.#index >= (this.#size - 1)) {
      return null;
    }

    this.#index += 1;

    let index = this.#cards[this.#index];

    return level.cards[index];
  }

  // See https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  #shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  }

  // Get a random integer between two values, inclusive.
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
  #randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class GameModel {
  #stats = {
    cards: 0,
    answers: {
      correct: 0,
      wrong: 0
    }
  };

  #storage;
  #deck;

  static DECK_SIZE = 5;

  constructor() {
    this.#storage = window.localStorage;
    this.#deck = new Deck(GameModel.DECK_SIZE);
  }

  card(callback) {
    let card = this.#deck.current();

    callback(card);
  }

  processAnswer(answer, callback) {
    let card = this.#deck.current();

    if (answer === card.answer) {
      this.#stats.answers.correct += 1;
    } else {
      this.#stats.answers.wrong += 1;
    }
    this.#stats.cards += 1;

    this.#storage.setItem("stats.cards", this.#stats.cards);
    this.#storage.setItem("stats.answers.correct", this.#stats.answers.correct);
    this.#storage.setItem("stats.answers.wrong", this.#stats.answers.wrong);

    card = this.#deck.next();

    callback(answer, card);
  }


}

export default GameModel;
