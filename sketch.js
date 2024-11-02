let hgirl;
let next;
let noteo;
let play;
let notet;
var state = 0;
var nextButton, playButton;







function preload() {




    // Hide buttons initially, as they will be shown based on the state
    
   
    hgirl = loadImage("assets/hgirl.png");
    next = loadImage("assets/next.png");
    noteo = loadImage("assets/noteo.png");
    notet = loadImage("assets/notet.png");
    play = loadImage("assets/play.png");


  }


  function setup() {
    createCanvas(2277,1115);
    
    nextButton = createImg("assets/next.png");
    nextButton.position(100, 30);
    nextButton.mousePressed(() => state = 3);  // Set to a different state on click

   
    playButton = createImg("assets/play.png");
    playButton.position(100,80);
    playButton.mousePressed(() => state = 1);  // Set another state on click


    // Hide buttons initially, as they will be shown based on the state

    
    //nextButton.hide();
    //playButton.hide();
    
   
    
 

   
    
  }

  function draw() {

     switch (state) {
        case 0:
         background(173, 216, 230);
         image(hgirl, 30,30);
         playButton.show();
         nextButton.hide();

         
         
          break;
    
        case 1:
            background(173, 216, 230);
            image(noteo, 100, 20);
            playButton.hide();
            nextButton.show();
            


            

            break;


     }

    

  }
  
  function mousePressed() {

    //if (playButton.mousePressed()) {

        //state = 1
    //}

    
  }
  
  
