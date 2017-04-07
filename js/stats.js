'use strict';
window.renderStatistics = function (ctx, names, times) {
  function cloud(color, indent) {
    ctx.fillStyle = color;
    ctx.fillRect(100 + indent, 10 + indent, 420, 270);
  }
  function textInCloud(text, indentX, indentY) {
  	ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(text, indentX, 40 + indentY);
  }
	function drowStatsHistograms() {
    function maxTime() { 
      var max = 0;
      for (var i = 0; i <= times.length; ++i) {
        if (times[i] > max) {
          max = times[i];
        }
      }
      return max;
    }
  var histagramHeight = 120;
  var histogramDinHeight = histagramHeight / maxTime();
  var histagramWidth = 40;
  var histagramIndent = 90;
  var myColor = 'rgba(255, 0, 0, 1)';
  var playersColor = function () {
    return 'rgba(0, 0, 255,' + Math.random() + ')';
  };
  for (var i = 0; i < times.length; i++) {
    var dinColor = function () {
      if (names[i] !== 'Вы') {
        ctx.fillStyle = playersColor();
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
	}
	cloud('rgba(0, 0, 0, 0.7)', 10);
  cloud('white', 0);
  textInCloud('Ура, вы победили!', 140, 0);
  textInCloud('Список результатов: ', 140, 20);
	drowStatsHistograms();
};
