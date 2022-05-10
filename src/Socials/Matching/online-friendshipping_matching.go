package main

import (
	"fmt"
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
	name string
	age  int
}

type Match struct {
}

func main() {
	part := Participant{"Andreas", getAge("1999-07-17")}

	output := strconv.Itoa(part.age)
	fmt.Printf(output)

}
