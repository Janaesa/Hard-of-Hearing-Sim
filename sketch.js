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
let waitwhatr, whatr;
let losings;
let yikest;
let brestart;
let wins, endsf;
let nextlevelb;
let aurapoints;
let nohearing, ohreallyr, reddresr;
let subbt, ohnos;
let seclips;
let weirdb, winfinal;
let sheslowb;
let continueb, lastre, plus2;
let lowhear;
let highvoice;
let Highback;
let lowback;
let deaf;
let secback;
let dyingh;
let grandmadied;
let winsound;
let finallost;
let whath;


let clickCount = 0

let subtb, campusb, secoff, barrow, homeft;




let goshb, subtitless, wrongb, boff, homeb;



var state = 0;


let gifTimer = 0;  // Timer for playing the GIF
let gifDuration = 6 * 60;  // 6 seconds in frames (60 FPS) 

var nextButton, playButton, stormButton, arrowmButton;

let arrowm, girlp, hearing, lips, nega, pluss, subt;

var lipsButton, negaButton, plussButton, subtButton, boffButton, lastreButton,whathButton;

var laughrButton, sadrButton, seriousrButton, waitwhatrButton, subtbButton, homeftButton;

var brestartButton, nextlevelbButton, campusbButton, continuebButton, whatrButton,plus2Button;

