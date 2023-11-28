var verbs = ['bake', 'bang', 'bark', 'bend', 'bent', 'bets', 'bite', 'blow', 'blue',  'bowl', 'buys', 'call', 'came', 'cast', 'chat', 'chew', 'clap', 'clip', 'come',  'cost', 'cuts', 'dare', 'deal', 'dear', 'does', 'done', 'drew','drop', 'dump',  'each', 'earn', 'ends', 'feel', 'felt', 'find', 'fits', 'fold', 'form', 'free', 'gave', 'gets','gave', 'give', 'goes', 'gone', 'grew',  'grow', 'hand', 'hang', 'harm', 'have', 'hear', 'held', 'help', 'hide', 'hold',  'hope', 'hurt','kept', 'kill', 'kiss', 'knew', 'know', 'laid', 'lead',  'left', 'lend', 'lets', 'lies', 'lift', 'like', 'live', 'look', 'lose', 'lost',  'love', 'made', 'make', 'mean', 'meet', 'met', 'miss', 'move', 'need', 'open',  'paid', 'pass', 'play', 'pull', 'push', 'puts','read', 'ride', 'ring', 'rise',  'rock', 'roll', 'runs', 'said', 'sang', 'save', 'sees', 'sell', 'send', 'sent', 'sets', 'shot', 'show', 'shut', 'sing', 'sink', 'sold', 'some','spin', 'stay',  'take', 'talk', 'tell', 'test', 'that', 'then', 'they', 'this', 'tore','turn', 'went', 'were', 'what', 'when', 'will', 'with', 'work', 'worn',  'wrap', 'writ', 'your', 'adds', 'asks', 'bark', 'bend', 'bent', 'bets',  'bite', 'blow', 'blue', 'bowl', 'call', 'came', 'cast', 'chat', 'chew', 'clap',  'clip', 'come', 'cuts', 'drop', 'dump', 'each', 'earn', 'ends', 'face', 'fall', 'feel', 'find', 'flow', 'form', 'free', 'gave', 'gets', 'give', 'goes', 'gone', 'grew', 'grow', 'hand', 'hang', 'harm', 'have', 'hear', 'held', 'help', 'hide',  'hold', 'hope', 'hurt', 'kept', 'lead', 'left', 'lend', 'lets', 'lies', 'lift', 'like', 'live', 'look', 'lose', 'lost','love', 'made', 'make', 'mean', 'meet', 'met', 'miss', 'move', 'need',  'open', 'paid', 'pass','play', 'pull', 'push', 'puts', 'read', 'ride', 'ring', 'rise', 'rock', 'roll', 'runs', 'said', 'sang', 'save', 'sees', 'sell', 'send','sent', 'sets', 'shot', 'show', 'shut', 'sing', 'sink', 'sold', 'some', 'stay', 'take', 'talk', 'tell', 'test', 'that', 'then','they', 'this', 'took', 'tore', 'turn', 'went', 'were', 'what', 'when', 'with', 'woke', 'work', 'worn', 'wrap', 'writ', 'your'];

var nouns = ['year', 'home', 'hand', 'name', 'head', 'work', 'book', 'life', 'back','team', 'food', 'love', 'idea', 'face', 'door', 'word', 'body', 'hair', 'hand','food', 'room', 'army', 'baby', 'ball', 'band', 'bank', 'base', 'bell', 'bird','birth', 'blood', 'blow', 'bone', 'book', 'boss', 'bottle', 'bowl', 'box', 'boy','brain', 'bread', 'break', 'breath', 'brick', 'bridge', 'brother', 'brush', 'bush','bus', 'butter', 'button', 'cake', 'camera', 'card', 'carpet', 'carrot', 'cat', 'cause','cell', 'chain', 'chair', 'chance', 'change', 'cheek', 'chest', 'child', 'chin', 'church','circle', 'city', 'class', 'clock', 'cloth', 'cloud', 'coat', 'coffee', 'coin', 'color','comb', 'comfort', 'common', 'company', 'control', 'cook', 'copy', 'corner', 'cotton', 'country','course', 'cousin', 'cover', 'cow', 'crack', 'credit', 'crime', 'cup', 'damage', 'dance','danger', 'daughter', 'day', 'death', 'debt', 'decision', 'deep', 'desk', 'detail', 'devil','dinner', 'direction', 'dirt', 'discipline', 'discount', 'discussion', 'dog', 'door', 'doubt', 'drawer','dress', 'drink', 'drive', 'drop', 'dust', 'ear', 'earth', 'edge', 'education', 'effect','effort', 'egg', 'elbow', 'emergency', 'emotion', 'end', 'energy', 'engine', 'entrance', 'environment','equal', 'escape', 'evening', 'event', 'example', 'excuse', 'exercise', 'experience', 'eye', 'face','fact', 'failure', 'fall', 'family', 'fan', 'farm', 'father', 'fear', 'feeling', 'female','field', 'fight', 'figure', 'finger', 'fire', 'fish', 'flight', 'floor', 'flower', 'food','foot', 'force', 'form', 'friend', 'front', 'fruit', 'fun', 'future', 'game', 'garden','gate', 'gathering', 'gift', 'girl', 'glass', 'glove', 'goat', 'gold', 'goodbye', 'government','grandfather', 'grandmother', 'grass', 'guitar', 'hair', 'hall', 'hand', 'hat', 'head', 'heart','heat', 'heaven', 'height', 'help', 'history', 'hole', 'holiday', 'hope', 'horse','hospital', 'hour', 'house', 'human', 'hurt', 'husband', 'ice', 'idea', 'image', 'income','insect', 'inside', 'insurance', 'interest', 'introduction', 'invention', 'iron', 'island', 'jacket','job', 'join', 'journey', 'judge', 'juice', 'jump', 'key', 'kick', 'kid', 'knee', 'knife','knowledge', 'lab', 'lady', 'lake', 'lamp', 'land', 'language', 'laugh', 'law', 'lead', 'leaf','learning', 'leather', 'leg', 'letter', 'level', 'library', 'life', 'light', 'line', 'lip','list', 'living', 'lock', 'loss', 'love', 'lunch', 'machine', 'magazine', 'mail', 'man','manager', 'map', 'mark', 'market', 'marriage', 'mass', 'match', 'meal', 'measure', 'medicine','medium', 'meeting', 'member', 'memory', 'message', 'metal', 'method', 'middle', 'milk', 'mind','mine', 'minute', 'mirror', 'miss', 'mistake', 'money', 'month', 'moon', 'morning', 'mother','mouth', 'move', 'music', 'nail', 'name', 'nation', 'neck', 'news', 'night', 'noise','nose', 'note', 'number', 'object', 'office', 'oil', 'operation', 'opinion', 'orange', 'order','oven', 'owner', 'page', 'pain', 'paint', 'paper', 'parent', 'park', 'part', 'party', 'pass','past', 'patient', 'pattern', 'payment', 'peace', 'pen', 'people', 'performance', 'period', 'permission','person', 'pet', 'phone', 'photo', 'picture', 'pie', 'piece', 'pin', 'place', 'plan', 'plane','plant', 'plate', 'play', 'pleasure', 'point', 'poison', 'police', 'policy', 'pool', 'pop', 'port','position', 'possibility', 'potato', 'power', 'price', 'pride', 'problem', 'product', 'profit', 'program','progress', 'project', 'promise', 'property', 'proposal', 'protection', 'public', 'pull', 'punishment', 'purpose',  'push', 'quality', 'question', 'quiet', 'race', 'rain', 'range', 'rate', 'reaction', 'reason', 'record',  'regret', 'relation', 'relationship', 'relief', 'reputation', 'request', 'requirement', 'research', 'reserve', 'respect',  'responsibility', 'rest', 'result', 'rice','rich', 'ring', 'river', 'road', 'rock', 'role', 'roof','room', 'rule', 'run', 'sad', 'safe', 'safety','sail', 'salad', 'salt', 'sand', 'scene', 'schedule','school', 'science', 'sea', 'search', 'season','seat', 'secret', 'security', 'seed', 'selection', 'self','sense', 'sentence', 'separation', 'series', 'service', 'shape', 'share', 'sheep', 'sheet', 'shelf','ship', 'shirt', 'shock', 'shoe', 'shoot', 'shop' ];

