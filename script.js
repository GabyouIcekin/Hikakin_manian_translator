"use strict"

const form = document.getElementById("form");
const button = document.getElementById("button");
const result = document.getElementById("result");

let input;

button.addEventListener("click", () => {
    input = form.value;
    const letters = {
        "う": "、ゥ",
        "ウ": "、ゥ",
        "です。": "だなぁ、そうに決まってる。",
        "今": "過去と未来の狭間",
        "え": "、ェ",
        "気持ち悪い": "ｷﾓﾁﾜﾘｨw",
        "エ": "、ェ",
        "ち": "...ﾁ",
        "できない": "できなぁーい!",
        "出来ない": "できなぁーい!",
        "ない": "ﾅｲ!",
        "無い": "ﾅｲ!",
        "すぎる": "ｽｷﾞﾙ...!",
        "過ぎる": "ｽｷﾞﾙ...!",
        "まん": "満",
        "マン": "満",
        "万": "満",
        "したい": "したいぃぃぃ!",
        "めっちゃ": "メッサ",
        "やった": "ｲﾔｧｯﾀｧｰ!",
        "ど": "D♪",
        "ド": "D♪",
        "ション": "ション!?",
        "出た": "出たー!出。!出たぁ...",
        "ます。": "ますカキ。",
    };

    for (const [oldWord, newWord] of Object.entries(letters)) {
        const regex = new RegExp(oldWord, "g");
        input = input.replace(regex, newWord);
    }

    result.textContent = input;
});



