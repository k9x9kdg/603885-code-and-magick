var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_X = CLOUD_X + BAR_WIDTH;
var barCorrection = CLOUD_HEIGHT / 9;
var gap = BAR_WIDTH + BAR_GAP;

var getMaxTime = function (times) {
  var maxTime = times[0];
  for (var i = 1; i <= times.length - 1; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }
  return maxTime; // находим максимальное время
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}; // функция отрисовки окна статистики

var renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)'); // рисуем тень
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255, 255, 255, 1)'); // рисуем белый прямоугольник
  getMaxTime(times);
  ctx.font = '16px pt mono'; // задаем шрифт
  ctx.fillStyle = 'rgb(0, 0, 0)'; // задаем цвет
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * CLOUD_GAP, CLOUD_Y + 3 * CLOUD_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * CLOUD_GAP, CLOUD_Y + 5 * CLOUD_GAP);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(names[i], BAR_X + (i * gap), CLOUD_HEIGHT - CLOUD_GAP);
    if (names [i] === 'Вы') {
      ctx.fillStyle = 'rgb(227, 5, 30)';
    } else {
      ctx.fillStyle = 'rgb(' +  getRandomInt(1, 155) + ',' +
        getRandomInt(1, 155) + ', 255)';
    }
    var actualTime = Math.round((BAR_HEIGHT * times[i]) / getMaxTime(times));
    var barY = CLOUD_HEIGHT - barCorrection - actualTime - CLOUD_GAP;
    ctx.fillRect(BAR_X + (i * gap), barY + CLOUD_GAP, BAR_WIDTH, actualTime);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(Math.round(times[i]), BAR_X + (i * gap), barY);
  } // рисуем статистику
};
