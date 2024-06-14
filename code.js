let img;
function preload() {
    img = loadImage('Autito.jpg');
  }
function setup(){
 createCanvas(img.width,img.height)

 for(let posX = 0; posX < img.width; posX++){
  for(let posY = 0; posY < img.height; posY++){
    let c1 = img.get(posX,posY)
    
    let newR = 0.393 * c1[0] + 0.769 * c1[1] + 0.189 * c1[2]
    let newG = 0.349 * c1[0] + 0.686 * c1[1] + 0.168 * c1[2]
    let newB = 0.272 * c1[0] + 0.534 * c1[1] + 0.131 * c1[2]

    let promedio = [0,0,0,0]
     
     promedio[0] = newR
     promedio[1] = newG
     promedio[2] = newB
     promedio[3] = 100

    img.set(posX,posY,promedio)
  }
 }
 img.updatePixels();
}
function draw(){
image (img,0,0);
}
