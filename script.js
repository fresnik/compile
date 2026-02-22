let cards = [
    {
        protocol: "Apathy",
        value: 0,
        top: "Your total value in this line is increased by 1 for each face-down card in this line.",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Apathy",
        value: 1,
        top: "",
        middle: "Flip all other face-up cards in this line.",
        bottom: "",
        keywords: {
            flip: true,
        },
    },
    {
        protocol: "Apathy",
        value: 2,
        top: "Ignore all middle commands of cards in this line.",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, flip this card.</div>",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Apathy",
        value: 3,
        top: "",
        middle: "Flip 1 of your opponent's face-up cards.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Apathy",
        value: 4,
        top: "",
        middle: "You may flip 1 of your face-up covered cards.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Apathy",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Darkness",
        value: 0,
        top: "",
        middle: "Draw 3 cards. Shift 1 of your opponent's covered cards.",
        bottom: "",
        keywords: {
            draw: true,
            shift: true,
        }
    },
    {
        protocol: "Darkness",
        value: 1,
        top: "",
        middle: "Flip 1 of your opponent's cards. You may shift that card.",
        bottom: "",
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Darkness",
        value: 2,
        top: "All face-down cards in this stack have a value of 4.",
        middle: "You may flip 1 covered card in this line.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Darkness",
        value: 3,
        top: "",
        middle: "Play 1 card face-down in another line.",
        bottom: "",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Darkness",
        value: 4,
        top: "",
        middle: "Shift 1 face-down card.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Darkness",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Death",
        value: 0,
        top: "",
        middle: "Delete 1 card from each other line.",
        bottom: "",
        clarifications: [
            "When Death 0's middle command triggers, the owner notes the lines that need to be acted in. Then, they choose which line to process, one at a time. For each line, they select an uncovered card to delete, processing the consequences of that delete before addressing the next line.",
        ],
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 1,
        top: "<div><span class='emphasis'>Start:</span> You may draw 1 card. If you do, delete 1 other card. Then, delete this card.</div>",
        middle: "",
        bottom: "",
        keywords: {
            delete: true,
            draw: true,
        }
    },
    {
        protocol: "Death",
        value: 2,
        top: "",
        middle: "Delete all cards in 1 line with values of 1 or 2.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 3,
        top: "",
        middle: "Delete 1 face-down card.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 4,
        top: "",
        middle: "Delete a card with a value of 0 or 1.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Death",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Fire",
        value: 0,
        top: "",
        middle: "Flip 1 other card. Draw 2 cards.",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, draw 1 card. Then, flip 1 other card.</div>",
        keywords: {
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Fire",
        value: 1,
        top: "",
        middle: "Discard 1 card. If you do, delete 1 card.",
        bottom: "",
        keywords: {
            delete: true,
            discard: true,
        }
    },
    {
        protocol: "Fire",
        value: 2,
        top: "",
        middle: "Discard 1 card. If you do, return 1 card.",
        bottom: "",
        keywords: {
            discard: true,
            return: true,
        }
    },
    {
        protocol: "Fire",
        value: 3,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> You may discard 1 card. If you do, flip 1 card.</div>",
        keywords: {
            discard: true,
            flip: true,
        }
    },
    {
        protocol: "Fire",
        value: 4,
        top: "",
        middle: "Discard 1 or more cards. Draw the amount discarded plus 1.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Fire",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Gravity",
        value: 0,
        top: "",
        middle: "For every 2 cards in this line, play the top card of your deck face-down under this card.",
        bottom: "",
        keywords: {
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Gravity",
        value: 1,
        top: "",
        middle: "Draw 2 cards. Shift 1 card either to or from this line.",
        bottom: "",
        keywords: {
            draw: true,
            shift: true,
        }
    },
    {
        protocol: "Gravity",
        value: 2,
        top: "",
        middle: "Flip 1 card. Shift that card to this line.",
        bottom: "",
        clarifications: [
            "Gravity 2 will still shift the flipped card if it's covered. \u201cThat card\u201d references a specific card that supersedes the covered manipulation rule.",
        ],
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Gravity",
        value: 4,
        top: "",
        middle: "Shift 1 face-down card to this line.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Gravity",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Gravity",
        value: 6,
        top: "",
        middle: "Your opponent plays the top card of their deck face-down in this line.",
        bottom: "",
        keywords: {
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Hate",
        value: 0,
        top: "",
        middle: "Delete 1 card.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Hate",
        value: 1,
        top: "",
        middle: "Discard 3 cards. Delete 1 card. Delete 1 card.",
        bottom: "",
        keywords: {
            delete: true,
            discard: true,
        }
    },
    {
        protocol: "Hate",
        value: 2,
        top: "",
        middle: "Delete your highest value uncovered card. Delete your opponent's highest value uncovered card.",
        bottom: "",
        clarifications: [
            "Multiple cards can be tied for the highest value. The player would choose one of the tied cards.",
            "If Hate 2 is the highest value card you own it deletes itself as a result of the first clause. Thus, the second clause no longer exists and does not trigger.",
        ],
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Hate",
        value: 3,
        top: "<div><span class='emphasis'>After you delete cards:</span> Draw 1 card.</div>",
        middle: "",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Hate",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, delete the lowest value covered card in this line.</div>",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Hate",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Life",
        value: 0,
        top: "<div><span class='emphasis'>End:</span> If this card is covered, delete this card.</div>",
        middle: "Play the top card of your deck face-down in each line where you have a card.",
        bottom: "",
        clarifications: [
            "When Life 0's middle command triggers, the owner notes the lines that need to be acted in. Then, they choose which line to process, one at a time. For each line, they play the top card of their deck face-down, processing the consequences of that card play before addressing the next line. If Life 0 gets covered during this process, its middle command stops.",
            "Playing cards from the top of a deck does not force a shuffle if that deck is empty.",
        ],
        keywords: {
            delete: true,
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Life",
        value: 1,
        top: "",
        middle: "Flip 1 card. Flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Life",
        value: 2,
        top: "",
        middle: "Draw 1 card. You may flip 1 face-down card.",
        bottom: "",
        keywords: {
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Life",
        value: 3,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, play the top card of your deck face-down in another line.</div>",
        keywords: {
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Life",
        value: 4,
        top: "",
        middle: "If this card is covering a card, draw 1 card.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Life",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Light",
        value: 0,
        top: "",
        middle: "Flip 1 card. Draw cards equal to that card's value.",
        bottom: "",
        clarifications: [
            "The middle command reads ”Flip 1 card. Draw cards equal to that card’s value.” When played, the card owner chooses one uncovered card, flips that card, and then resolves any triggered text. Then, they draw cards equal to the current value of the chosen card (e.g. Light 0 selects Fire 5. First, Fire 5 is flipped face-down. Then, Light 0 checks the current value of the card, which is now 2. As a result, the active player draws 2 cards.)",
        ],
        rulings: [
            "If the chosen card is removed from play, it is still referred to directly by the ”that card” text on Light 0. (e.g. Light 0 selects Metal 6. First, Metal 6's top command triggers: because it is about to be flipped, it deletes itself. Then, Light 0 checks the value of Metal 6, and, if it’s in the trash, its current value is 6 since all cards in the trash are face-up. The active player draws 6 cards. If the Metal 6 is private information (i.e. it was shuffled into your deck) it has a value of 2.)",
        ],
        keywords: {
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Light",
        value: 1,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Draw 1 card.</div>",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Light",
        value: 2,
        top: "",
        middle: "Draw 2 cards. Reveal 1 face-down card. You may shift or flip that card.",
        bottom: "",
        keywords: {
            draw: true,
            flip: true,
            reveal: true,
            shift: true,
        }
    },
    {
        protocol: "Light",
        value: 3,
        top: "",
        middle: "Shift all face-down cards in this line to another line.",
        bottom: "",
        clarifications: [
            "The face-down cards shifted by Light 3 maintain the same relative positioning in their stacks and are all moved to the same line.",
        ],
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Light",
        value: 4,
        top: "",
        middle: "Your opponent reveals their hand.",
        bottom: "",
        keywords: {
            reveal: true,
        }
    },
    {
        protocol: "Light",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Love",
        value: 1,
        top: "",
        middle: "Draw the top card of your opponent's deck.",
        bottom: "<div><span class='emphasis'>End:</span> You may give 1 card from your hand to your opponent. If you do, draw 2 cards.</div>",
        keywords: {
            draw: true,
            give: true,
            topDeck: true,
        }
    },
    {
        protocol: "Love",
        value: 2,
        top: "",
        middle: "Your opponent draws 1 card. Refresh.",
        bottom: "",
        keywords: {
            draw: true,
            refresh: true,
        }
    },
    {
        protocol: "Love",
        value: 3,
        top: "",
        middle: "Take 1 random card from your opponent's hand. Give 1 card from your hand to your opponent.",
        bottom: "",
        keywords: {
            give: true,
            take: true,
        }
    },
    {
        protocol: "Love",
        value: 4,
        top: "",
        middle: "Reveal 1 card from your hand. Flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
            reveal: true,
        }
    },
    {
        protocol: "Love",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Love",
        value: 6,
        top: "",
        middle: "Your opponent draws 2 cards.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Metal",
        value: 0,
        top: "Your opponent's total value in this line is reduced by 2.",
        middle: "Flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Metal",
        value: 1,
        top: "",
        middle: "Draw 2 cards. Your opponent cannot compile on their next turn.",
        bottom: "",
        clarifications: [
            "Metal 1 prevents your opponent from taking the compile action on their next turn, provided the text is visible. Since a player gets 1 action on their turn (compile, play, or refresh), they must either play or refresh on their next turn since they cannot compile.",
        ],
        keywords: {
            compile: true,
            draw: true,
        }
    },
    {
        protocol: "Metal",
        value: 2,
        top: "Your opponent cannot play cards face-down in this line.",
        middle: "",
        bottom: "",
        keywords: {
        }
    },
    {
        protocol: "Metal",
        value: 3,
        top: "",
        middle: "Draw 1 card. Delete all cards in 1 other line with 8 or more cards.",
        bottom: "",
        keywords: {
            delete: true,
            draw: true,
        }
    },
    {
        protocol: "Metal",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Metal",
        value: 6,
        top: "<div><span class='emphasis'>When this card would be covered or flipped:</span> First, delete this card.</div>",
        middle: "",
        bottom: "",
        clarifications: [
            "When Metal 6 deletes itself because of its top command, if it is covering a card with text that would trigger, that text triggers before the committed card enters the field.",
            "When Metal 6 deletes itself as a result of being flipped, the “flip” command is used up and cannot be used on another card, nor can it be used on Metal 6 in the trash, as cards in the trash can’t be flipped.",
        ],
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Plague",
        value: 0,
        top: "",
        middle: "Your opponent discards 1 card.",
        bottom: "Your opponent cannot play cards in this line.",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Plague",
        value: 1,
        top: "<div><span class='emphasis'>After your opponent discards cards:</span> Draw 1 card.</div>",
        middle: "Your opponent discards 1 card.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Plague",
        value: 2,
        top: "",
        middle: "Discard 1 or more cards. Your opponent discards the amount of cards discarded plus 1.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Plague",
        value: 3,
        top: "",
        middle: "Flip each other uncovered face-up card.",
        bottom: "",
        clarifications: [
            "The middle command reads “Flip each other face-up card.” This only affects uncovered cards, since it does not say “all”.",
            "When Plague 3's middle command triggers, the owner notes each uncovered face-up card. Then, they choose which card to process, one at a time. For each card, they flip it and process any consequences before addressing the next card",
        ],
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Plague",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Your opponent deletes 1 of their face-down cards. You may flip this card.</div>",
        keywords: {
            delete: true,
            flip: true,
        }
    },
    {
        protocol: "Plague",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Psychic",
        value: 0,
        top: "",
        middle: "Draw 2 cards. Your opponent discards 2 cards, then reveals their hand.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
            reveal: true,
        }
    },
    {
        protocol: "Psychic",
        value: 1,
        top: "Your opponent can only play cards face-down.",
        middle: "",
        bottom: "<div><span class='emphasis'>Start:</span> Flip this card.</div>",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Psychic",
        value: 2,
        top: "",
        middle: "Your opponent discards 2 cards. Rearrange their protocols.",
        bottom: "",
        keywords: {
            discard: true,
            rearrange: true,
        }
    },
    {
        protocol: "Psychic",
        value: 3,
        top: "",
        middle: "Your opponent discards 1 card. Shift 1 of their cards.",
        bottom: "",
        keywords: {
            discard: true,
            shift: true,
        }
    },
    {
        protocol: "Psychic",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> You may return 1 of your opponent's cards. If you do, flip this card.</div>",
        keywords: {
            flip: true,
            return: true,
        }
    },
    {
        protocol: "Psychic",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Speed",
        value: 0,
        top: "",
        middle: "Play 1 card.",
        bottom: "",
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Speed",
        value: 1,
        top: "<div><span class='emphasis'>After you clear cache:</span> Draw 1 card.</div>",
        middle: "Draw 2 cards.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Speed",
        value: 2,
        top: "<div><span class='emphasis'>When this card would be deleted by compiling:</span> Shift this card, even if this card is covered.</div>",
        middle: "",
        bottom: "",
        clarifications: [
            "When compiling, all cards in the line are deleted at the same time. When Speed 2 would be deleted this way, instead, you shift it to another line, preventing the delete of Speed 2 only, and not altering the compile.",
        ],
        keywords: {
            compile: true,
            shift: true,
        }
    },
    {
        protocol: "Speed",
        value: 3,
        top: "",
        middle: "Shift 1 of your other cards.",
        bottom: "<div><span class='emphasis'>End:</span> You may shift 1 of your cards. If you do, flip this card.</div>",
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Speed",
        value: 4,
        top: "",
        middle: "Shift 1 of your opponent's face-down cards.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Speed",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Spirit",
        value: 0,
        top: "",
        middle: "Refresh. Draw 1 card.",
        bottom: "Skip your check cache phase.",
        clarifications: [
            "When you refresh as instructed, it is a normal refresh action, including spending the control component, if applicable.",
        ],
        keywords: {
            draw: true,
            refresh: true,
        }
    },
    {
        protocol: "Spirit",
        value: 1,
        top: "When you play cards face-up, they may be played without matching protocols.",
        middle: "Draw 2 cards.",
        bottom: "<div><span class='emphasis'>Start:</span> Either discard 1 card or flip this card.</div>",
        keywords: {
            discard: true,
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Spirit",
        value: 2,
        top: "",
        middle: "You may flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Spirit",
        value: 3,
        top: "<div><span class='emphasis'>After you draw cards:</span> You may shift this card, even if this card is covered.</div>",
        middle: "",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Spirit",
        value: 4,
        top: "",
        middle: "Swap the positions of 2 of your protocols.",
        bottom: "",
        keywords: {
            swap: true,
        }
    },
    {
        protocol: "Spirit",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Water",
        value: 0,
        top: "",
        middle: "Flip 1 other card. Flip this card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Water",
        value: 1,
        top: "",
        middle: "Play the top card of your deck face-down in each other line.",
        bottom: "",
        clarifications: [
            "When Water 1's middle command triggers, the owner notes the lines that need to be acted in. Then, they choose which line to process, one at a time. For each line, they play the top card of their deck face-down, processing the consequences of that card play before addressing the next line.",
            "Playing cards from the top of a deck does not force a shuffle if that deck is empty.",
        ],
        keywords: {
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Water",
        value: 2,
        top: "",
        middle: "Draw 2 cards. Rearrange your protocols.",
        bottom: "",
        keywords: {
            draw: true,
            rearrange: true,
        }
    },
    {
        protocol: "Water",
        value: 3,
        top: "",
        middle: "Return all cards with a value of 2 in 1 line.",
        bottom: "",
        keywords: {
            return: true,
        }
    },
    {
        protocol: "Water",
        value: 4,
        top: "",
        middle: "Return 1 of your cards.",
        bottom: "",
        keywords: {
            return: true,
        }
    },
    {
        protocol: "Water",
        value: 5,
        top: "",
        middle: "You discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Chaos",
        value: 0,
        top: "",
        middle: "Flip 1 covered card in each line.",
        bottom: "<div><span class='emphasis'>Start:</span> Draw the top card of your opponent's deck. Your opponent draws the top card of your deck.</div>",
        clarifications: [
            "When Chaos 0's middle command triggers, the owner notes each line that needs to be acted in. Then, they choose which line to process, one at a time. For each line, they select a covered card to flip, processing the consequences of that flip before addressing the next line. Covered cards never activate their middle command when flipped.",
        ],
        keywords: {
            draw: true,
            flip: true,
            topDeck: true,
        }
    },
    {
        protocol: "Chaos",
        value: 1,
        top: "",
        middle: "Rearrange your protocols. Rearrange your opponent's protocols.",
        bottom: "",
        clarifications: [
            "You must make a change to the protocols of both players.",
        ],
        keywords: {
            rearrange: true,
        }
    },
    {
        protocol: "Chaos",
        value: 2,
        top: "",
        middle: "Shift 1 of your covered cards.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Chaos",
        value: 3,
        top: "",
        middle: "",
        bottom: "This card may be played without matching protocols.",
        keywords: {}
    },
    {
        protocol: "Chaos",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Discard your hand. Draw that many cards.</div>",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Chaos",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Clarity",
        value: 0,
        top: "Your total value in this line is increased by 1 for each card in your hand.",
        middle: "",
        bottom: "",
        keywords: {}
    },
    {
        protocol: "Clarity",
        value: 1,
        top: "<div><span class='emphasis'>Start:</span> Reveal the top card of your deck. You may discard the top card of your deck.</div>",
        middle: "Your opponent reveals their hand.",
        bottom: "<div><span class='emphasis'>When this card would be covered:</span> First, draw 3 cards.</div>",
        keywords: {
            discard: true,
            draw: true,
            reveal: true,
            topDeck: true,
        }
    },
    {
        protocol: "Clarity",
        value: 2,
        top: "",
        middle: "Reveal your deck. Draw 1 card with a value of 1 revealed this way. Shuffle your deck. Play 1 card with a value of 1.",
        bottom: "",
        keywords: {
            draw: true,
            play: true,
            reveal: true,
            shuffle: true,
        }
    },
    {
        protocol: "Clarity",
        value: 3,
        top: "",
        middle: "Reveal your deck. Draw 1 card with a value of 5 revealed this way. Shuffle your deck.",
        bottom: "",
        keywords: {
            draw: true,
            reveal: true,
            shuffle: true,
        }
    },
    {
        protocol: "Clarity",
        value: 4,
        top: "",
        middle: "You may shuffle your trash into your deck.",
        bottom: "",
        keywords: {
            shuffle: true,
            trash: true,
        }
    },
    {
        protocol: "Clarity",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Corruption",
        value: 0,
        top: "<div><span class='emphasis'>Start:</span> Flip 1 other face-up covered or uncovered card in this stack.</div>",
        middle: "",
        bottom: "This card may be played on either player's side without matching protocols.",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Corruption",
        value: 1,
        top: "",
        middle: "Return 1 card.",
        bottom: "When a card would be returned to your opponent's hand: Put that card on top of their deck face-down instead.",
        keywords: {
            return: true,
        }
    },
    {
        protocol: "Corruption",
        value: 2,
        top: "<div><span class='emphasis'>After you discard cards:</span> Your opponent discards 1 card.</div>",
        middle: "Draw 1 card. Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Corruption",
        value: 3,
        top: "",
        middle: "You may flip 1 face-up covered card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Corruption",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Corruption",
        value: 6,
        top: "<div><span class='emphasis'>End:</span> Either discard 1 card or delete this card.</div>",
        middle: "",
        bottom: "",
        clarifications: [
            "This will trigger the middle command of the card it was covering if it deletes itself at the end of turn.",
        ],
        keywords: {
            delete: true,
            discard: true,
        }
    },
    {
        protocol: "Courage",
        value: 0,
        top: "<div><span class='emphasis'>Start:</span> If you have no cards in hand, draw 1 card.</div>",
        middle: "Draw 1 card.",
        bottom: "<div><span class='emphasis'>End:</span> You may discard 1 card. If you do, your opponent discards 1 card.</div>",
        keywords: {
            draw: true,
            discard: true,
        }
    },
    {
        protocol: "Courage",
        value: 1,
        top: "",
        middle: "Delete 1 of your opponent's cards in a line where they have a higher total value than you do.",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Courage",
        value: 2,
        top: "",
        middle: "Draw 1 card.",
        bottom: "<div><span class='emphasis'>End:</span> If your opponent has a higher total value than you do in this line, draw 1 card.</div>",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Courage",
        value: 3,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> You may shift this card to the line where your opponent has their highest total value.</div>",
        clarifications: [
            "Multiple lines can be tied for “highest total value”. In this case, the player chooses.",
        ],
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Courage",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Courage",
        value: 6,
        top: "<div><span class='emphasis'>End:</span> If your opponent has a higher value in this line than you do, flip this card.</div>",
        middle: "",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Fear",
        value: 0,
        top: "During your turn, your opponent's cards do not have middle commands.",
        middle: "Shift or flip 1 card.",
        bottom: "",
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Fear",
        value: 1,
        top: "",
        middle: "Draw 2 cards. Your opponent discards their hand and draws the amount of cards discarded minus 1.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Fear",
        value: 2,
        top: "",
        middle: "Return 1 of your opponent's cards.",
        bottom: "",
        keywords: {
            return: true,
        }
    },
    {
        protocol: "Fear",
        value: 3,
        top: "",
        middle: "Shift 1 of your opponent's covered or uncovered cards in this line.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Fear",
        value: 4,
        top: "",
        middle: "Your opponent discards 1 random card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Fear",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Ice",
        value: 1,
        top: "",
        middle: "You may shift this card.",
        bottom: "<div><span class='emphasis'>After your opponent plays a card in this line:</span> Your opponent discards 1 card.</div>",
        keywords: {
            discard: true,
            shift: true,
        }
    },
    {
        protocol: "Ice",
        value: 2,
        top: "",
        middle: "Shift 1 other card.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Ice",
        value: 3,
        top: "<div><span class='emphasis'>End:</span> If this card is covered, you may shift it.</div>",
        middle: "",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Ice",
        value: 3,
        top: "",
        middle: "",
        bottom: "This card cannot be flipped.",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Ice",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Ice",
        value: 6,
        top: "If you have any cards in your hand, you cannot draw cards.",
        middle: "",
        bottom: "",
        clarifications: [
            "Cards are drawn in a batch. Refreshing with 0 cards in hand will draw you 5 cards.",
        ],
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Luck",
        value: 0,
        top: "",
        middle: "State a number. Draw 3 cards. Reveal 1 card drawn with the face-up value of your stated number. You may play it.",
        bottom: "",
        clarifications: [
            "The played card must be one that you drew with Luck 0. You can play the card face-up or face-down.",
        ],
        keywords: {
            draw: true,
            play: true,
            reveal: true,
        }
    },
    {
        protocol: "Luck",
        value: 1,
        top: "",
        middle: "Play the top card of your deck face-down. Flip that card, ignoring its middle command.",
        bottom: "",
        clarifications: [
            "The middle command is only ignored for the flip.",
        ],
        keywords: {
            flip: true,
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Luck",
        value: 2,
        top: "",
        middle: "Discard the top card of your deck. Draw cards equal to the value of the discarded card.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
            topDeck: true,
        }
    },
    {
        protocol: "Luck",
        value: 3,
        top: "",
        middle: "State a protocol. Discard the top card of your opponent's deck. If the discarded card matched the stated protocol, delete 1 card.",
        bottom: "",
        keywords: {
            delete: true,
            discard: true,
            topDeck: true,
        }
    },
    {
        protocol: "Luck",
        value: 4,
        top: "",
        middle: "Discard the top card of your deck. Delete 1 covered or uncovered card that shares a value with the discarded card.",
        bottom: "",
        keywords: {
            delete: true,
            discard: true,
            topDeck: true,
        }
    },
    {
        protocol: "Luck",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Mirror",
        value: 0,
        top: "Your total value in this line is increased by 1 for each of your opponent's cards in this line.",
        middle: "",
        bottom: "",
        keywords: {}
    },
    {
        protocol: "Mirror",
        value: 1,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> You may resolve the middle command of 1 of your opponent's cards as if it were on this card.</div>",
        clarifications: [
            "Mirror 1’s bottom text is blocked by Fear 0 because the text is treated “as if it were on this card” but there’s no text to copy because Fear 0 says the “cards do not have middle commands”.",
        ],
        keywords: {}
    },
    {
        protocol: "Mirror",
        value: 2,
        top: "",
        middle: "Swap all of your cards in one of your stacks with another one of your stacks.",
        bottom: "",
        clarifications: [
            "The swapped cards keep the same relative positions. A stack must have at least 1 card in it to swap.",
        ],
        keywords: {
            swap: true,
        }
    },
    {
        protocol: "Mirror",
        value: 3,
        top: "",
        middle: "Flip 1 of your cards. Flip 1 of your opponent's cards in the same line.",
        bottom: "",
        clarifications: [
            "If Mirror 3 flips itself first, the second flip doesn’t happen.",
        ],
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Mirror",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>After your opponent draws cards:</span> Draw 1 card.</div>",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Mirror",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Peace",
        value: 1,
        top: "",
        middle: "Both players discard their hand.",
        bottom: "<div><span class='emphasis'>End:</span> If your hand is empty, draw 1 card.</div>",
        clarifications: [
            "The owner decides which player discards their hand first.",
        ],
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Peace",
        value: 2,
        top: "",
        middle: "Draw 1 card. Play 1 card face-down.",
        bottom: "",
        keywords: {
            draw: true,
            play: true,
        }
    },
    {
        protocol: "Peace",
        value: 3,
        top: "",
        middle: "You may discard 1 card. Flip 1 card that has a value greater than the number of cards in your hand.",
        bottom: "",
        keywords: {
            discard: true,
            flip: true,
        }
    },
    {
        protocol: "Peace",
        value: 4,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>After you discard cards during your opponent's turn:</span> Draw 1 card.</div>",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Peace",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Peace",
        value: 6,
        top: "",
        middle: "If you have more than 1 card in your hand, flip this card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Smoke",
        value: 0,
        top: "",
        middle: "Play the top card of your deck face-down in each line with a face-down card.",
        bottom: "",
        clarifications: [
            "Both Smoke 0 and 3 count your opponent’s face-down cards.",
        ],
        keywords: {
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Smoke",
        value: 1,
        top: "",
        middle: "Flip 1 of your cards. You may shift that card.",
        bottom: "",
        keywords: {
            flip: true,
            shift: true,
        }
    },
    {
        protocol: "Smoke",
        value: 2,
        top: "Your total value in this line is increased by 1 for each face-down card in this line.",
        middle: "",
        bottom: "",
        keywords: {}
    },
    {
        protocol: "Smoke",
        value: 3,
        top: "",
        middle: "Play 1 card face-down in a line with a face-down card.",
        bottom: "",
        clarifications: [
            "Both Smoke 0 and 3 count your opponent’s face-down cards.",
        ],
        keywords: {
            play: true,
        }
    },
    {
        protocol: "Smoke",
        value: 4,
        top: "",
        middle: "Shift 1 covered face-down card.",
        bottom: "",
        keywords: {
            shift: true,
        }
    },
    {
        protocol: "Smoke",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Time",
        value: 0,
        top: "",
        middle: "Play 1 card from your trash. Shuffle your trash into your deck.",
        bottom: "",
        keywords: {
            play: true,
            shuffle: true,
            trash: true,
        }
    },
    {
        protocol: "Time",
        value: 1,
        top: "",
        middle: "Flip 1 covered card. Discard your entire deck.",
        bottom: "",
        keywords: {
            discard: true,
            flip: true,
        }
    },
    {
        protocol: "Time",
        value: 2,
        top: "<div><span class='emphasis'>After you shuffle your deck:</span> Draw 1 card. Then, you may shift this card.</div>",
        middle: "If there are any cards in your trash, you may shuffle your trash into your deck.",
        bottom: "",
        keywords: {
            draw: true,
            shift: true,
            shuffle: true,
            trash: true,
        }
    },
    {
        protocol: "Time",
        value: 3,
        top: "",
        middle: "Reveal 1 card from your trash. Play it face-down in another line.",
        bottom: "",
        keywords: {
            play: true,
            reveal: true,
            trash: true,
        }
    },
    {
        protocol: "Time",
        value: 4,
        top: "",
        middle: "Draw 2 cards. Discard 2 cards.",
        bottom: "",
        keywords: {
            discard: true,
            draw: true,
        }
    },
    {
        protocol: "Time",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "War",
        value: 0,
        top: "<div><span class='emphasis'>After you refresh:</span> You may flip this card.</div>",
        middle: "",
        bottom: "<div><span class='emphasis'>After your opponent draws cards:</span> You may delete 1 card.</div>",
        keywords: {
            delete: true,
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "War",
        value: 1,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>After your opponent refreshes:</span> Discard any number of cards. Refresh.</div>",
        keywords: {
            discard: true,
            refresh: true,
        }
    },
    {
        protocol: "War",
        value: 2,
        top: "",
        middle: "Flip 1 card.",
        bottom: "<div><span class='emphasis'>After your opponent compiles:</span> Your opponent discards their hand.</div>",
        keywords: {
            compile: true,
            discard: true,
            flip: true,
        }
    },
    {
        protocol: "War",
        value: 3,
        top: "",
        middle: "Draw 1 card.",
        bottom: "<div><span class='emphasis'>After your opponent discards cards:</span> You may play 1 card face-down.</div>",
        keywords: {
            discard: true,
            draw: true,
            play: true,
        }
    },
    {
        protocol: "War",
        value: 4,
        top: "",
        middle: "Your opponent discards 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "War",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Diversity",
        value: 0,
        top: "",
        middle: "If there are 6 different protocols on cards in the field, flip the Diversity protocol to the compiled side.",
        bottom: "<div><span class='emphasis'>End:</span> You may play 1 non-Diversity card in this line.</div>",
        keywords: {
            compile: true,
            flip: true,
            play: true,
        }
    },
    {
        protocol: "Diversity",
        value: 1,
        top: "",
        middle: "Shift 1 card. Draw cards equal to the number of different protocols on cards in this line.",
        bottom: "",
        keywords: {
            draw: true,
            shift: true,
        }
    },
    {
        protocol: "Diversity",
        value: 3,
        top: "Your total value in this line is increased by 2 if there are any non-Diversity face-up cards in this stack.",
        middle: "",
        bottom: "",
        keywords: {}
    },
    {
        protocol: "Diversity",
        value: 4,
        top: "",
        middle: "Flip 1 card with a value less than the number of different protocols on cards in the field.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Diversity",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Diversity",
        value: 6,
        top: "<div><span class='emphasis'>End:</span> If there are not at least 4 different protocols on cards in the field, delete this card.</div>",
        middle: "",
        bottom: "",
        keywords: {
            delete: true,
        }
    },
    {
        protocol: "Assimilation",
        value: 0,
        top: "",
        middle: "Put 1 of your opponent's covered or uncovered face-down cards into your hand.",
        bottom: "",
        keywords: {}
    },
    {
        protocol: "Assimilation",
        value: 1,
        top: "",
        middle: "Discard 1 card. Refresh.",
        bottom: "<div><span class='emphasis'>After a player refreshes:</span> Draw the top card of your opponent's deck. Discard 1 card into their trash.</div>",
        keywords: {
            discard: true,
            draw: true,
            refresh: true,
            topDeck: true,
            trash: true,
        }
    },
    {
        protocol: "Assimilation",
        value: 2,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Play the top card of your opponent's deck face-down in this stack.</div>",
        keywords: {
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Assimilation",
        value: 4,
        top: "",
        middle: "Draw the top card of your opponent's deck. Your opponent draws the top card of your deck.",
        bottom: "",
        keywords: {
            draw: true,
            topDeck: true,
        }
    },
    {
        protocol: "Assimilation",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
    {
        protocol: "Assimilation",
        value: 6,
        top: "",
        middle: "",
        bottom: "<div><span class='emphasis'>End:</span> Play the top card of your deck face-down on your opponent's side.</div>",
        keywords: {
            play: true,
            topDeck: true,
        }
    },
    {
        protocol: "Unity",
        value: 0,
        top: "",
        middle: "If there is another Unity card in the field, either flip 1 card or draw 1 card.",
        bottom: "<div><span class='emphasis'>When this card would be covered by a Unity card:</span> First, either flip 1 card or draw 1 card.</div>",
        keywords: {
            draw: true,
            flip: true,
        }
    },
    {
        protocol: "Unity",
        value: 1,
        top: "<div><span class='emphasis'>Start:</span> If this card is covered, you may shift this card.</div>",
        middle: "If there are 5 or more Unity cards in the field, flip the Unity protocol to the compiled side and delete all cards in that line.",
        bottom: "Unity cards may be played face-up in this line.",
        keywords: {
            compile: true,
            delete: true,
            flip: true,
            play: true,
            shift: true,
        }
    },
    {
        protocol: "Unity",
        value: 2,
        top: "",
        middle: "Draw cards equal to the number of Unity cards in the field.",
        bottom: "",
        keywords: {
            draw: true,
        }
    },
    {
        protocol: "Unity",
        value: 3,
        top: "",
        middle: "If there is another Unity card in the field, you may flip 1 face-up card.",
        bottom: "",
        keywords: {
            flip: true,
        }
    },
    {
        protocol: "Unity",
        value: 4,
        top: "<div><span class='emphasis'>End:</span> If your hand is empty, reveal your deck, draw all Unity cards from it, and shuffle your deck.</div>",
        middle: "",
        bottom: "",
        keywords: {
            draw: true,
            reveal: true,
            shuffle: true,
        }
    },
    {
        protocol: "Unity",
        value: 5,
        top: "",
        middle: "Discard 1 card.",
        bottom: "",
        keywords: {
            discard: true,
        }
    },
]

const programs = {
    "Main 1": ["Darkness", "Death", "Fire", "Gravity", "Life", "Light", "Metal", "Plague", "Psychic", "Speed", "Spirit", "Water"],
    "Aux 1": ["Apathy", "Hate", "Love"],
    "Main 2": ["Chaos", "Clarity", "Corruption", "Courage", "Fear", "Ice", "Luck", "Mirror", "Peace", "Smoke", "Time", "War"],
    "Aux 2": ["Diversity", "Assimilation", "Unity"]
};

initialize();

function initialize() {
    buildProtocolFilter();
    let array = cards;
    displayCards(array);
}

$(document).on('click', '.js_protocol', function() {
    checkFilters();
})
$(".js_value").click(function() {
    checkFilters();
})
$(".js_keyword").click(function() {
    checkFilters();
})
$(".js_select-all-protocol").click(function() {
    $(".js_protocol").prop("checked", true);
    checkFilters();
})
$(".js_remove-all-protocol").click(function() {
    $(".js_protocol").prop("checked", false);
    checkFilters();
})
$(".js_select-all-value").click(function() {
    $(".js_value").prop("checked", true);
    checkFilters();
})
$(".js_remove-all-value").click(function() {
    $(".js_value").prop("checked", false);
    checkFilters();
})
$(".js_select-all-keywords").click(function() {
    $(".js_keyword").prop("checked", true);
    checkFilters();
})
$(".js_remove-all-keywords").click(function() {
    $(".js_keyword").prop("checked", false);
    checkFilters();
})

$(document).on('click', '.js_collapse-program', function() {
    const targetId = $(this).data('target');
    const $list = $('#' + targetId);
    $list.toggleClass('filters__program-list--collapsed');
    $(this).html($list.hasClass('filters__program-list--collapsed') ? '&#9654;' : '&#9660;');
});

$(document).on('click', '.js_select-all-program', function() {
    $(this).closest('.filters__program').find('.js_protocol').prop('checked', true);
    checkFilters();
});

$(document).on('click', '.js_remove-all-program', function() {
    $(this).closest('.filters__program').find('.js_protocol').prop('checked', false);
    checkFilters();
});

function buildProtocolFilter() {
    const $list = $('.js_protocol-list');
    $list.empty();

    Object.entries(programs).forEach(([programName, protocols]) => {
        const programId = programName.toLowerCase().replace(/\s+/g, '-');
        const listId = `program-list-${programId}`;

        const protocolItems = protocols.map(protocol => {
            const protocolLower = protocol.toLowerCase();
            return `
                <li class="filters__list-item">
                    <input class="filters__input js_criteria js_protocol js_${protocolLower}" checked type="checkbox" id="${protocolLower}" name="checkbox" value="1" data-protocol="${protocol}">
                    <label class="filters__label" for="${protocolLower}">${protocol}</label>
                </li>`;
        }).join('');

        $list.append(`
            <li class="filters__program">
                <div class="filters__program-header">
                    <button class="filters__collapse-btn js_collapse-program" data-target="${listId}">&#9660;</button>
                    <span class="filters__program-name">${programName}</span>
                    <div class="filters__program-btns">
                        <button class="filters__btn filters__btn--sm js_select-all-program">Select All</button>
                        <button class="filters__btn filters__btn--sm js_remove-all-program">Remove All</button>
                    </div>
                </div>
                <ul class="filters__program-list" id="${listId}">
                    ${protocolItems}
                </ul>
            </li>`);
    });
}

function checkFilters() {
    let array = cards;

    let [zero, one, two, three, four, five, six] = checkValue();

    let [compile, deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, shuffle, swap, take, topDeck, trash] = checkKeywords();

    array = getProtocols(array);

    array = getValue(array, zero, one, two, three, four, five, six);

    array = getKeywords(array, compile, deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, shuffle, swap, take, topDeck, trash);

    displayCards(array);
}


function checkValue() {
    let zero = $('.js_zero').is(':checked');
    let one = $('.js_one').is(':checked');
    let two = $('.js_two').is(':checked');
    let three = $('.js_three').is(':checked');
    let four = $('.js_four').is(':checked');
    let five = $('.js_five').is(':checked');
    let six = $('.js_six').is(':checked');

    return [zero, one, two, three, four, five, six];
};

function checkKeywords() {
    let compile = $('.js_compile').is(':checked');
    let deleteVar = $('.js_delete').is(':checked');
    let discard = $('.js_discard').is(':checked');
    let draw = $('.js_draw').is(':checked');
    let flip = $('.js_flip').is(':checked');
    let give = $('.js_give').is(':checked');
    let play = $('.js_play').is(':checked');
    let rearrange = $('.js_rearrange').is(':checked');
    let returnVar = $('.js_return').is(':checked');
    let reveal = $('.js_reveal').is(':checked');
    let refresh = $('.js_refresh').is(':checked');
    let shift = $('.js_shift').is(':checked');
    let shuffle = $('.js_shuffle').is(':checked');
    let swap = $('.js_swap').is(':checked');
    let take = $('.js_take').is(':checked');
    let topDeck = $('.js_top-deck').is(':checked');
    let trash = $('.js_trash').is(':checked');

    return [compile, deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, shuffle, swap, take, topDeck, trash];
}

function getProtocols(array) {
    const checked = new Set();
    $('.js_protocol:checked').each(function() {
        checked.add($(this).data('protocol'));
    });
    return array.filter(card => checked.has(card.protocol));
}

function getValue(array, zero, one, two, three, four, five, six) {
    if (!zero) {
        array = array.filter(cards => cards.value != 0);
    }
    if (!one) {
        array = array.filter(cards => cards.value != 1);
    }
    if (!two) {
        array = array.filter(cards => cards.value != 2);
    }
    if (!three) {
        array = array.filter(cards => cards.value != 3);
    }
    if (!four) {
        array = array.filter(cards => cards.value != 4);
    }
    if (!five) {
        array = array.filter(cards => cards.value != 5);
    }
    if (!six) {
        array = array.filter(cards => cards.value != 6);
    }

    return array;
}

function getKeywords(array, compile, deleteVar, discard, draw, flip, give, play, rearrange, returnVar, reveal, refresh, shift, shuffle, swap, take, topDeck, trash) {
    if (compile) {
        array = array.filter(cards => cards.keywords.compile == true);
    }
    if (deleteVar) {
        array = array.filter(cards => cards.keywords.delete == true);
    }
    if (discard) {
        array = array.filter(cards => cards.keywords.discard == true);
    }
    if (draw) {
        array = array.filter(cards => cards.keywords.draw == true);
    }
    if (flip) {
        array = array.filter(cards => cards.keywords.flip == true);
    }
    if (give) {
        array = array.filter(cards => cards.keywords.give == true);
    }
    if (play) {
        array = array.filter(cards => cards.keywords.play == true);
    }
    if (rearrange) {
        array = array.filter(cards => cards.keywords.rearrange == true);
    }
    if (returnVar) {
        array = array.filter(cards => cards.keywords.return == true);
    }
    if (reveal) {
        array = array.filter(cards => cards.keywords.reveal == true);
    }
    if (refresh) {
        array = array.filter(cards => cards.keywords.refresh == true);
    }
    if (shift) {
        array = array.filter(cards => cards.keywords.shift == true);
    }
    if (shuffle) {
        array = array.filter(cards => cards.keywords.shuffle == true);
    }
    if (swap) {
        array = array.filter(cards => cards.keywords.swap == true);
    }
    if (take) {
        array = array.filter(cards => cards.keywords.take == true);
    }
    if (topDeck) {
        array = array.filter(cards => cards.keywords.topDeck == true);
    }
    if (trash) {
        array = array.filter(cards => cards.keywords.trash == true);
    }

    return array;
}

function displayCards(array) {
    $(".card-container").empty();

    $(array).each(function( index ) {
        let topBackground = this.top != "" ? "card-box--opaque" : "";
        let middleBackground = this.middle != "" ? "card-box--opaque" : "";
        let bottomBackground = this.bottom != "" ? "card-box--opaque" : "";

        $(".card-container").append(`
            <div class="card card--${this.protocol.toLowerCase()}">
                <div class="card__top">
                    <h2 class="card__protocol">${this.protocol}</h2>
                    <h2 class="card__value">${this.value}</h2>
                </div>
                <div class="card__body">
                    <div class="card__box ${topBackground}"><div>${this.top}</div></div>
                    <div class="card__box ${middleBackground}">${this.middle}</div>
                    <div class="card__box ${bottomBackground}">${this.bottom}</div>
                </div>
            </div>
        `)
      });
}