var adjectives = [ "happy", "smart", "lucky", "funny", "silly", "hairy", "large", "small", "clear", "quick", "quiet", "fancy", "brave", "sharp", "thick", "vivid", "frost", "fresh", "round", "solid", 'able', 'acid', 'alert', 'alive', 'amok', 'arid', 'awry',  'bald', 'bale', 'balk', 'balm', 'bent', 'best', 'bony', 'born', 'braw',  'calm', 'chic', 'cold', 'cool', 'cozy', 'curt', 'damp', 'dark', 'dear', 'deep',  'dire', 'dour', 'dull', 'dumb', 'each', 'even', 'fair', 'fake', 'fall', 'fear', 'few', 'fine', 'firm', 'flat', 'fond', 'free', 'full', 'fuss', 'glib', 'gray',  'grim', 'hard', 'harsh', 'high', 'huge', 'icky', 'idle', 'keen', 'kind', 'lame', 'lean', 'left', 'lone', 'loose', 'lush', 'mad', 'male', 'mean', 'meek', 'mere',  'odd', 'only', 'past', 'rash', 'rich', 'ripe', 'rude', 'safe', 'same', 'sear', 'shut', 'slim', 'slow', 'thin', 'tiny', 'ugly', 'vast', 'wary', 'wide', 'wild', 'wise', 'wiry', 'worn', 'zany', 'able', 'aged', 'ajar', 'alive', 'base', 'best', 'born', 'calm', 'cool', 'curt', 'damp', 'dark', 'dear', 'deep', 'dire', 'dour', 'dull', 'each', 'even', 'fair', 'fake', 'fear', 'fine', 'firm', 'flat', 'kind', 'lame', 'lean', 'left', 'loose', 'lush', 'mad', 'male', 'mean', 'mere', 'mild', 'neat', 'nice', 'only', 'rash', 'shut', 'soft', 'sour', 'sure', 'tall', 'thin', 'ugly', 'vast', 'wary', 'weak', 'wide', 'wild', 'worn', 'zany', 'aged', 'ajar', 'alive', 'arid', 'awry', 'best', 'calm', 'cool', 'dark', 'dear', 'deep', 'dour', 'dull', 'each', 'even', 'fake', 'fine', 'firm', 'flat','lean', 'left', 'loose', 'lush',  'male', 'mean', 'mere', 'oral', 'pale', 'poor', 'rash', 'ugly', 'vast', 'wary', 'wide', 'wild', 'worn', 'ajar', 'arid', 'calm', 'cool', 'dark', 'dear', 'deep', 'dour', 'dull', 'each', 'even', 'fake', 'fine', 'firm', 'flat', 'hard', 'icky', 'kind', 'left', 'male', 'mean', 'mere'];
let state = 0;
let game = 0; // Change from 0 to 1 to enable the game
let winCondition = "";
let now;
let path = [];
let success = false; // Track if the user successfully completed the path
let timerDuration = 10 * 1000; // 10 seconds in milliseconds
let timerStart;
let button;
let reactionCircleSize;
let movingCircle;
let isCircleMoving = false;
let changeColorTimestamp;
let isColorChanged = false;
let playerScore = 0;
let reactionStartTimestamp;
let totalReactionDuration = 0;
let gameCurrentState = "instructions"; // Possible values: "instructions", "playing", "gameOver"
let d = 250;
let col = 255;
let col2 = 0;
let reactionTime;

let txt = "Click to start";
let lvl = "LEVEL ONE";
let points = 0;

//fonts
var titleFont;
var bodyFont;

//sounds
var soundwin;
var sounlose;
var userIn_v1;
var isColorV1;
var userIn_v2;
var isColorV2;
var userIn_n1;
let isColorN1;
var userIn_n2;
let isColorN2;
var userIn_adj1;
let isColorA1;
var userIn_adj2;
let isColorA2;
var stageM = 0;
txt = ""; 
let circleSize1; // Size of the first circle
let circleSize2; // Size of the second circle
let color1 = 0; // Color of the first circle (0 for red)
let color2 = 0; // Color of the second circle (0 for red)
let reactionTime1;
let currentTime;
let instructionsText = "Click to start";
let changingCircle; // Variable to keep track of which circle is changing color
let userPoints = 0;
let gameStatus = "instructions"; // Possible values: "instructions", "playing", "gameOver"
//game 2

