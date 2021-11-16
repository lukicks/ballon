var arco , flecha,  planoFundo;
var imagemArco, imagemFlecha, imagem_balaoVerde, imagem_balaoVermelho, imagem_balaoRosa ,imagem_balaoAzul, imagemdeFundo, gbg, gbr, gbp, gbb, gf, p ;

p = 0;

function preload(){
  imagemdeFundo = loadImage("background0.png"); 
  imagemFlecha = loadImage("arrow0.png"); 
  imagemArco = loadImage("bow0.png"); 
  imagem_balaoVermelho = loadImage("red_balloon0.png"); 
  imagem_balaoVerde = loadImage("green_balloon0.png"); 
  imagem_balaoRosa = loadImage("pink_balloon0.png"); 
  imagem_balaoAzul = loadImage("blue_balloon0.png");
  
}
  

function setup() {
  createCanvas(400, 400);
  
  cenario = createSprite(0,0,400,400);
  cenario.addImage(imagemdeFundo);
  cenario.scale = 2.5
  
  // criando arco para lançar a fecha
  arco = createSprite(380,220,20,50);
  arco.addImage(imagemArco); 
  arco.scale = 1;
  
  gbg = createGroup();
  gbr = createGroup();
  gbp = createGroup();
  gbb = createGroup();
  gf = createGroup();
}

function draw() {
 background(0);
  // movendo o solo
    cenario.velocityX = -3 

    if (cenario.x < 0){
      cenario.x = cenario.width/2;
    }

  
  //movendo o arco
  arco.y = mouseY;
  
   // lançar flecha quando tecla de espaço é pressionada
  if (keyDown("space")) {
    criarFlecha();
    
  }
  
  //criando balões contínuos
  var selecionar_balao = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selecionar_balao == 1) {
      balaoVermelho();
    } else if (selecionar_balao == 2) {
      balaoAzul();
    } else if (selecionar_balao == 3) {
      balaoVerde();
    } else if (selecionar_balao == 4) {
      balaoRosa();
    }
  }
  
  if (gf.isTouching(gbg)) {
    gbg.destroyEach();
    gf.destroyEach();
    p = p + 1;
  }
  
  if (gf.isTouching(gbr)) {
    gbr.destroyEach();
    gf.destroyEach();
    p = p + 1;
  }
  
  if (gf.isTouching(gbb)) {
    gbb.destroyEach();
    gf.destroyEach();
    p = p + 1;
  }
  
  if (gf.isTouching(gbp)) {
    gbp.destroyEach();
    gf.destroyEach();
    p = p + 1;
  }
  
  drawSprites();
  
  fill("black");
  text("Pontuação: " + p, 175, 15);
  
}


// Criando flechas para o arco
 function criarFlecha() {
  var flecha = createSprite(100, 100, 60, 10);
  flecha.addImage(imagemFlecha);
  flecha.x = 360;
  flecha.y= arco.y;
  flecha.velocityX = -4;
  flecha.lifetime = 100;
  flecha.scale = 0.3;
   
  gf.add(flecha);
}


function balaoVermelho() {
  var vermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  
  gbr.add(vermelho);
}

function balaoAzul() {
  var azul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  azul.addImage(imagem_balaoAzul);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
  gbb.add(azul);
}

function balaoVerde() {
  var verde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  verde.addImage(imagem_balaoVerde);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
  
  gbg.add(verde);
}

function balaoRosa() {
  var rosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  rosa.addImage(imagem_balaoRosa);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1.25;
  
  gbp.add(rosa);
}
