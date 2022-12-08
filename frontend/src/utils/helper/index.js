export function drawSegment(ctx, [mx, my], [tx, ty], color) {
  ctx.beginPath();
  ctx.moveTo(mx * 1.5, my * 1.5);
  ctx.lineTo(tx * 1.5, ty * 1.5);
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();
}

export function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