let gameOver = false;
var stage = 0;
function preload() {
  soundFile = loadSound("30_Second_Timer_With_Jeopardy_Think_(getmp3.pro).mp3");
    soundFile1 = loadSound("export_4_5jQbrXs.mp3");
  soundFile2 = loadSound("galaxy-meme.mp3");
  soundFile3 = loadSound("oh-no-cringe.mp3");
  soundFile4 = loadSound("panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3");
  soundFile5 = loadSound("yeah-boiii-i-i-i.mp3");
  //use .play() function when calling the sound
}
function setup() {
  createCanvas(700, 700);
  if (game == 1 && state > 1){
    txt = winCondition;
  }
  //txt = winCondition;
  rectMode(CENTER);
  textAlign(CENTER);
  
  titleFont = loadFont('04B_30__.TTF');
  bodyFont = loadFont('VCR_OSD_MONO_1.001.ttf');

  // Create buttons in stage 0
  let buttonWidth = 150; // Adjust the width of the buttons
  let buttonHeight = 50; // Adjust the height of the buttons
  reactionCircleSize = 100;
  fill('red');
  noStroke();
  movingCircle = {
    position: createVector(width / 2, height / 2),
    velocity: p5.Vector.random2D().mult(random(1, 3)),
  };

  // Set a random time to change the circle's color between 1 and 2 seconds.
  changeColorTimestamp = millis() + random(1000, 2000);

  levelOneButtonLT = createButton('Level One Line Tracing');
  levelOneButtonLT.size(buttonWidth, buttonHeight);
  levelOneButtonLT.position(width / 6 - buttonWidth / 2, height / 2);
  levelOneButtonLT.mousePressed(startLevelOneLT);
 levelOneButtonLT.style('color', 'white'); // Set text color to green
  levelOneButtonLT.style('font-family', titleFont); // Use titleFont for the button text
  levelOneButtonLT.style(bodyFont, '30px'); // Set font size
  levelOneButtonLT.style('background', 'green');
  levelTwoButtonLT = createButton('Level Two Line Tracing');
  levelTwoButtonLT.size(buttonWidth, buttonHeight);
  levelTwoButtonLT.position(width / 6 - buttonWidth / 2, height / 2 + 100);
  levelTwoButtonLT.mousePressed(startLevelTwoLT);
  levelTwoButtonLT.style('color', 'white'); // Set text color to green
  levelTwoButtonLT.style('font-family', titleFont); // Use titleFont for the button text
  levelTwoButtonLT.style(bodyFont, '30px'); // Set font size
  levelTwoButtonLT.style('background', 'green'); 

  levelThreeButtonLT = createButton('Level Three Line Tracing');
  levelThreeButtonLT.size(buttonWidth, buttonHeight);
  levelThreeButtonLT.position(width / 6 - buttonWidth / 2, height / 2 + 200);
  levelThreeButtonLT.mousePressed(startLevelThreeLT);
  levelThreeButtonLT.style('color', 'white'); // Set text color to green
  levelThreeButtonLT.style('font-family', bodyFont);
  levelThreeButtonLT.style('background', 'green');
  levelThreeButtonLT.style(bodyFont, '30px'); // Set font si
  // Create back button
  
  levelOneButtonML = createButton('Level One of Mad-Libs');
  levelOneButtonML.size(buttonWidth, buttonHeight);
  levelOneButtonML.position(width / 2 - buttonWidth / 2, height / 2 );
  levelOneButtonML.mousePressed(startLevelOneML);
  levelOneButtonML.style('color', 'white'); // Set text color to green
  levelOneButtonML.style('font-family', titleFont); // Use titleFont for the button text
  levelOneButtonML.style(bodyFont, '30px'); // Set font size
  levelOneButtonML.style('background', 'green');

 levelTwoButtonML = createButton('Level Two of Mad-Libs');
  levelTwoButtonML.size(buttonWidth, buttonHeight);
  levelTwoButtonML.position(width / 2 - buttonWidth / 2, height / 2 + 100);
  levelTwoButtonML.mousePressed(startLevelTwoML);
  levelTwoButtonML.style('color', 'white'); // Set text color to green
  levelTwoButtonML.style('font-family', titleFont); // Use titleFont for the button text
  levelTwoButtonML.style(bodyFont, '30px'); // Set font size
  levelTwoButtonML.style('background', 'green'); 

 levelThreeButtonML = createButton('Level Three of Mad-Libs');
  levelThreeButtonML.size(buttonWidth, buttonHeight);
  levelThreeButtonML.position(width / 2 - buttonWidth / 2, height / 2 + 200);
  levelThreeButtonML.mousePressed(startLevelThreeML);
  levelThreeButtonML.style('color', 'white'); // Set text color to green
  levelThreeButtonML.style('font-family', bodyFont);
  levelThreeButtonML.style('background', 'green');
  // Use titleFont for the button text
  levelThreeButtonML.style(bodyFont, '30px'); // Set font size
// rt
  
  levelOneButtonRT = createButton('Level One of Reaction Time');
  levelOneButtonRT.size(buttonWidth, buttonHeight);
  levelOneButtonRT.position(width / 1.2 - buttonWidth / 2, height / 2 );
  levelOneButtonRT.mousePressed(startLevelOneRT);
  levelOneButtonRT.style('color', 'white'); // Set text color to green
  levelOneButtonRT.style('font-family', titleFont); // Use titleFont for the button text
  levelOneButtonRT.style(bodyFont, '30px'); // Set font size
  levelOneButtonRT.style('background', 'green');

 levelTwoButtonRT = createButton('Level Two of Reaction Time');
  levelTwoButtonRT.size(buttonWidth, buttonHeight);
  levelTwoButtonRT.position(width / 1.2 - buttonWidth / 2, height / 2 + 100);
  levelTwoButtonRT.mousePressed(startLevelTwoRT);
  levelTwoButtonRT.style('color', 'white'); // Set text color to green
  levelTwoButtonRT.style('font-family', titleFont); // Use titleFont for the button text
  levelTwoButtonRT.style(bodyFont, '30px'); // Set font size
  levelTwoButtonRT.style('background', 'green'); 

 levelThreeButtonRT = createButton('Level Three of Reaction Time');
  levelThreeButtonRT.size(buttonWidth, buttonHeight);
  levelThreeButtonRT.position(width / 1.2 - buttonWidth / 2, height / 2 + 200);
  levelThreeButtonRT.mousePressed(startLevelThreeRT);
  levelThreeButtonRT.style('color', 'white'); // Set text color to green
  levelThreeButtonRT.style('font-family', bodyFont);
  levelThreeButtonRT.style('background', 'green');
  // Use titleFont for the button text
  levelThreeButtonRT.style(bodyFont, '30px'); // Set font size
//
  backButton = createButton('Home');
  backButton.position(600, 15);
  backButton.mousePressed(goBackToStageZero);
  backButton.style('color', 'green'); // Set text color to green
  backButton.style('font-family', titleFont); // Use titleFont for the button text
  backButton.style('font-size', '20px'); // Set font size
}
function resetGame() {
  // Add any necessary resetting logic here
  // For example, reset points, timers, etc.
  points = 0;
  txt = "Click to start";
  gameOver = false;
}
function startLevelOneML() {
  background( 255, 204, 0 );
   stageM = 1;
  hideButtons();
  pickAndDisplayWords(nouns, 200, 400);
  delayPromptLevel1(1000);
  soundFile.play();
}
function startLevelTwoML() {
stageM = 4;
  background( 255, 204, 0 );
    hideButtons();
  pickAndDisplayWords(nouns, 300, 400);
  pickAndDisplayWords(adjectives, 550, 400);
  delayPromptLevel2(1000);
  soundFile.play();
}
function startLevelThreeML() {
stageM = 7;
  background(255, 204, 0);
  hideButtons();
  pickAndDisplayWords(verbs, 200, 400);
  pickAndDisplayWords(nouns, 350, 400);
  pickAndDisplayWords(adjectives, 550, 400);
  delayPromptLevel3(1000);
  soundFile.play();
}

