'use strickt'

window.renderStatistics = function(ctx, names, times) {
	
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(110,20,420,270);
	ctx.fillStyle = 'white';
	ctx.fillRect(100,10,420,270);
	ctx.fillStyle = '#000';
	ctx.font='16px PT Mono';
	ctx.fillText('Ура, вы победили!', 140, 40);
	ctx.fillText('Список результатов: ', 140, 58);
	
	
	var max = 0;
	var indexMax = 0;
	for (var i = 0; i <= times.length; ++i) { //Находим все эл-ты массива.
		var time = times[i];//
		if(time > max) { //Ищем наибольшее значение в times[]; //Почему не работает if(times[i] > max){}?
			max = time; //Передаем значение в var max;
		}
		};
	};

	var histagramHeight = 120;
	var histogramDinHeight = histagramHeight / max; 
	var histagramWidth = 40;
	var histagramIndent = 90;
	var randomNumber = Math.random();
	var myColor = 'rgba(255, 0, 0, 1)';
	var playersColor = 'rgba(0, 0, 255, randomNumber)';

	for (var i = 0; i < times.length; i++) {
	
		ctx.fillRect(150 + histagramIndent * i, 240, histagramWidth, histogramDinHeight * -times[i]);
		ctx.fillText(names[i], 150 + histagramIndent * i, 260);
		ctx.fillStyle = 'blue';
		ctx.fillText(times[i].toFixed(0), 150 + histagramIndent * i, histogramDinHeight * -times[i]); 

	}
		 


	}; 



