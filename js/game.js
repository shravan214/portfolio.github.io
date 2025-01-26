const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Draw a placeholder
ctx.fillStyle = 'lightgray';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';
ctx.font = '20px Arial';
ctx.fillText('Interactive Construction Game Coming Soon!', 150, 300);