function startLevelOneLT(){
  game = 1;
}
function startLevelTwoLT(){
  game = 2;
  
}
function startLevelThreeLT(){
  game = 3;
}
function goBackToStageZero() {
  stageM=0;
  game=0;
  stage = 0;
  splash();
  soundFile.stop();
}

function startLevelOneRT() {
  stage = 1;
  resetGame();
}

function startLevelTwoRT() {
  stage = 4;
  resetGame();
}

function startLevelThreeRT() {
  stage = 7;
  resetGame();
}

function mousePressed() {
  
  if (game == 1) {
    
    if (state == 0) {
      state = 1;
      now = millis(); // Record the starting time
      txt = ""; // Clear feedback text
      winCondition = "";
      path = []; // Clear the path when the user starts dragging
      path.push(createVector(mouseX, mouseY)); // Record the starting point
      timerStart = millis(); // Record the timer start time
      if (state == 1 &&
        mouseX >= width / 4 - 10 &&
        mouseX <= width / 4 + 10 &&
        mouseY >= height / 3 - 10 &&
        mouseY <= height / 3 + 10
      ) 
      {
        state = 1;
        
      }
     
    }
  } else if (game == 2) {
    if (state == 0) {
      state = 1;
      now = millis(); // Record the starting time
      txt = ""; // Clear feedback text
      winCondition = "";
      path = []; // Clear the path when the user starts dragging
      path.push(createVector(mouseX, mouseY)); // Record the starting point
      timerStart = millis(); // Record the timer start time
      if (state == 1 &&
        mouseX >= 10 -10 &&
        mouseX <= 10+ 10 &&
        mouseY <= 10 + 10&&
        mouseY >= 10-10
      ) 
      {
        state = 1;
        
      }
      
    }
  }
  else if (game == 3){
    if (state == 0) {
      state = 1;
      now = millis(); // Record the starting time
      txt = ""; // Clear feedback text
      winCondition = "";
      path = []; // Clear the path when the user starts dragging
      path.push(createVector(mouseX, mouseY)); // Record the starting point
      timerStart = millis(); // Record the timer start time
    }
    if (state == 1 && (
      (mouseX >= width / 3 - 10&&
      mouseX <=width / 3 + 10 &&
       mouseY >= height - 210 && 
      mouseY <= height - 190) //||(
      //mouseX >=  )
       )) {
      state = 1;
    }
  }
}
   
function isMouseOnLine(x1, y1, x2, y2, mouseX, mouseY) {
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;

  // Calculate the expected y position on the line for the given mouseX
  let expectedY = m * mouseX + b;

  // Check if the mouseY is close to the expectedY
  let tolerance = 15; // You can adjust the tolerance based on your needs
  return abs(mouseY - expectedY) < tolerance;
}

function mouseDragged() {
  if (game == 1) {
    // Check if the mouse is within the specified area
    if (
      state == 1 &&
      mouseX >= width / 4 &&
      mouseX <= width / 1.25 &&
      mouseY >= height / 3.5 &&
      mouseY <= height / 2.5
    ) {
      path.push(createVector(mouseX, mouseY, "green")); // Record the mouse position in the path as green
      state = 1;
    } else {
      path.push(createVector(mouseX, mouseY, "red")); // Record the mouse position with color red
      state = 2;
    }
  } else if (game == 2) {
    // Check if the mouse is within the specified area
    if ((
      state == 1 &&
      mouseX >= 0&&
      mouseX <= width - 10 &&
      mouseY >= 0 &&
      mouseY <= 10+ 20) || (mouseX >= width - 30 && mouseX <= width && mouseY >= 10 && mouseY <= height - 10) || (mouseX <= width - 10 && mouseX >= 10 && mouseY >= height-30 && mouseY <= height)|| (mouseX >= 0 && mouseX <= 10 + 20 && mouseY <= height - 10 && mouseY >= 10)) 
    {
      path.push(createVector(mouseX, mouseY, "green")); // Record the mouse position in the path as green
      state = 1;
    } else {
      path.push(createVector(mouseX, mouseY, "red")); // Record the mouse position with color red
      state = 2;
    }
  }
  else if (game == 3){
    let mouseOnLine = isMouseOnLine(width / 3, height - 200, width /2, 100, mouseX, mouseY);
    let mouseOnLine2 = isMouseOnLine(width / 2, 100, width / 1.5, height - 200, mouseX, mouseY);
    let mouseOnLine3 = isMouseOnLine(width / 2.50, height / 2.25, width / 1.66, height / 2.25, mouseX, mouseY);
    if (state == 1 && (mouseOnLine || mouseOnLine2 || mouseOnLine3)){
      path.push(createVector(mouseX, mouseY, "green")); // Record the mouse position in the path as green
      state = 1;
    }
    else {
      path.push(createVector(mouseX, mouseY, "red")); // Record the mouse position with color red
      state = 2;
    }
  }
}

function mouseReleased() {
  
  if (game == 1) {
    // Check if the mouse was released over the target area for success
    if (
      state == 1 &&
      mouseX >= width / 1.25 - 10 &&
      mouseX <= width / 1.25 + 10 &&
      mouseY >= height / 3 - 10 &&
      mouseY <= height / 3 + 10 &&
      isPathCorrect()
    ) {
      success = true; // Set success flag to true
    }
    else {
      state = 2;
    }
    
    state = 0; // Reset the state for the next round
  } else if (game == 2) {
    // Check if the mouse was released over the target area for success
    if (
      state == 1 &&
      mouseX >= 0 &&
      mouseX <= 10+ 10 &&
      mouseY <= 40 + 10&&
      mouseY >= 40-10 && 
      isPathCorrect()
      
    ) {
      success = true; // Set success flag to true
    }
    else {
      state = 2;
    }
    
    
    state = 0; // Reset the state for the next round
  }
  else if (game == 3){
    if(
      
      (mouseX <= width / 1.5 + 10 &&
      mouseX >= width / 1.5 - 10 &&
      mouseY <= height - 190 &&
      mouseY >= height -210) && isPathCorrect())
    {

      success = true;
    }
    else {
      state = 2;
    }
    state = 0;
    } 
 
}

