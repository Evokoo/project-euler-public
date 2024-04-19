// Poker Hands - Problem 054
// https://projecteuler.net/problem=54

/* See link for description */

import readTextFile from "../000/readTextFile";

type RankedHand = {
	handType: string;
	winningHand: number[][];
	score: number;
	cards: number[];
};
type Result = {
	ROYAL_FLUSH: boolean;
	STRAIGHT_FLUSH: boolean;
	FOUR_OF_A_KIND: boolean;
	FULL_HOUSE: boolean;
	FLUSH: boolean;
	STRAIGHT: boolean;
	THREE_OF_A_KIND: boolean;
	TWO_PAIR: boolean;
	ONE_PAIR: boolean;
	HIGH_CARD: number[];
	SUITS: string;
};

function sortCards(cards: string[]): string[] {
	const hand: string[] = Array.from({ length: 15 }, () => "");

	for (let card of cards) {
		const [value, suit] = [...card];

		switch (value) {
			case "A":
				hand[0] += suit;
				hand[14] += suit;
				break;
			case "T":
				hand[10] += suit;
				break;
			case "J":
				hand[11] += suit;
				break;
			case "Q":
				hand[12] += suit;
				break;
			case "K":
				hand[13] += suit;
				break;
			default:
				hand[+value - 1] += suit;
				break;
		}
	}

	return hand;
}
function rankHand(cards: string[]): RankedHand {
	const hand: string[] = sortCards(cards);
	const RESULTS: Result = {
		ROYAL_FLUSH: false,
		STRAIGHT_FLUSH: false,
		FOUR_OF_A_KIND: false,
		FULL_HOUSE: false,
		FLUSH: false,
		STRAIGHT: false,
		THREE_OF_A_KIND: false,
		TWO_PAIR: false,
		ONE_PAIR: false,
		HIGH_CARD: [],
		SUITS: "",
	};
	const RESULTS_SCORE: Record<string, number> = {
		ROYAL_FLUSH: 10,
		STRAIGHT_FLUSH: 9,
		FOUR_OF_A_KIND: 8,
		FULL_HOUSE: 7,
		FLUSH: 6,
		STRAIGHT: 5,
		THREE_OF_A_KIND: 4,
		TWO_PAIR: 3,
		ONE_PAIR: 2,
		HIGH_CARD: 1,
	};

	//Flush & Straight Check
	for (let i = 0; i <= 15 - 5; i++) {
		const selection = hand.slice(i, i + 5);

		if (selection.every((suit) => suit.length === 1)) {
			const chain = selection.join("");

			if (chain === chain[0].repeat(5)) {
				if (i === 10) {
					RESULTS.ROYAL_FLUSH = true;
				} else {
					RESULTS.STRAIGHT_FLUSH = true;
				}
			} else {
				RESULTS.STRAIGHT = true;
			}
			break;
		}
	}

	hand[0] = "";
	const WINNING_HAND = [];

	//Pairs, Three of a Kind, Four of a Kind and Full House check
	for (let [value, suits] of hand.entries()) {
		RESULTS.SUITS += suits;

		const cardValues = Array(suits.length).fill(value + 1);
		RESULTS.HIGH_CARD = [...cardValues, ...RESULTS.HIGH_CARD];

		switch (suits.length) {
			case 2:
				if (RESULTS.THREE_OF_A_KIND) {
					RESULTS.FULL_HOUSE = true;
					WINNING_HAND.push(cardValues);
				} else if (RESULTS.ONE_PAIR) {
					RESULTS.TWO_PAIR = true;
					WINNING_HAND.push(cardValues);
				} else {
					RESULTS.ONE_PAIR = true;
					WINNING_HAND.push(cardValues);
				}
				break;
			case 3:
				if (RESULTS.ONE_PAIR) {
					RESULTS.FULL_HOUSE = true;
					WINNING_HAND.push(cardValues);
				} else {
					RESULTS.THREE_OF_A_KIND = true;
					WINNING_HAND.push(cardValues);
				}
				break;
			case 4:
				RESULTS.FOUR_OF_A_KIND = true;
				WINNING_HAND.push(cardValues);
				break;
			default:
				break;
		}

		if (RESULTS.SUITS && RESULTS.SUITS === RESULTS.SUITS[0].repeat(5)) {
			RESULTS.FLUSH = true;
		}
	}

	for (let [type, result] of Object.entries(RESULTS)) {
		if (result) {
			return {
				handType: type,
				score: RESULTS_SCORE[type],
				cards: RESULTS.HIGH_CARD,
				winningHand: WINNING_HAND.sort((a, b) => b.length - a.length),
			};
		}
	}

	throw Error("Something went wrong?");
}

function playPoker(filename: string) {
	const input: string[] = readTextFile(filename).split("\r\n");
	const score = { p1: 0, p2: 0 };

	games: for (let game of input) {
		const cards = game.split(" ");
		const p1 = rankHand(cards.slice(0, 5))!;
		const p2 = rankHand(cards.slice(5))!;

		if (p1.score > p2.score) {
			score.p1++;
		} else if (p2.score > p1.score) {
			score.p2++;
		} else {
			for (let i = 0; i < p1.winningHand.length; i++) {
				if (p1.winningHand[i][0] > p2.winningHand[i][0]) {
					score.p1++;
					continue games;
				}

				if (p2.winningHand[i][0] > p1.winningHand[i][0]) {
					score.p2++;
					continue games;
				}
			}

			for (let i = 0; i < 5; i++) {
				if (p1.cards[i] > p2.cards[i]) {
					score.p1++;
					continue games;
				}

				if (p2.cards[i] > p1.cards[i]) {
					score.p2++;
					continue games;
				}
			}
		}
	}

	return score.p1;
}

console.log(playPoker("poker"));
