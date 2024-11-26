// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
    let upperStr1 = str1.toUpperCase();
    let upperStr2 = str2.toUpperCase();   
    const minLength = Math.min(upperStr1.length, upperStr2.length);
    let equalLetters = 0;
    for (let i = 0; i < minLength; i++) {
      if (upperStr1[i] === upperStr2[i]) {
        equalLetters++
      }
    }
    return equalLetters;
  }

module.exports = equalLetterPositions;