function isPathCorrect() {
  // Check if the path follows the correct line from the green circle to the red circle
  for (let i = 1; i < path.length; i++) {
    if (path[i].z === "red") {
      return false; // Return false if any portion is red
    }
  }
  return true;
}
function splash(){
  //appearance of the world
  background(0);
  stroke(0, 255, 0);
  noFill();
  strokeWeight(3);
  rect(width / 2, height / 2, width, height);
  noStroke();
  //words for $ 
  fill(0, 255, 0);
  textSize(20); // Adjust the text size for "Click to start. Click when the circle changes color."
  textFont(titleFont);
  text('LINE TRACING', width / 5.5, 300);
  //
  textSize(20); 
  textFont(titleFont);
  text('MadLibs', width / 2, 300);
  
   textSize(20); 
  textFont(titleFont);
  text('Reaction Time', width /1.2, 300);
   textSize(50); 
  textFont(titleFont);
  text('WELCOME!', 350, 100);
   textSize(20); 
  textFont(titleFont);
  text('Choose A Level Below', 350, 200);
  // Show buttons
  levelOneButtonML.show();
  levelTwoButtonML.show();
  levelThreeButtonML.show();
  levelOneButtonLT.show();
  levelTwoButtonLT.show();
  levelThreeButtonLT.show();
  levelOneButtonRT.show();
  levelTwoButtonRT.show();
  levelThreeButtonRT.show();
  backButton.show();
  
}
function hideButtons() {
  levelOneButtonLT.hide();
  levelTwoButtonLT.hide();
  levelThreeButtonLT.hide();
  levelOneButtonML.hide();
  levelTwoButtonML.hide();
  levelThreeButtonML.hide();
  levelOneButtonRT.hide();
  levelTwoButtonRT.hide();
  levelThreeButtonRT.hide();
  
  // Hide back button only if the current stage is 0

  //backButton.hide();
}

function draw() {
  backButton.show();
  if (stageM == 0) {
    splash();
  }

  if (game == 1) {
      background(0, 0, 255);
    // Display circles and connecting line
    hideButtons();
    
    fill('green');
    ellipse(width / 4, height / 3, 20); // Starting circle

    fill('red');
    ellipse(width / 1.25, height / 3, 20); // Ending circle

    line(width / 4, height / 3, width / 1.25, height / 3); // Connecting line
    stroke('black');

    // Draw the path
    noFill();
    beginShape();
    for (let point of path) {
      stroke(point.z);
      vertex(point.x, point.y);
    }
    endShape();

    // Check if the timer has expired
    if (state == 1 && millis() - timerStart > timerDuration) {
      
      //state = 2; 
      txt = "Time's up!";
    }
    else if (state == 2){
      txt = "You Lose";
     
    }
    else if (state >= 1 && state != 2){
      if (success) {
      txt = "You win!";
      success = false;
      
    }
    }

    // Display win or lose result
    if (success) {
      txt = "You win!";
      success = false;
      backButton.show();
    }
    
    

    // Display feedback text
    fill('black');
    textAlign(CENTER);
    text(txt, width / 2, height / 2 + 20);
    //text(millis().toFixed(1), width / 2, height / 3 );
    
  } else if (game == 2) {
      background(0, 0, 255);
    // Display square and connecting lines
    hideButtons();
    fill('green');
    ellipse(10, 10, 20); // Starting circle in the top-right corner

    fill('red');
    ellipse(10, 40, 20); // Ending circle slightly under the starting circle

    // Draw the square
    line(10, 10, width - 10, 10);
    line(width - 10, 10, width - 10, height - 10);
    line(width - 10, height - 10, 10, height - 10);
    line(10, height - 10, 10, 10);
    //stroke('black');

    // Draw the path
    noFill();
    beginShape();
    for (let point of path) {
      stroke(point.z);
      vertex(point.x, point.y);
    }
    endShape();

    // Check if the timer has expired
    timerDuration = 20 * 1000;
    if (state == 1 && millis() - timerStart > timerDuration) {
      
       // Reset the state for the next round
      txt = "Time's up!";
    }
    
    else if (state == 2){
      txt = "You Lose."
      backButton.show();
    }

    // Display win or lose result
    if (success) {
      txt = "You win!";
      success = false;
      backButton.show();
    }
    
    // Display feedback text
    fill('black');
    textAlign(CENTER);
    text(txt, width / 2, height / 2 + 20);
    //text(millis().toFixed(1), width / 2, height / 3 );
  }
  
  
  else if (game == 3){
    hideButtons();
      background(0, 0, 255);
    fill('green');
    ellipse(width / 3, height - 200, 20); // Starting circle in the top-right corner

    fill('red');
    ellipse(width / 1.5, height - 200, 20);
    
    //fill('green');
    //ellipse(width / 2.50, height / 2.25, 20); // Starting circle in the top-right corner

    //fill('red');
    //ellipse(width / 1.66, height / 2.25, 20);
   

    // Draw the square
    line(width / 3, height - 200, width /2, 100);
    line(width / 2, 100, width / 1.5, height - 200);
    line(width / 2.50, height / 2.25, width / 1.66, height / 2.25);
    stroke('black');
    
    // Draw the path
    noFill();
    beginShape();
    for (let point of path) {
      stroke(point.z);
      vertex(point.x, point.y);
    }
    endShape();

    // Check if the timer has expired
    timerDuration = 20 * 1000;
    if (state == 1 && millis() - timerStart > timerDuration) {
      
      //state = 2; // Reset the state for the next round
      txt = "Time's up!";
    }
    
    else if (state == 2){
      txt = "You Lose."
      backButton.show();
    }

    // Display win or lose result
    if (success) {
      txt = "You win!";
      success = false;
      backButton.show();
    }
    fill('black');
    textAlign(CENTER);
    text(txt, width / 2, height / 2 + 20);
    //text(millis().toFixed(5), width / 2, height / 3 );
    
  }
   
  if (stage == 1) {
    hideButtons();
    game1();
    backButton.show();
  }

  if (stage == 2) {
    hideButtons();
    win();
  }

  if (stage == 3) {
    hideButtons();
    lose();
  }

  if (stage == 4) {
    hideButtons();
    game2();
  }

  if (stage == 7) {
    hideButtons();
    game3();
  }
}

