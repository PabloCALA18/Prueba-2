//Defino las variables
let sprRana;
let sprCalle1;
let sprCalle2;

let sprAutito1;
let sprAutito2;

let toque = 0;

function setup() {
    createCanvas(800, 600);

    // Creo las calles
    sprCalle1 = createSprite(0, 200, 1800, 50);
    sprCalle1.shapeColor = color(255);

    sprCalle2 = createSprite(0, 400, 1800, 50);
    sprCalle2.shapeColor = color(255);
    //Creo los autitos 
    sprAutito1 = createSprite(0, 205, 30, 30);
    sprAutito1.shapeColor = color(255, 0, 0);
    sprAutito1.velocity.x = 2.5;


    sprAutito2 = createSprite(800, 405, 30, 30);
    sprAutito2.shapeColor = color(255, 0, 0);
    sprAutito2.velocity.x = -2.5;
    //Creo la rana
    sprRana = createSprite(300, 540, 40, 40);
    sprRana.shapeColor = color(0, 255, 0);

}
function draw() {
    background(60)
    fill(255)
    text('Fallaste ' + toque, 20, 30)

    // Que se reinicien al llegar al fina
    if (sprAutito1.position.x >= 800) {
        sprAutito1.position.x = 0;
    }
    if (sprAutito2.position.x <= 0) {
        sprAutito2.position.x = 800;
    }
    // Colision con los autitos
    if (sprRana.overlap(sprAutito1)) {
        sprRana.position.y = 540
        sprRana.position.x = 300
        toque++
    }
    if (sprRana.overlap(sprAutito2)) {
        sprRana.position.y = 540
        sprRana.position.x = 300
        toque++
    }
    //Si la rana llega al final ganaste
    if (sprRana.position.y == 0) {
        background(0, 255,0)
        fill(255, 0, 0)
        text('YOU WIN', 400, 300)
        fill(255, 0, 0)
        text('Fallaste ' + toque, 400, 330)
    }
    drawSprites();
}
//Movimiento de la rana
function keyPressed() {
    if (key == 'w') {
        sprRana.position.y -= 20;
    }
    if (key == 's') {
        sprRana.position.y += 20;
    }
    if (key == 'd') {
        sprRana.position.x += 20;
    }
    if (key == 'a') {
        sprRana.position.x -= 20;
    }
}