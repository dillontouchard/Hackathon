function setup() {
    createCanvas(1000, 1000) ;
    colorMode(HSB);
    angleMode(DEGREES);
}
function draw() {
    background (220)
    noStroke();
  
    //loop steps through 36 times drawing 
    //a circle with a separate hue each time
    
    for (let i = 0;i<36;i++){
      
    //determines position of circles
      x = 200 + 100*cos(i*10);
      y = 200 + 100*sin(i*10);
    
    //i * 10 allows to cover the entire hue range
    //the first circle has a hue of 0*10 = 0
    // last circle has has a hue of 35*10 = 350
    // hue of 0 and 360 are identical
      
      fill(i*10,100,100);
      circle(x,y,50);
    }
    fill(255, 204, 100);
    square(600, 100, 60);
}



       


    