function timeoutChange(changeSize) {
  const time = random(2000, 6000);
  setTimeout(() => {
    col = 100;
    col2 = 255;
    now = millis();
    if (changeSize) {
      d = width;
    }
  }, time);
}

function changeColorTimeout() {
  const time = random(1500, 4000);
  setTimeout(() => {
    if (changingCircle === 1) {
      color1 = 255; // Change the color of the first circle to yellow
    } else {
      color2 = 255; // Change the color of the second circle to yellow
    }
    currentTime = millis();
  }, time);
}

function startNewGame() {
  circleSize1 = 50; // Reset the size of the first circle
  circleSize2 = 50; // Reset the size of the second circle
  color1 = 0; // Reset the color of the first circle to red
  color2 = 0; // Reset the color of the second circle to red
  instructionsText = "Click to start. Click on the circle that changes color as fast as you can.";
  changingCircle = random() < 0.5 ? 1 : 2; // Randomly select which circle will change color
  changeColorTimeout();
  userPoints = 0;
  gameStatus = "instructions"; // Set game status to instructions
}



function win() {
  // Add code for the win stage if needed
}

function game2() {
  
  background(0);
  //appearance of the world
  stroke(0, 255, 0);
  noFill();
  strokeWeight(3);
  rect(width / 2, height / 2, width, height);
  noStroke();
  fill(0,255,0);
  rect(width/2,25,width,50);
  //words for splash 
  fill(0, 255, 0);
  textSize(50);
  textFont(titleFont);
  text('LEVEL TWO', width / 2, 100);

  //background(0);
  //fill(255);
  //text('LEVEL ONE', width / 2, 100);

  textSize(20); // Adjust the text size for the points
  //textFont(bodyFont);
  text(userPoints, width / 2, height - height / 4);
  textSize(10);

  fill(0);
  textSize(20);
  textFont(titleFont);
  text('Score:',60,25);
  text(userPoints, 125,25);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);

  if (gameStatus === "playing" || gameStatus === "gameOver") {
    // Display points only during the game and game over states
    textAlign(CENTER, CENTER);
    textSize(16);
    
  }

  if (gameStatus === "playing") {
    noStroke();
    fill(255, color1, 0);
    circle(width / 3, height / 2, 50); // First circle
    fill(255, color2, 0);
    circle((2 * width) / 3, height / 2, 50); // Second circle
  }

  textAlign(CENTER, CENTER);
  textSize(16);
  text(instructionsText, width / 2, height / 2);
}
// Add code for game 2 if needed

function timeoutChange(changeSize) {
  const time = random(2000, 6000);
  setTimeout(() => {
    col = 100;
    col2 = 255;
    now = millis();
    if (changeSize) {
      d = width;
    }
  }, time);
}
function mousePressed() {
  if (stage == 1) {
    // Game 1 logic
    if (!gameOver) {
      if (txt != "") {
        d = 100;
        txt = "";
        timeoutChange();
       
      } else {
        if (col == 100) {
          col = 255;
          col2 = 0;
          reactionTime1 = (millis() - now) / 1000;
          txt += `Reaction time: ${reactionTime1.toFixed(3)} seconds.`;
          if (reactionTime1 <= 0.2) {
            txt += `\n\nYou win!`;
            points = 10;
            gameOver = true;
          } else if (reactionTime1 <= 0.5) {
            txt += `\n\n\n\nThat's a point!`;
            points++;
            if (points >= 5) {
              txt += `\n\n\n\nYou win with ${points} points!`;
              gameOver = true;
            }
          } else {
            txt += `\n\n\n\nThat's pretty slow.`;
          }
        }
      }
    }
  } else if (stage == 4) {
    // Game 2 logic
    if (gameStatus === "instructions") {
      // Move to the playing state when clicked
      gameStatus = "playing";
      instructionsText = "";
    } else if (gameStatus === "playing") {
      reactionTime = (millis() - currentTime) / 1000;
      instructionsText = `Your reaction time: ${reactionTime.toFixed(3)} seconds.`;

      if (reactionTime <= 0.5) {
        instructionsText += `\nThat's Pretty Fast!`;
      } else if (reactionTime <= 0.7) {
        instructionsText += `\nThat's okay... But still`;
      }

      if (
        (changingCircle === 1 && mouseX < width / 2) ||
        (changingCircle === 2 && mouseX >= width / 2)
      ) {
        if (reactionTime <= 0.5) {
          userPoints++;
          instructionsText = `Point! Your reaction time: ${reactionTime.toFixed(3)} seconds.`;
          if (userPoints >= 5) {
            instructionsText = `\nYou win with ${userPoints} points!`;
            gameStatus = "gameOver";
          }
        } else {
          instructionsText += `\nToo slow`;
        }
      } else {
        instructionsText += `\nWrong circle!`;
      }

      changingCircle = random() < 0.5 ? 1 : 2;
      changeColorTimeout();
      color1 = 0;
      color2 = 0;
    } else if (gameStatus === "gameOver") {
      gameStatus = "instructions";
    }
  } else if (stage == 7) {
    if (gameCurrentState === "instructions" || gameCurrentState === "gameOver") {
      isCircleMoving = false;
      isColorChanged = false;
      playerScore = 0;
      totalReactionDuration = 0;
      gameCurrentState = "playing";
      changeColorTimestamp = millis() + random(1000, 2000);
    } else if (isColorChanged) {
      let distance = dist(mouseX, mouseY, movingCircle.position.x, movingCircle.position.y);
      if (distance < reactionCircleSize / 2) {
        movingCircle.position.set(width / 2, height / 2);
        movingCircle.velocity = p5.Vector.random2D().mult(random(4, 5));
        isCircleMoving = true;
        changeColorTimestamp = millis() + random(1000, 2000);
        isColorChanged = false;
        fill('red');
        playerScore += 1;

        let reactionDuration = (millis() - reactionStartTimestamp) / 1000;
        totalReactionDuration += reactionDuration;
      }
    }
  }
}


