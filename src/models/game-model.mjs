// import level from "./data/level-0.json";

const level = {
  "title": "TODO: Add title",
  "description": "TODO: Add description",
  "cards": [
    {
      "id": "card-1",
      "title": "Fetzenfish",
      "description": "Zu welcher Familie zählen die Fetzenfishe und die Seepferdchen?",
      "image": {
        "url": new URL("../data/images/fetzenfish.jpg?as=webp&width=600", import.meta.url)
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
        "url": new URL("../data/images/kuestenseenschwalbe.jpg?as=webp&width=600", import.meta.url),
        "source": "https://www.fotocommunity.com"
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
        "url": new URL("../data/images/rosaflamingo.jpg?as=webp&width=600", import.meta.url),
        "source": "https://www.fotocommunity.com"
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
        "url": new URL("../data/images/haubentaucher.jpg?as=webp&width=600", import.meta.url),
        "source": "https://www.fotocommunity.com"
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
      "title": "Fetzenfish",
      "description": "Wie zeigt das Fetzenfish-Männchen, das es zum Ausbrüten der Eier bereit ist?",
      "image": {
        "url": new URL("../data/images/fetzenfish.jpg?as=webp&width=600", import.meta.url)
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
        "url": new URL("../data/images/prachtfregattvogel.jpg?as=webp&width=600", import.meta.url),
        "source": "https://www.fotocommunity.com"
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
        "url": new URL("../data/images/blattschwanzgecko.jpg?as=webp&width=600", import.meta.url),
        "source": "https://www.fotocommunity.com"
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
        "url": new URL("../data/images/diamantschildkroete.jpg?as=webp&width=600", import.meta.url),
        "source": "http://www.dght-dresden.de"
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
        }      ],
      "answer": "B"
    },
    {
      "id": "card-9",
      "title": "Faueltier",
      "description": "Warum hat das Faultier so lange Kralen?",
      "image": {
        "url": new URL("../data/images/faultier.jpg?as=webp&width=600", import.meta.url),
        "source": "https://youtube.com"
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
      "title": "Faueltier",
      "description": "Warum ist das Faultier so langsam?",
      "image": {
        "url": new URL("../data/images/faultier.jpg?as=webp&width=600", import.meta.url),
        "source": "https://youtube.com"
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
        "url": new URL("../data/images/kaenguru-02.jpg?as=webp&width=600", import.meta.url),
        "source": "https://www.wunschliste.de"
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
    }
  ]
};

class GameModel {
  #stats = {
    cards: 0,
    answers: {
      correct: 0,
      wrong: 0
    }
  };
  #currentCardIndex = 0;

  #storage;
  #deck;

  static deckSize = 5;

  constructor() {
    console.debug("GameModel.constructor()");

    this.#storage = window.localStorage;
    // Pick N random cards from all cards available.
    this.#deck = this.#shuffle(level.cards.slice())
                     .slice(0, GameModel.deckSize);
  }

  card(callback) {
    let card = this.#deck[this.#currentCardIndex];
    callback(card);
  }

  processAnswer(answer, callback) {
    console.debug("GameModel.processAnswer()" );
    console.debug(answer);

    let currentCard = this.#deck[this.#currentCardIndex];
    console.debug(this.#currentCardIndex);
    console.debug(currentCard);

    this.#stats.cards += 1;

    if (answer === currentCard.answer) {
      this.#stats.answers.correct += 1;
    } else {
      this.#stats.answers.wrong += 1;
    }

    this.#storage.setItem("stats.cards", this.#stats.cards);
    this.#storage.setItem("stats.answers.correct", this.#stats.answers.correct);
    this.#storage.setItem("stats.answers.wrong", this.#stats.answers.wrong);

    this.#currentCardIndex += 1;

    let nextCard = this.#deck[this.#currentCardIndex];

    callback(answer, nextCard);
  }

  // See https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  #shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  }
}

export default GameModel;
