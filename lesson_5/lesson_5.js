
document.querySelector("#back").addEventListener("click", () => {
   generate();
});
document.querySelector("#generate").addEventListener("click", () => {
   generate();
});
document.querySelector("#next").addEventListener("click", () => {
   generate();
});

let index = -1;
generate = (arg = "generate") => {
    let quotes = {
        "- indira gandi": '"«История – самый лучший учитель, у которого самые плохие ученики»."',
        "- Andrei": '"«Ядерную войну невозможно выиграть»."',
        "- Napaleon ": '"«Дай человеку власть, и ты узнаешь, кто он»"',
        "- Bernard ": '"«Мой способ шутить – это говорить правду. На свете нет ничего смешнее»"',
        "- luter King": '"«Если человек не нашёл, за что может умереть, он не способен жить»"',
        "- Ruzvelt ": '"«Никогда не ошибается тот, кто ничего не делает»."',
        "- Koko Shanel ": '"«Мода проходит, стиль остаётся»."',
        "- Ford ": '"«Чем умнее человек, тем легче он признает себя дураком». ."',

}
let authors = Object.keys(quotes);
if (arg === "back") {
    if (index >= 1) {
        index--
    }else {
        index = authors.length -1;
    }
} else if (arg === "next") {
    if (index < authors.length -1) {
        index++
    } else {
        index = 0
    }
} else if (arg === "generate") {
    index = Math.floor(Math.random() * authors.length)
}

let author = authors[index]
let quote = quotes[author]

document.querySelector("#quote").textContent = quote
document.querySelector("#author").textContent = author
}