function game1() {
  background(0);
  //appearance of the world
  stroke(0, 255, 0);
  noFill();
  strokeWeight(3);
  rect(width / 2, height / 2, width, height);
  noStroke();
  fill(0,255,0);
  rect(width/2,25,width,50);
  //words for splash 
  fill(0, 255, 0);
  textSize(50);
  textFont(titleFont);
  text('LEVEL ONE', width / 2, 100);

  //background(0);
  //fill(255);
  //text('LEVEL ONE', width / 2, 100);

  textSize(20); // Adjust the text size for the points
  textFont(bodyFont);
  text(points, width / 2, height - height / 4);
  textSize(10);

  fill(0);
  textSize(20);
  textFont(titleFont);
  text('Score:',60,25);
  text(points, 125,25);

  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);

  text(txt, width / 2, height / 2);

  // Show back button
  backButton.show();

  if (txt == "") {
    noStroke();
    fill(col, col2, 0);
    circle(width / 2, height / 2, d);
  }
}
function game3(){
  background('white');
  //appearance of the world
  stroke(0, 255, 0);
  noFill();
  strokeWeight(3);
  rect(width / 2, height / 2, width, height);
  noStroke();
  fill(0, 255, 0);
  rect(width / 2, 25, width, 50);
  //words for splash 
  fill(0, 255, 0);
  textSize(50);
  textFont(titleFont);
  text('LEVEL THREE', width / 2, 110);

  textSize(20); // Adjust the text size for the points
  textFont(bodyFont);
  text(points, width / 2, height - height / 4);
  textSize(10);

  fill(0);
  textSize(20);
  textFont(titleFont);
  text('Score:', 60, 25);
  text(points, 125, 25);
  
  
    if (gameCurrentState === "instructions") {
    fill('white');
    
    textAlign(CENTER);
    text("Click to start,", width / 2, height / 2);
    textAlign(CENTER);
    text("Click the moving circle turns green", width / 2, height / 2 + 30);
    textAlign(CENTER);
  } else if (gameCurrentState === "playing") {
    text("Score = " + playerScore, width / 2, height / 3.5);
    textAlign(CENTER);
    text("Average Reaction Time: " + (totalReactionDuration / playerScore).toFixed(3) + " seconds", width / 2, height / 4.3);
    textAlign(CENTER);

    if (isCircleMoving) {
      movingCircle.position.add(movingCircle.velocity);

      if (
        movingCircle.position.x - reactionCircleSize / 2 < 0 ||
        movingCircle.position.x + reactionCircleSize / 2 > width
      ) {
        movingCircle.velocity.x *= -1;
      }
      if (
        movingCircle.position.y - reactionCircleSize / 2 < 0 ||
        movingCircle.position.y + reactionCircleSize / 2 > height
      ) {
        movingCircle.velocity.y *= -1;
      }
    }

    if (millis() >= changeColorTimestamp && !isColorChanged) {
      fill('green');
      isColorChanged = true;
      reactionStartTimestamp = millis();
    }

    ellipse(movingCircle.position.x, movingCircle.position.y, reactionCircleSize, reactionCircleSize);

    if (playerScore >= 10) {
      let averageReactionDuration = totalReactionDuration / playerScore;
      if (averageReactionDuration > 0.4) {
        text("YOU LOSE...", width / 2, height / 2);
        textAlign(CENTER);
        gameCurrentState = "gameOver";
      } else {
        text("YOU WIN!!!", width / 2, height / 2);
        textAlign(CENTER);
        gameCurrentState = "gameOver";
      }
    }
  } else if (gameCurrentState === "gameOver") {
    // Display the game over state
    fill('white');
    text("Game Over", width / 2, height / 9);
    textAlign(CENTER);

    // Display the result
    let averageReactionDuration = totalReactionDuration / playerScore;
    let resultText = averageReactionDuration > 0.5 ? "YOU LOSE...you were too slow with a reaction time of : " + averageReactionDuration.toFixed(2) + " Seconds" : "YOU WIN!!! with an average reaction time of: " + averageReactionDuration.toFixed(2) + " Seconds" ;
    text(resultText, width / 2, height / 5);
    textAlign(CENTER);
  }

}

