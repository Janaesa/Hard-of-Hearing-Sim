let hgirl;
let next;
let noteo;
let play;
let notet;
let storm;
let cafe;
var state = 0;
let gifTimer = 0;  // Timer for playing the GIF
let gifDuration = 6 * 60;  // 6 seconds in frames (60 FPS)

var nextButton, playButton, stormButton, arrowmButton;

let arrowm, girlp, hearing, lips, nega, pluss, subt;

var lipsButton, negaButton, plussButton, subtButton;

let mouthg, girlg;


function preload() {

    // Hide buttons initially, as they will be shown based on the state
    
   
    hgirl = loadImage("assets/hgirl.png");
    next = loadImage("assets/next.png");
    noteo = loadImage("assets/noteo.png");
    notet = loadImage("assets/notet.png");
    play = loadImage("assets/play.png");
    storm = loadImage("assets/storm.png");
    cafe = loadImage("assets/cafe.png");

    arrowm = loadImage("assets/arrowm.png");
    girlp = loadImage("assets/girlp.png");
    hearing = loadImage("assets/hearing.png");
    lips = loadImage("assets/lips.png");
    nega = loadImage("assets/nega.png");
    pluss = loadImage("assets/pluss.png");
    subt = loadImage("assets/subt.png");


    girlgGif = createImg("assets/girlg.GIF"); // Keep the GIF as an HTML element
    mouthgGif = createImg("assets/mouthg.GIF"); // Keep the GIF as an HTML element


  





  }


  function setup() {
    createCanvas(2277,1115);

    background(173, 216, 230);
         image(hgirl, 30,30);


         mouthgGif.position(100, 50);
         mouthgGif.hide();

         girlgGif.position(100,10);
         girlgGif.hide();
         


    //girlgGif = createImg("assets/girlg.GIF"); // Keep the GIF as an HTML element
    //girlgGif.hide();
    
    nextButton = createImg("assets/next.png");
    nextButton.position(1120, 900);
    nextButton.mousePressed(() => state = 2);  // Set to a different state on click
   
   
    playButton = createImg("assets/play.png");
    playButton.position(890,800);
    playButton.mousePressed(() => state = 1);  // Set another state on click

    lipsButton = createImg("assets/lips.png");
    lipsButton.position(40, 370);
    lipsButton.mousePressed(() => state = 4);  // Set another state on click

    stormButton = createImg("assets/storm.png");
    stormButton.position(1000, 900);
    stormButton.mousePressed(() => state = 3);  // Set another state on click

    arrowmButton = createImg("assets/arrowm.png");
    arrowmButton.position(5, -10);
    arrowmButton.mousePressed(() => state = 3);  // Set another state on click

    subtButton = createImg("assets/subt.png");
    subtButton.position(40, 700);
    subtButton.mousePressed(() => state = 5);  // Set another state on click
    subtButton.hide();
   
  }

  function draw() {

     switch (state) {
        case 0:
         background(173, 216, 230);
         image(hgirl, 30,30);
         playButton.show();
         nextButton.hide();
         stormButton.hide();
         lipsButton.hide();
         arrowmButton.hide();
        
        
          break;
    
        case 1:
            background(173, 216, 230);
            image(noteo, 100, 20);
            playButton.hide();
            nextButton.show();
            stormButton.hide();
            arrowmButton.hide();
          
            //lipsBotton.hide();
            
            break;

        case 2:
            background(173,216,230);
            image(notet, 100,20);
            playButton.hide();
            nextButton.hide();
            stormButton.show();
            arrowmButton.hide();
            //lipsBotton.hide();
         
            
            


            break;

        case 3:
          background(173,216,230)
          image(cafe,0, 0);
          image(hearing, 30, 5);
          lipsButton.show();
          arrowmButton.hide();
          mouthgGif.hide();
          subtButton.show();

          //image(lips, 10,70)
          
          stormButton.hide(0);

          girlgGif.show();

          break;


          case 4:

          background(173,216,230)
          image(cafe,0, 0);
          mouthgGif.show();
          arrowmButton.show();
          //playButton.hide();
          //nextButton.hide();
          //stormButton.hide();
          lipsButton.hide();
          subtButton.hide();


          break;

          
          }

         
          

        

      

     }

    

  
  
  function mousePressed() {

   

    
  }
  

  //playButton.hide();
  //nextButton.hide();
 // stormButton.show();
 // arrowmButton.hide();
 // lipsButtom.hide();
 // plussButton.show();
  //hearingButton.show();
  //girlgGif.hide();
  