var ohreallyrButton, reddressrButton, secoffButton, barrowButton, seclipsButton;


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
    aurapoints = loadImage("assets/aurapoints.PNG");
    subbt = loadImage("assets/subbt.PNG");
    secoff = loadImage("assets/secoff.PNG");
    endsf = loadImage("assets/endsf.PNG");
    homeft = loadImage("assets/homeft.PNG");
    ohnos = loadImage("assets/ohnos.PNG");
    endsf = loadImage("assets/endsf.PNG");
    plus2 = loadImage("assets/plus2.PNG");
    whath = loadImage("assets/whath.PNG");

    arrowm = loadImage("assets/arrowm.PNG");
    girlp = loadImage("assets/girlp.PNG");
    hearing = loadImage("assets/hearing.PNG");
    lips = loadImage("assets/lips.PNG");
    nega = loadImage("assets/nega.PNG");
    pluss = loadImage("assets/pluss.PNG");
    subt = loadImage("assets/subt.PNG");
    brestart = loadImage("assets/brestart.PNG");
    nextlevelb = loadImage("assets/nextlevelb.PNG");
    homeb = loadImage("assets/homeb.PNG");
    nohearing = loadImage("assets/nohearing.PNG");
    ohreallyr = loadImage("assets/ohreallyr.PNG");
    reddressr = loadImage("assets/reddressr.PNG");
    barrow = loadImage("assets/barrow.PNG");
    seclips = loadImage("assets/seclips.PNG");
    weirdb = loadImage("assets/weirdb.PNG");
    sheslowb = loadImage("assets/sheslowb.PNG");
    winfinal = loadImage("assets/winfinal.PNG");
    continueb = loadImage("assets/continueb.PNG");
    lastre = loadImage("assets/lastre.PNG");
    whatr = loadImage("assets/whatr.PNG");
    plus2 = loadImage("assets/plus2.PNG");


    whathButton = loadImage("assets/whath.PNG");
   




    goshb = loadImage("assets/goshb.PNG");
    subtitless = loadImage("assets/subtitless.PNG");
    wrongb = loadImage("assets/wrongb.PNG");
    subtbButton = loadImage("assets/subtb.PNG");
    campusbButton = loadImage("assets/campusb.PNG");
    ohreallyrButton = loadImage("assets/ohreallyr.PNG");
    reddressrButton = loadImage("assets/reddressr.PNG");
    secoffButton = loadImage("assets/secoff.PNG");
    seclipsButton = loadImage("assets/seclips.PNG");
    homeftButton = loadImage("assets/homeft.PNG");
    continuebButton = loadImage("assets/continueb.PNG");
    lastreButton = loadImage("assets/lastre.PNG");
    whatrButton = loadImage("assets/whatr.PNG");
    plus2Button = loadImage("assets/plus2.PNG");
    

    lowhear = loadSound("lowhear.mp3");
    highvoice = loadSound("highvoice.mp3");
    Highback = loadSound("Highback.mp3");
    lowback = loadSound("lowback.mp3");
    secback = loadSound("secback.mp3");
    deaf = loadSound("deaf.mp3");
    dyingh = loadSound("dyingh.mp3");
    grandmadied = loadSound("grandmadied.mp3");
    winsound = loadSound("winsound.mp3");
    finallost = loadSound("finallost.mp3");
  


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
    stormButton.mousePressed(() => {state = 3; lowhear.play();lowback.play()});  // Set another state on click

    arrowmButton = createImg("assets/arrowm.PNG");
    arrowmButton.position(5, -10);
    arrowmButton.mousePressed(() => state = 3);  // Set another state on click

    subtButton = createImg("assets/subt.PNG");
    subtButton.position(40, 700);
    subtButton.mousePressed(() => state = 5);  // Set another state on click
    subtButton.hide();

    sadrButton = createImg("assets/sadr.PNG");
    sadrButton.position(500, 800);
    sadrButton.mousePressed(() => {state = 8; highvoice.stop();Highback.stop(); lowhear.stop(); winsound.play()});  // Set another state on click
    sadrButton.hide();

    seriousrButton = createImg("assets/seriousr.PNG");
    seriousrButton.position(900, 800);
    seriousrButton.mousePressed(() => state = 6);  // Set another state on click
    seriousrButton.hide();

    laughrButton = createImg("assets/laughr.PNG");
    laughrButton.position(1300, 800);
    laughrButton.mousePressed(() => {state = 7; grandmadied.play(); lowback.stop();Highback.stop()});  // Set another state on click
    laughrButton.hide();

    waitwhatrButton = createImg("assets/waitwhatr.PNG");
    waitwhatrButton.position(1700, 800);
    waitwhatrButton.mousePressed(() => {state = 16; finallost.play();lowhear.stop();highvoice.stop();Highback.stop();});  // Set another state on click
    waitwhatrButton.hide();

    whatrButton = createImg("assets/whatr.PNG");
    whatrButton.position(1700, 800);
    whatrButton.mousePressed(() => {state = 18;lowhear.play();});  // Set another state on click
    whatrButton.hide();

    whathButton = createImg("assets/whath.PNG");
    whathButton.position(1700, 800);
    whathButton.mousePressed(() => {state = 18;highvoice.play();});  // Set another state on click
    whathButton.hide();

    boffButton = createImg("assets/boff.PNG");
    boffButton.position(100, 980);
    boffButton.mousePressed(() => state = 3);  // Set another state on click
    boffButton.hide();

    brestartButton = createImg("assets/brestart.PNG");
    brestartButton.position(900, 980);
    brestartButton.mousePressed(() => {state = 0; grandmadied.stop()});  // Set another state on click
    brestartButton.hide();

    nextlevelbButton = createImg("assets/nextlevelb.PNG");
    nextlevelbButton.position(630, 370);
    nextlevelbButton.mousePressed(() => {state = 9; dyingh.play()});  // Set another state on click
    nextlevelbButton.hide();

    homebButton = createImg("assets/homeb.PNG");
    homebButton.position(630, 670);
    homebButton.mousePressed(() => state = 0);  // Set another state on click
    homebButton.hide();

    subtbButton = createImg("assets/subtb.PNG");
    subtbButton.position(40, 700);
    subtbButton.mousePressed(() => state = 11);  // Set another state on click
    subtbButton.hide();

    campusbButton = createImg("assets/campusb.PNG");
    campusbButton.position(500, 800);
    campusbButton.mousePressed(() => state = 13);  // Set another state on click
    campusbButton.hide();

    ohreallyrButton = createImg("assets/ohreallyr.PNG");
    ohreallyrButton.position(900, 800);
    ohreallyrButton.mousePressed(() => state = 14);  // Set another state on click
    ohreallyrButton.hide();

    reddressrButton = createImg("assets/reddressr.PNG");
    reddressrButton.position(1300, 800);
    reddressrButton.mousePressed(() => state = 15);  // Set another state on click
    reddressrButton.hide();

    secoffButton = createImg("assets/secoff.PNG");
    secoffButton.position(100, 980);
    secoffButton.mousePressed(() => state = 10);  // Set another state on click
    secoffButton.hide();

    barrowButton = createImg("assets/barrow.PNG");
    barrowButton.position(5, -10);
    barrowButton.mousePressed(() => state = 10);  // Set another state on click

    seclipsButton = createImg("assets/seclips.PNG");
    seclipsButton.position(40, 370);
    seclipsButton.mousePressed(() => state = 12);  // Set another state on click

    homeftButton = createImg("assets/homeft.PNG");
    homeftButton.position(130, 470);
    homeftButton.mousePressed(() => state = 0);  // Set another state on click
    homeftButton.hide();

    continuebButton = createImg("assets/continueb.PNG");
    continuebButton.position(130, 590);
    continuebButton.mousePressed(() => {state = 10; secback.loop();deaf.play()});  // Set another state on click
    continuebButton.hide();

    lastreButton = createImg("assets/lastre.PNG");
    lastreButton.position(130, 590);
    lastreButton.mousePressed(() => state = 0);  // Set another state on click
    lastreButton.hide();

    plussButton = createImg("assets/pluss.PNG");
    plussButton.position(350, 80);
    plussButton.mousePressed(() => {state = 19; highvoice.play();Highback.loop(); lowhear.stop(); lowback.stop()});  // Set another state on click
    plussButton.hide();

    plus2Button = createImg("assets/plus2.PNG");
    plus2Button.position(350, 80);
    plus2Button.mousePressed(() => {state = 21;Highback.loop(); lowhear.stop(); lowback.stop()});  // Set another state on click
    plus2Button.hide();

    negaButton = createImg("assets/nega.PNG");
    negaButton.position(350, 230);
    negaButton.mousePressed(() => { state = 20; lowback.loop(); Highback.stop(); highvoice.stop()});  // Set another state on click
    negaButton.hide();





   
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
         arrowmButton.hide()
         brestartButton.hide();

         homebButton.hide();
         nextlevelbButton.hide();
         barrowButton.hide();
         seclipsButton.hide();
         homeftButton.hide();
         lastreButton.hide();
         whathButton.hide();
         whatrButton.hide();
         plus2Button.hide();

         lowhear.stop();
          lowback.stop();
          highvoice.stop();
          Highback.stop();
          secback.stop();
          deaf.stop();

        
        
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
          waitwhatrButton.hide();
          whatrButton.show();
          boffButton.show();
          plussButton.show();
          negaButton.show();

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

          campusbButton.hide();
          ohreallyrButton.hide();
          reddressrButton.hide();
          secoffButton.hide();
          subtbButton.hide();
          plussButton.hide();
          negaButton.hide();
          whathButton.hide();
          whatrButton.hide();
          plus2Button.hide();




          


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
          image(aurapoints, 100,100);
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
          stormButton.hide();
          plussButton.hide();
          negaButton.hide();
          plus2Button.hide();
          whatrButton.hide();
          whathButton.hide();

          girlgGif.hide();

          lowhear.stop();
          highvoice.stop();
         

          break;

          //winning screen

          case 8:

          image(wins, 0, 0);

          nextlevelbButton.show();
          homebButton.show();


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
          barrowButton.hide();
          seclipsButton.hide();
          plussButton.hide();
          negaButton.hide();
          plus2Button.hide();

          whathButton.hide();
          whatrButton.hide();
          plus2Button.hide();

          break;

          //oh no screen

          case 9:

          image(ohnos, 0, 0);

          continuebButton.show();

          nextlevelbButton.hide();
          homebButton.hide();
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
          barrowButton.hide();
          seclipsButton.hide();

          lowhear.stop();
          lowback.stop();
          highvoice.stop();
          Highback.stop();

          break;



          //level 2 main screen

          case 10:

          background(173,216,230)
          image(cafe,0, 0);
          image(nohearing, 30, 5);
          lipsButton.hide();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.hide();
          subtbButton.show();
          playButton.hide();
          waitwhatrButton.show();
          boffButton.hide();
          girlgGif.show();

          secoffButton.show();
          seclipsButton.show();

          campusbButton.show();
          ohreallyrButton.show();
          reddressrButton.show();


          homebButton.hide();
          nextlevelbButton.hide();
          stormButton.hide();
          barrowButton.hide();
          continuebButton.hide();

          lowhear.stop();
          lowback.stop();
          highvoice.stop();
          Highback.stop();

          break;

          //subtitles 2 response


          case 11:

          background(173,216,230)
          image(cafe,0, 0);
          image(nohearing, 30, 5);

          image(subbt, 600, 27);

          lipsButton.hide();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtbButton.show();
          playButton.hide();
          waitwhatrButton.show();
          boffButton.hide();
          girlgGif.show();

          campusbButton.show();
          ohreallyrButton.show();
          reddressrButton.show();


          homebButton.hide();
          nextlevelbButton.hide();
          stormButton.hide();
          barrowButton.hide();

          break;

          //second mouth gif

          case 12:

          background(173,216,230)
          image(cafe,0,0);
          image(readl,780,100);
          mouthgGif.show();
          barrowButton.show();


          girlgGif.hide();
          arrowmButton.hide();
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
          seclipsButton.hide();

          campusbButton.hide();
          ohreallyrButton.hide();
          reddressrButton.hide();
          secoffButton.hide();
          subtbButton.hide();

          break;

          //I live on campus response

          case 13:

          background(173,216,230)
          image(cafe,0, 0);
          image(nohearing, 30, 5);
          image(weirdb, 1380, 5);



          lipsButton.hide();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.hide();
          subtbButton.show();
          playButton.hide();
          waitwhatrButton.show();
          boffButton.hide();
          girlgGif.show();

          secoffButton.show();
          seclipsButton.show();

          campusbButton.show();
          ohreallyrButton.show();
          reddressrButton.show();


          homebButton.hide();
          nextlevelbButton.hide();
          stormButton.hide();
          barrowButton.hide();

          break;



          //oh really response

          case 14:

          background(173,216,230)
          image(cafe,0, 0);
          image(nohearing, 30, 5);
          image(sheslowb, 1380, 5);



          lipsButton.hide();
          arrowmButton.hide();
          mouthgGif.hide();
          nextButton.hide();
          subtButton.hide();
          subtbButton.show();
          playButton.hide();
          waitwhatrButton.show();
          boffButton.hide();
          girlgGif.show();

          secoffButton.show();
          seclipsButton.show();

          campusbButton.show();
          ohreallyrButton.show();
          reddressrButton.show();


          homebButton.hide();
          nextlevelbButton.hide();
          stormButton.hide();
          barrowButton.hide();

          break;




          // the red dress response

          case 15:

          background(173,216,230);
          image(winfinal, 0, 0);

          mouthgGif.hide();
          barrowButton.hide();

          girlgGif.hide();
          arrowmButton.hide();
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
          seclipsButton.hide();

          campusbButton.hide();
          ohreallyrButton.hide();
          reddressrButton.hide();
          secoffButton.hide();
          subtbButton.hide();
          homeftButton.show();

          break;

          //final lost

          case 16:

          background(173,216,230);
          image(endsf, 0, 0);

          lastreButton.show();

          mouthgGif.hide();
          barrowButton.hide();

          girlgGif.hide();
          arrowmButton.hide();
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
          seclipsButton.hide();

          campusbButton.hide();
          ohreallyrButton.hide();
          reddressrButton.hide();
          secoffButton.hide();
          subtbButton.hide();
          homeftButton.hide();
          homebButton.hide();
          plussButton.hide();
          negaButton.hide();

          whathButton.hide();
          whatrButton.hide();
          plus2Button.hide();

          deaf.stop();

          break;

          //minus button response

          case 17:

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
          plussButton.show();
          negaButton.show();

          

          //lowhear.play();
          
          stormButton.hide();

          girlgGif.show();

          break;

          case 18:
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
            whatrButton.hide();
            whathButton.hide();
            boffButton.show();
            plussButton.show();
            negaButton.show();
  
            //image(lips, 10,70)
            
            stormButton.hide(0);
  
            girlgGif.show();

            break;

            //plus button 2 page

            case 19:

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

          waitwhatrButton.hide();
          whathButton.show();

          boffButton.show();
          plussButton.hide();
          plus2Button.show();
          negaButton.show();

          

          //lowhear.play();
          
          stormButton.hide();

          girlgGif.show();

          break;

          //minus button 1 response

          case 20:

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
          whatrButton.show();
          whathButton.hide();

          boffButton.show();
          plussButton.show();
          plus2Button.hide();
          negaButton.show();

          

          //lowhear.play();
          
          stormButton.hide();

          girlgGif.show();

          break;

          //plus button 2 response

          case 21:

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
          whatrButton.hide

          boffButton.show();
          plussButton.hide();
          plus2Button.show();
          negaButton.show();

          

          //lowhear.play();
          
          stormButton.hide();

          girlgGif.show();

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
  
