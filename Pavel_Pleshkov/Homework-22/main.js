//task6

function countVowelLetters(text) {
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

    return [...text.toLowerCase()].filter( letter => {
         return vowelLetters.includes(letter);
    }).length;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12