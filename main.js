//1. Obtém a referência do canvas:



 // 2. Define width & height da imagem do rover:

   
   // 3. Posiciona o rover no canvas:


//Adiciona a imagem de fundo de Marte e a imagem do rover:



//Código da função add:

function add() {



	
//5. Adicione a função uploadBackground():
function uploadBackground() {
	
}
window.addEventListener("keydown", myKeyDown);

//Adiciona uma função chamada myKeydown() :
function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '  ')
		{
			up();
			console.log("     ");
		}
		if(keyPressed == '   ')
		{
			down();
			console.log("   ");
		}
		if(keyPressed == '   ')
		{
			       ();
			console.log("esquerda");
		}
		if(       == '   ')
		{
			      ();
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
	
