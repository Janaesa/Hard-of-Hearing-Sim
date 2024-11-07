let hgirl;
let next;
let noteo;
let play;
let notet;
let storm;
let cafe;
let laughr;
let readl;
let sadr;
let seriousr;
let waitwhatr;
let losings;
let yikest;
let brestart;
let wins;
let nextlevelb;


let goshb, subtitless, wrongb, boff;



var state = 8;


let gifTimer = 0;  // Timer for playing the GIF
let gifDuration = 6 * 60;  // 6 seconds in frames (60 FPS) 

var nextButton, playButton, stormButton, arrowmButton;

let arrowm, girlp, hearing, lips, nega, pluss, subt;

var lipsButton, negaButton, plussButton, subtButton, boffButton;

var laughrButton, sadrButton, seriousrButton, waitwhatrButton;

var brestartButton, nextlevelbButton;


let mouthg, girlg;


function preload() {

    // Hide buttons initially, as they will be shown based on the state
    
   
    hgirl = loadImage("assets/hgirl.PNG");
    next = loadImage("assets/next.PNG");
    noteo = loadImage("assets/noteo.PNG");
    notet = loadImage("assets/notet.PNG");
    play = loadImage("assets/play.PNG");
    storm = loadImage("assets/storm.png");
    cafe = loadImage("assets/cafe.PNG");
    readl = loadImage("assets/readl.PNG");
    losings = loadImage("assets/losings.PNG");
    yikest = loadImage("assets/yikest.PNG");
    wins = loadImage("assets/wins.PNG");

    arrowm = loadImage("assets/arrowm.PNG");
    girlp = loadImage("assets/girlp.PNG");
    hearing = loadImage("assets/hearing.PNG");
    lips = loadImage("assets/lips.PNG");
    nega = loadImage("assets/nega.PNG");
    pluss = loadImage("assets/pluss.PNG");
    subt = loadImage("assets/subt.PNG");
    brestart =loadImage("assets/brestart.PNG");
    nextlevelb =loadImage("assets/nextlevelb.PNG");


    goshb = loadImage("assets/goshb.PNG");
    subtitless = loadImage("assets/subtitless.PNG");
    wrongb = loadImage("assets/wrongb.PNG");
    


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
    
    nextButton = createImg("assets/next.PNG");
    nextButton.position(1120, 900);
    nextButton.mousePressed(() => state = 2);  // Set to a different state on click
   
   
    playButton = createImg("assets/play.PNG");
    playButton.position(890,800);
    playButton.mousePressed(() => state = 1);  // Set another state on click

    lipsButton = createImg("assets/lips.PNG");
    lipsButton.position(40, 370);
    lipsButton.mousePressed(() => state = 4);  // Set another state on click

    stormButton = createImg("assets/storm.png");
    stormButton.position(1000, 900);
    stormButton.mousePressed(() => state = 3);  // Set another state on click

    arrowmButton = createImg("assets/arrowm.PNG");
    arrowmButton.position(5, -10);
    arrowmButton.mousePressed(() => state = 3);  // Set another state on click

    subtButton = createImg("assets/subt.PNG");
    subtButton.position(40, 700);
    subtButton.mousePressed(() => state = 5);  // Set another state on click
    subtButton.hide();

    sadrButton = createImg("assets/sadr.PNG");
    sadrButton.position(500, 800);
    sadrButton.mousePressed(() => state = 8);  // Set another state on click
    sadrButton.hide();

    seriousrButton = createImg("assets/seriousr.PNG");
    seriousrButton.position(900, 800);
    seriousrButton.mousePressed(() => state = 6);  // Set another state on click
    seriousrButton.hide();

    laughrButton = createImg("assets/laughr.PNG");
    laughrButton.position(1300, 800);
    laughrButton.mousePressed(() => state = 7);  // Set another state on click
    laughrButton.hide();

    waitwhatrButton = createImg("assets/waitwhatr.PNG");
    waitwhatrButton.position(1700, 800);
    waitwhatrButton.mousePressed(() => state = 9);  // Set another state on click
    waitwhatrButton.hide();

    boffButton = createImg("assets/boff.PNG");
    boffButton.position(100, 980);
    boffButton.mousePressed(() => state = 3);  // Set another state on click
    boffButton.hide();

    brestartButton = createImg("assets/brestart.PNG");
    brestartButton.position(900, 980);
    brestartButton.mousePressed(() => state = 0);  // Set another state on click
    brestartButton.hide();

    nextlevelbButton = createImg("assets/nextlevelb.PNG");
    nextlevelbButton.position(630, 370);
    nextlevelbButton.mousePressed(() => state = 10);  // Set another state on click
    nextlevelbButton.hide();



   
  }

  function draw() {
  

     switch (state) {

      //splash page

        case 0:
         background(173, 216, 230);
         image(hgirl, 30,30);
         playButton.show();
         nextButton.hide();
         stormButton.hide();
         lipsButton.hide();
         arrowmButton.hide();
         brestartButton.hide();
        
        
          break;



          //explanation 1


    
        case 1:
            background(173, 216, 230);
            image(noteo, 100, 20);
            playButton.hide();
            nextButton.show();
            stormButton.hide();
            arrowmButton.hide();
          
            
            
            break;



            //explanation 2



        case 2:
            background(173,216,230);
            image(notet, 100,20);
            playButton.hide();
            nextButton.hide();
            stormButton.show();
            arrowmButton.hide();
          

            break;



            //main page



        case 3:
          background(173,216,230)
          image(cafe,0, 0);
          image(hearing, 30, 5);
          lipsButton.show();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.show();
          sadrButton.show();
          playButton.hide();
          seriousrButton.show();
          laughrButton.show();
          waitwhatrButton.show();
          boffButton.show();

          //image(lips, 10,70)
          
          stormButton.hide(0);

          girlgGif.show();

          break;


          //read lips page


          case 4:

          background(173,216,230)
          image(cafe,0,0);
          image(readl,780,100);
          mouthgGif.show();
          girlgGif.hide();
          arrowmButton.show();
          playButton.hide();
          nextButton.hide();
          stormButton.hide();
          lipsButton.hide();
          subtButton.hide();
          seriousrButton.hide();
          laughrButton.hide();
          waitwhatrButton.hide();
          sadrButton.hide();
          boffButton.hide();

          


          break;

          //subtitles reponse

          case 5:

          background(173,216,230)
          image(cafe,0, 0);
          image(hearing, 30, 5);
          lipsButton.show();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.show();
          sadrButton.show();
          playButton.hide();
          seriousrButton.show();
          laughrButton.show();
          waitwhatrButton.show();
          image(subtitless, 600, 27);
          boffButton.show();

          break;


          //serious face response

          case 6:

          image(cafe,0, 0);
          image(hearing, 30, 5);
          image(wrongb, 1380, 5);

          lipsButton.show();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.show();
          sadrButton.show();
          playButton.hide();
          seriousrButton.show();
          laughrButton.show();
          waitwhatrButton.show();
          boffButton.show();
          
          stormButton.hide(0);

          girlgGif.show();

          break;

          //losing screen

          case 7:

          image(losings, 0, 0);
          image(yikest, 100,100);
          brestartButton.show();


          lipsButton.hide();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.hide();
          sadrButton.hide();
          playButton.hide();
          seriousrButton.hide();
          laughrButton.hide();
          waitwhatrButton.hide();
          boffButton.hide();

          girlgGif.hide();

          break;

          //winning screen

          case 8:

          image(wins, 0, 0);

          nextlevelbButton.show();


          brestartButton.hide();


          lipsButton.hide();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.hide();
          sadrButton.hide();
          playButton.hide();
          seriousrButton.hide();
          laughrButton.hide();
          waitwhatrButton.hide();
          boffButton.hide();
          stormButton.hide();

          girlgGif.hide();
















          
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
  
