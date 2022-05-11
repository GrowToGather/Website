package main

import (
	"fmt"
	"math/rand"
	"sort"
	"strconv"
	"time"
)

func getAge(birthday string) int {
	today := time.Now().String()[:10]
	tYear, _ := strconv.Atoi(today[:4])
	bYear, _ := strconv.Atoi(birthday[:4])
	tMonth, _ := strconv.Atoi(today[5:7])
	bMonth, _ := strconv.Atoi(birthday[5:7])
	tDay, _ := strconv.Atoi(today[8:10])
	bDay, _ := strconv.Atoi(birthday[8:10])
	age := tYear - bYear
	if tMonth < bMonth || tMonth == bMonth && tDay < bDay {
		return age - 1
	}
	return age
}

type Participant struct {
	id      int
	name    string
	age     int
	matched []int
}

type Match struct {
	parts   []Participant
	matches []Room
	score   int
}

type Room struct {
	part1 Participant
	part2 Participant
}

func recent(part int, data []int) int {
	for k, v := range data {
		if part == v {
			return k
		}
	}
	return len(data)
}

func indexOf(part int, data []Participant) int {
	for k, v := range data {
		if part == v.id {
			return k
		}
	}
	return len(data)
}

func generateMatches(parts []Participant) []Room {
	rand.Shuffle(len(parts), func(i, j int) {
		parts[i], parts[j] = parts[j], parts[i]
	})
	var matches []Room
	for i := 0; i < int(len(parts)/2); i++ {
		matches = append(matches, Room{parts[i], parts[i+1]})
	}
	return matches
}

func (match Match) evaluateMatches() int {
	score := 0
	for i := 0; i < len(match.matches); i++ {
		score -= recent(match.matches[i].part1.id, match.matches[i].part2.matched) +
			recent(match.matches[i].part2.id, match.matches[i].part1.matched)
	}
	return score
}

func main() {

	var parts []Participant
	for i := 0; i < 10; i++ {
		parts = append(parts,
			Participant{i, "P" + strconv.Itoa(i), rand.Intn(13) + 18, []int{}})
	}
	for round := 1; round < 100; round++ {
		var matches []Match
		for i := 0; i < 100; i++ {
			matches = append(matches, Match{parts, generateMatches(parts), 0})
			matches[i].evaluateMatches()
		}

		for iter := 0; iter < 100; iter++ {
			sort.Slice(matches, func(i, j int) bool {
				return matches[i].score < matches[j].score
			})
			for i := 10; i < len(matches); i++ {
				matches[i] = Match{parts, generateMatches(parts), 0}
				matches[i].score = matches[i].evaluateMatches()
			}
		}
		fmt.Print(strconv.Itoa(matches[0].score) + "\n")
		for i := 0; i < len(matches[0].matches); i++ {
			parts[indexOf(matches[0].matches[i].part1.id, parts)].matched =
				append(parts[indexOf(matches[0].matches[i].part1.id, parts)].matched, matches[0].matches[i].part2.id)
			parts[indexOf(matches[0].matches[i].part2.id, parts)].matched =
				append(parts[indexOf(matches[0].matches[i].part2.id, parts)].matched, matches[0].matches[i].part1.id)
		}
		parts = matches[0].parts
		fmt.Print(matches[0].parts[0].matched)
		fmt.Print("\n")
	}

}
