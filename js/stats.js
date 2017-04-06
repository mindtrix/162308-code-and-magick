'use strickt';
window.renderStatistics = function (ctx, names, times) {
  function cloud(color, indent) {
      ctx.fillStyle = color;
      ctx.fillRect(100 + indent, 10 + indent, 420, 270);
    }
  cloud('rgba(0, 0, 0, 0.7)', 10);
  cloud('white', 0);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  function textInCloud(text, indentX, indentY) {
    ctx.fillText(text, indentX, 40 + indentY);
    ctx.fillText(text, indentX, 40 + indentY);
  }
  textInCloud('Ура, вы победили!', 140, 0);
  textInCloud('Список результатов: ', 140, 20);
  var max = 0;
  for (var i = 0; i <= times.length; ++i) { 
    var time = times[i];
    if(times[i] > max) { 
      max = times[i]; 
    }
  }
  var histagramHeight = 120;
  var histogramDinHeight = histagramHeight / max; 
  var histagramWidth = 40;
  var histagramIndent = 90;
  var myColor = 'rgba(255, 0, 0, 1)'; 
  var playersColor = 'rgba(0, 0, 255, Math.random())';
  for (var i = 0; i < times.length; i++) {
    var dinColor = function () {
      if (names[i] !== 'Вы') {
        ctx.fillStyle = playersColor;
      } else {
        ctx.fillStyle = myColor;
      }
    };
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], 150 + histagramIndent * i, 260);
    ctx.fillText(times[i].toFixed(0), 150 + histagramIndent * i, 240 - histogramDinHeight * times[i] - 20);
    ctx.fillStyle = dinColor();
    ctx.fillRect(150 + histagramIndent * i, 240, histagramWidth, histogramDinHeight * -times[i]);
  }
};


