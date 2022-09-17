var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
playerX=10;
playerY=10;
var playerObject="";

function Player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,left:playerX
        });
        canvas.add(playerObject)
    });
}

function NewImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(block_image_width);
        blockImageObject.scaleToHeight(block_image_height);
        blockImageObject.set({
            top:playerY,left:playerX
        });
        canvas.add(blockImageObject)
    }); 
}

window.addEventListener("keydown",myKeyDown);
function myKeyDown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80'){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("currentWidth").innerHTML=block_image_width;
        document.getElementById("currentHeight").innerHTML=block_image_height;
    }

    if(e.shiftKey==true && keyPressed=='77'){
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("currentWidth").innerHTML=block_image_width;
        document.getElementById("currentHeight").innerHTML=block_image_height;
    }

    if(keyPressed=='37'){
        console.log("left");
        left();
    }

    if(keyPressed=='38'){
        console.log("up");
        up();
    }

    if(keyPressed=='39'){
        console.log("right");
        right();
    }

    if(keyPressed=='40'){
        console.log("down");
        down();
    }

    if(keyPressed=='87'){
        console.log("W");
        NewImage("wall.jpg");
    }

    if(keyPressed=='71'){
        console.log("G");
        NewImage("ground.png");
    }

    if(keyPressed=='76'){
        console.log("L");
        NewImage("light_green.png");
    }

    if(keyPressed=='84'){
        console.log("T");
        NewImage("trunk.jpg");
    }

    if(keyPressed=='82'){
        console.log("R");
        NewImage("roof.jpg");
    }

    if(keyPressed=='89'){
        console.log("Y");
        NewImage("yellow_wall.png");
    }

    if(keyPressed=='68'){
        console.log("D");
        NewImage("dark_green.png");
    }
    if(keyPressed=='85'){
        console.log("U");
        NewImage("different.png");
    }
    
    if(keyPressed=='67'){
        console.log("C");
        NewImage("cloud.jpg");
    }
}
function up(){
    if(playerY>=0){
        playerY=playerY-block_image_height;
        canvas.remove(playerObject);
        Player_update();
    }
}

function down(){
    if(playerY<=500){
        playerY=playerY+block_image_height;
        canvas.remove(playerObject);
        Player_update();
    }
}

function right(){
    if(playerX<=700){
        playerX=playerX+block_image_width;
        canvas.remove(playerObject);
        Player_update();
    }
}

function left(){
    if(playerX>=0){
        playerX=playerX-block_image_width;
        canvas.remove(playerObject);
        Player_update();
    }
}