var renderStatistics = function (ctx, names, times) {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_GAP = 10;
  var barCorrection = CLOUD_HEIGHT / 9;
  var maxTime = times[0];
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  var renderCloud = function (context, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }; // функция отрисовки окна статистики

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgb(0, 0, 0)'); // рисуем тень
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(7, 245, 7)'); // рисуем белый прямоугольник

  for (var i = 1; i <= times.length - 1; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  } // ищем наибольшее время
  ctx.font = '16px pt mono'; // задаем шрифт
  ctx.fillStyle = 'rgb(0, 0, 0)'; // задаем цвет
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * CLOUD_GAP, CLOUD_Y + CLOUD_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * CLOUD_GAP, CLOUD_Y + 2 * CLOUD_GAP);
  for (i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (i * (BAR_WIDTH + BAR_GAP)), CLOUD_HEIGHT - CLOUD_GAP);
    if (names [i] === 'Вы') {
      ctx.fillStyle = 'rgb(227, 5, 30)';
    } else {
      ctx.fillStyle = 'rgb(0, 8, 237)';
    }
    var actualTime = Math.round((BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (i * (BAR_WIDTH + BAR_GAP)), CLOUD_HEIGHT - barCorrection - actualTime, BAR_WIDTH, actualTime);
  } // рисуем статистику
};
