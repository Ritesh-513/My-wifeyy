const text =
  "Dear Wifeyy❤️ ,  I wnna Say Something.         Every passing day without you feels like a piece of me is missing. Your laughter, your kindness, your unwavering support—these are the things I find myself craving more than ever. Life seems a little less colorful without your presence by my side. There's a void in my heart that only your love can fill. Do you remember the first trip of titwala you keep touching on waist and then you hugged from back 🫣  From spontaneous road trips to quiet nights spent stargazing, each memory is attached in my mind like a precious gem. Those moments weren't just fleeting instances; they were the building blocks of a bond that I hold dearer than words can express.I miss our late-night conversations and late-night video calls that stretched into the early hours of the morning, where we bared our souls and shared our dreams without reservation. There's a unique comfort in being able to be completely yourself with someone, and that's a comfort I find only in you.Let's make a promise to each other—to never let the miles between us dull the spark of our unbreakable love ❤️. I long for the day when we can reunite to each other's family unite with official marriage bond, to laugh until our stomachs ache and create new memories that will last a lifetime. Until then, I'll hold onto the memories we've made and keep you close in my thoughts and prayers.With each passing day, my anticipation grows stronger, knowing that soon we'll be able to wrap each other in tight hugs and and wet smooches 🤤. Until that moment arrives, know that you are dearly missed and loved more than words can convey.    .................... I love u My wifeyy❤️❤️";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
