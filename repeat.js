// 0) Ввод имени пользователя 
let username = prompt ('Как Вас зовут?','');
if (username == ''){username = 'Гость'}
  alert('Добро пожаловать, ' + username + '!');
document.getElementById('namediv').innerHTML="Здравствуйте,  " + username;
document.getElementById('nameTime').innerHTML= username;

// 1) Рассчёт площади треугольника
button1.onclick = function() {
var h = document.getElementById('height').value;
var w = document.getElementById('width').value;
document.getElementById('res').innerHTML="Ответ: "+ (h*w)/2;
};

// 2) Сравнение длин строк
var str1 = document.getElementById("text1");
var str2 = document.getElementById("text2");
var el_down = document.getElementById("string");
function lenghtRun() {
  var a = str1.value;
  var b = str2.value;
  var ans = a.localeCompare(b);
  var res = "";
  if (ans == -1) {
    res = '"' + a + '" короче чем "' + b + '"';
    } else if (ans == 0) {
      res = 'Строки равны';
    } else {
      res = '"' + a + '" длиннее чем "' + b + '"';
    }
    el_down.innerHTML = res;
}

// 3) Сравнение длин множества строк 
superButton.onclick = function() {
  var superString = document.getElementById('superString').value;
  function findLeinght(superStr) {
    var longestWord = superStr.split(' ').sort(function(a, b) { return b.length - a.length; });
    var shortestWord = superStr.split(' ').sort(function(a, b) { return a.length - b.length; });
    document.getElementById('superStr').innerHTML="Количество символов в самой длинной: "+  longestWord[0].length + " ; Количество символов в самой короткой: " + shortestWord[0].length + " ;";
    }
  findLeinght(superString);
  };

// Дата
Data = new Date();
Year = Data.getFullYear();
Month = Data.getMonth();
Day = Data.getDate();
switch (Month)
{
  case 0: fMonth=".01."; break;
  case 1: fMonth=".02."; break;
  case 2: fMonth=".03."; break;
  case 3: fMonth=".04."; break;
  case 4: fMonth=".05."; break;
  case 5: fMonth=".06."; break;
  case 6: fMonth=".07."; break;
  case 7: fMonth=".08."; break;
  case 8: fMonth=".09."; break;
  case 9: fMonth=".10."; break;
  case 10: fMonth=".11."; break;
  case 11: fMonth=".12."; break;
}
Hour = Data.getHours();
Minutes = Data.getMinutes();
Seconds = Data.getSeconds();

document.getElementById('TimeTime').innerHTML= Day + fMonth + Year + "  " + Hour + ":" + Minutes + ":" + Seconds;
  


// 4) Таймер 

var sec = 0;
var min = 0;
var hour = 0;
var timerId;
function TimerTimer() {
  sec = document.getElementById('s').value;
  min = document.getElementById('m').value;
  hour = document.getElementById('h').value;
  timerId = setInterval(StopwatchStopwatch, 1000);

    function StopwatchStopwatch() {
      if(min>0 && document.getElementById('m').value != null && document.getElementById('h').value != null && document.getElementById('s').value != null) {
        if(sec == 0){
          sec = sec + 60;
          min --;
        }
        if (document.getElementById('m').value != null || document.getElementById('h').value != null || document.getElementById('s').value != null){
            sec = sec - 2;
        }else{sec  ++;}
        
      }
      else{
        min = 0;
      }
      if(min>=0){
        if (sec >= 59){
          sec = 0;
          min ++;
        }
        sec  ++;
      }
      if(hour>0 && document.getElementById('h').value != null){
        if (min == 0) {
          min = min +60;
          hour --;
        }
        min --;
      }
      else{
        hour = 0;
      }

      document.getElementById('hor').innerHTML= "Часы: " + hour;
      document.getElementById('min').innerHTML= "Минуты: " + min;
      document.getElementById('sec').innerHTML= "Секунды: " + sec;
      end.onclick = function(){clearInterval(timerId);}
    } 

}     
start.onclick = TimerTimer;

  // 5) Тест  

function summary() {
  let count = document.getElementsByClassName('question').length;
  let answers = document.querySelectorAll('.question');
  let score = 0;
  let rightAnswers = ["q1_1", "q2_3", "q3_2", "q4_1", "q5_2", "q6_2", "q7_3", "q8_3", "q9_3", "q10_1"]
  let test_ans = document.getElementById("TestFin");
  for (let i = 0; i < count; i++) {
    let chosenAnswer = answers[i].querySelector("input[type='radio']:checked"); 
    if (chosenAnswer && chosenAnswer.id == rightAnswers[i]){ score++; }
    test_ans.innerHTML  =  "Правильных ответов: " + score +"/10";
  }
}


// 6) Всплывающее окно 
 var modal = document.getElementById("my_modal");
 var btn = document.getElementById("btn_modal_window");
 var span = document.getElementsByClassName("close_modal_window")[0];

 btn.onclick = function () {
    modal.style.display = "block";
 }

 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}