//1. Obtém a referência do canvas:
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


 // 2. Define width & height da imagem do rover:
roverWidth = 100;
roverHeight = 90;
   
   // 3. Posiciona o rover no canvas:
roverX = 10;
roverY = 10;

//Adiciona a imagem de fundo de Marte e a imagem do rover:
backgroundImage = "mars.jpg";

roverImage = "rover.png";
//Código da função add:

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}
//5. Adicione a função uploadBackground():
function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
window.addEventListener("keydown", myKeyDown);

//Adiciona uma função chamada myKeydown() :
function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
}








}
//Atividade Adicional
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("Quando a seta para a esquerda é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
//Fim da Atividade Adicional.
	
