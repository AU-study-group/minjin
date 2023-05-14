
// var count = 5;
// function countdown() {
//   if (count > 0) {
//     count--;
//     setTimeout(countdown, 1000);
//   } else {
//     alert("품절 되었습니다.");
//   }
// }
// countdown();

function countdown() {
  var spanElement = document.getElementById("countdown");
  var count = parseInt(spanElement.innerHTML);

  if (count > 0) {
    count--;
    spanElement.innerHTML = count;
  } else {
    alert("품절 되었습니다.");
    clearInterval(timer); 
  }
}

var timer = setInterval(countdown, 1000);