function delayPromptLevel1(delayTime) {
  setTimeout(function () {
userIn_n1 = prompt('Enter a noun:');
userIn_n2 = prompt('Enter a noun:');
var black = [0,0,0];
var red = [255, 0, 0];
var green = [0, 255, 0];
  //nouns
    if (nouns.includes(userIn_n1)) isColorN1=green;
      else  isColorN1=red;
    if (nouns.includes(userIn_n2)) isColorN2=green;
  else  isColorN2=red;
    
var prompt1L1= [
["Yesterday, I went to the", black],
[userIn_n1,isColorN1 ],
["with my friend. We explored the", black],
[userIn_n2, isColorN2],
[" and discovered all sorts of interesting ",black],
[" things. It was a beautiful day, and the ",black],
[userIn_n1,isColorN1 ],
[" added a touch of magic to our adventure." ,black],
[" We laughed, talked, and enjoyed the simple " ,black],
[" simple pleasure of being surrounded " ,black],
["  surrounded by nature and good company." ,black]
];
var prompt2L1=[
["Once upon a time,", black], 
["In a land of", black],
[userIn_n1,isColorN1 ],
["Lived a",black],
[userIn_n2, isColorN2], 
["who could rhyme,", black],
["And a",black],
[userIn_n1,isColorN1 ], 
["having fun in the sun.",black],
["They danced with the",black],
[userIn_n1,isColorN1 ],
["And sang with the",black],
[userIn_n2, isColorN2], 
["Underneath the bright",black],
[userIn_n1,isColorN1 ], 
["sun,",black],
["Oh what a colorful view!",black],
];
var prompt3L1 =[
["Amidst the cityscape,", black],
["I stumbled upon a hidden,", black],
[userIn_n1,isColorN1 ],
["A place of intrigue and", black],
[userIn_n2, isColorN2], 
["In the shadows, a mysterious", black],
[userIn_n1,isColorN1 ], 
["Unveiling stories untold.", black],
];
var promptsLevel1= [prompt1L1, prompt2L1,prompt3L1];
    let i = Math.floor(Math.random() * promptsLevel1.length);
      textAlign(CENTER);
    drawtext(300, 70, promptsLevel1[i]);
  }, delayTime);
}
function delayPromptLevel2(delayTime) {
  setTimeout(function () {
    
userIn_n1 = prompt('Enter a noun:');
userIn_n2 = prompt('Enter a noun:');
userIn_adj1 = prompt('Enter an adjective:');
userIn_adj2 = prompt('Enter an adjective:');
var black = [0,0,0];
var red = [255, 0, 0];
var green = [0, 255, 0];
    if (nouns.includes(userIn_n1)) isColorN1=green;
      else isColorN1=red;
    if (nouns.includes(userIn_n2)) isColorN2=green;
  else  isColorN2=red;
 
  //adj
   if (adjectives.includes(userIn_adj1)) isColorA1=green;
  else  isColorA1=red;
    if (adjectives.includes(userIn_adj2)) isColorA2=green;
 else  isColorA2=red;
    var prompt1L2 =[
["Beneath the ",black],
[userIn_adj1, isColorA1],
["sky, ", black],
["We discovered a hidden",black],
[userIn_n1,isColorN1 ],
["With ,", black],
[userIn_adj2, isColorA2],
["tales and laughter, ", black],
["Our adventure began to unfold.", black],
["In the heart of the ", black],
[userIn_n2,isColorN2 ],
["A secret whispered in the breeze, Of", black],
[userIn_adj1, isColorA1], 
["dreams and endless possibilities." , black],
];
var prompt2L2 =[
["Lost in the ",black],
[userIn_adj1, isColorA1],
[" forest, ", black],
["We stumbled upon a magical", black],
[userIn_n1,isColorN1 ],
[". The air was filled with", black],
[userIn_adj2, isColorA2],
["scents, As we explored " , black],
  ["the wonders that were meant." , black],
["Through the", black],
[userIn_n2,isColorN2 ], 
["of time, Our journey continued, sublime,", black],
["With", black],
[userIn_adj1, isColorA1],
["echoes and shadows," , black],
["A tale of mysteries it unveils." , black],
];
var prompt3L2=[
["Underneath the",black],
[userIn_adj1, isColorA1], 
["moon, A" , black],
[userIn_n1,isColorN1 ],
["revealed itself soon." , black],
["With," , black],
[userIn_adj2, isColorA2],
["colors in the night, " ,black],
[" Our senses filled with pure delight. " ,black],
["In the company of", black],
[userIn_n2,isColorN2 ], 
["and stars, Our adventure ", black],
[" surpassed all memoirs,", black],
["With", black], 
[userIn_adj1, isColorA1], 
["whispers and laughter, Our memories", black],
  [" etched forever after.", black],
];
    var promptsLevel2= [prompt1L2, prompt2L2,prompt3L2];
    let i = Math.floor(Math.random() * promptsLevel2.length);
  
 textAlign(RIGHT);
    drawtext(500, 70,promptsLevel2[i] );


  }, delayTime);
}
function delayPromptLevel3(delayTime) {
  setTimeout(function () {
 userIn_v1 = prompt('Enter a verb:');
 userIn_v2 = prompt('Enter a verb:');
userIn_n1 = prompt('Enter a noun:');
userIn_n2 = prompt('Enter a noun:');
userIn_adj1 = prompt('Enter an adjective:');
userIn_adj2 = prompt('Enter an adjective:');
var black = [0,0,0];
var red = [255, 0, 0];
var green = [0, 255, 0];
  if (verbs.includes(userIn_v1)) isColorV1=green;
   else  isColorV1=red;
 if (verbs.includes(userIn_v2)) isColorV2=green;
     else  isColorV2=red;

    if (nouns.includes(userIn_n1)) isColorN1=green;
      else  isColorN1=red;
    if (nouns.includes(userIn_n2)) isColorN2=green;
  else  isColorN2=red;

  //adj
   if (adjectives.includes(userIn_adj1)) isColorA1=green;
  else  isColorA1=red;
    if (adjectives.includes(userIn_adj2)) isColorA2=green;
  else  isColorA2=red;
  var prompt1L3= [
["On a spooky Halloween night, I saw a" , black], 
[userIn_adj1, isColorA1], 
[userIn_n1,isColorN1 ],
["wearing a" , black], 
[userIn_adj2, isColorA2], 
["costume. It was carrying a", black],
[userIn_n2,isColorN2 ], 
["and", black],
[userIn_v1, isColorV1], 
["through the haunted forest. Suddenly, a" , black],
[userIn_adj1, isColorA1], 
[userIn_n1,isColorN1 ],
[" jumped out and", black], 
[userIn_v1, isColorV1],  
["right in front of us! ", black],
    [" We both screamed and", black],
[userIn_v2, isColorV2], 
["away as fast as we could.", black],
];
var prompt2L3= [
["During the festive Christmas season," , black],
  [" I decorated the" , black],
[userIn_adj1, isColorA1], 
[userIn_n1,isColorN1 ],
["with", black], 
[userIn_adj2, isColorA2], 
["ornaments. The smell of", black], 
[userIn_n2,isColorN2], 
["filled the air as we" , black],
[userIn_v1, isColorV1],  
["and", black],
[userIn_v2, isColorV2], 
["around the beautifully adorned tree." , black], 
  [" We exchanged" , black], 
[userIn_adj2, isColorA2], 
["gifts and" , black], 
[userIn_v2, isColorV2], 
["until the late hours of the night, ",black],
  ["creating wonderful memories.",black],
];
var prompt3L3=[
["On Easter morning,", black],
  [" I discovered a basket filled with", black],
[userIn_adj1, isColorA1], 
[userIn_n1,isColorN1 ],
["and", black],
[userIn_adj2, isColorA2], 
["eggs. Excitedly I" , black],
[userIn_v1, isColorV1],  
["to find more hidden surprises. " , black],
  ["The sun was shining, and everyone was" , black],
[userIn_v2, isColorV2],  
["in the garden, enjoying the" , black], 
[userIn_adj2, isColorA2], 
["weather. We gathered together,",black],
[userIn_v1, isColorV1],  
["and", black],
[userIn_v2, isColorV2], 
[" as we celebrated the joyous occasion.",black],
];
   var promptsLevel3= [prompt1L3, prompt2L3,prompt3L3];
     let i = Math.floor(Math.random() * promptsLevel3.length);
    textAlign(CENTER);
    drawtext(400, 70, promptsLevel3[i] );

  }, delayTime);
}
function pickAndDisplayWords(wordArray, xCoord, yCoord) {
  // Pick two random indices from the array
  let index1 = floor(random(wordArray.length));
  let index2 = floor(random(wordArray.length));

  // Ensure the indices are different
  while (index1 === index2) {
    index2 = floor(random(wordArray.length));
  }

  // Get the selected words
  let word1 = wordArray[index1];
  let word2 = wordArray[index2];

  // Display the words on the canvas
  textAlign(CENTER, CENTER);
  textSize(15);
  fill(0);
  text(word1, xCoord, yCoord);
  text(word2, xCoord, yCoord + 20);
}
function drawtext( x, y, text_array ) {
  
    var pos_x = x;
    for ( var i = 0; i < text_array.length;  i++ ) {
        var part = text_array[i];
        var t = part[0];
        var c = part[1];
        var w = textWidth( t );
        fill( c );
        text( t, pos_x, y);
      textSize(15);
        //pos_x += w;
        y = y + 15;
    }
}
