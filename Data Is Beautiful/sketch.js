//percentages are a bit wonky
//also I can't really call the kills_deaths variable here don't know why
let data;
let val;
let vlr = "https://vlrggapi.vercel.app/stats/na/{timespan}"; // calls the stats of all players in NA
let picker;
let playerName;
let proxy_url = 'https://corsproxy.io/?';
let username;

let ACS; // round rating
let ASPR;
let ADPR;
let CSP;
let FDPR;
let FKPR;
let HSP;
let KD; //this is actually ACS
let KPR;

let acs_slider;
let aspr_slider;
let adpr_slider;
let csp_slider;
let fdpr_slider;
let fkpr_slider;
let hsp_slider;
let kd_slider;
let kpr_slider;

function setup() {
  createCanvas(1000, 1000);
  let combo = proxy_url + vlr;
  data = loadJSON(combo,printData); //loads in the data
  picker = createSelect();
  picker.position(-100, -100);
  username = 'Choose a player from the dropdown!';
  console.log(data);
  

  // all of the sliders on the screen
  acs_slider = createSlider(0,200,0);
  acs_slider.position(10,100);
  acs_slider.style ('width', '600px')

  aspr_slider = createSlider(0,200,0);
  aspr_slider.position(10,150);
  aspr_slider.style ('width', '600px')

  adpr_slider = createSlider(0,5,0);
  adpr_slider.position(10,210);
  adpr_slider.style ('width', '600px')

  csp_slider = createSlider(0,5,0);
  csp_slider.position(10,270);
  csp_slider.style ('width', '600px')

  fdpr_slider = createSlider(0,100,0);
  fdpr_slider.position(10,330);
  fdpr_slider.style ('width', '600px')

  fkpr_slider = createSlider(0,100,0);
  fkpr_slider.position(10,390);
  fkpr_slider.style ('width', '600px')

  hsp_slider = createSlider(0,100,0);
  hsp_slider.position(10,450);
  hsp_slider.style ('width', '600px')

 /* kd_slider = createSlider(0,500,0);
  kd_slider.position(10,510);
  kd_slider.style ('width', '600px')
*/
  kpr_slider = createSlider(0,200,0);
  kpr_slider.position(10,510);
  kpr_slider.style ('width', '600px')
}

function draw() {
  background(220);
  textSize(20);
  //displays all of the text on the screen with the value of the stats
  playerName = text('Player' + ':' + username,10,60); 
  text('Round Rating' + ':' + ACS, 10, 90);
  text('Assists Per Round' + ':' + ASPR, 10,140);
  text('Average Damage Per Round' + ':' + ADPR, 10, 200);
  text('Clutch Success Percentage' + ':' + CSP, 10, 260);
  text('First Deaths Per Round' + ':' + FDPR, 10, 320);
  text('First Kills Per Round' + ':' + FKPR, 10,380);
  text('Headshot Percentage' + ':' + HSP, 10,440);
  //text('Average Combat Score' + ':' + KD, 10, 500);
  text('Kills Per Round' + ':' + KPR, 10, 500)
}

function printData(data){
  //should populate the dropdown with the player names
  for (let i = 0; i < data.data.segments.length; i++){ 
    picker.option(data.data.segments[i].player, i);
  }
  picker.changed(changePlayer);
  picker.position(10,10);

 }




function changePlayer() {
  //the data being pulled from the api itself
  let index = picker.selected();
  ACS = data.data.segments[index].average_combat_score;
  username = data.data.segments[index].player;
  acs_slider.value(ACS * 100);
  ASPR = data.data.segments[index].assists_per_round;
  aspr_slider.value(ASPR * 100);
  ADPR = data.data.segments[index].average_damage_per_round;
  adpr_slider.value(ADPR);
  CSP = data.data.segments[index].clutch_success_percentage;
  csp_slider.value(CSP * 100);
  FDPR = data.data.segments[index].first_deaths_per_round;
  fdpr_slider.value(FDPR * 100);
  FKPR = data.data.segments[index].first_kills_per_round;
  fkpr_slider.value(FKPR * 100);
  HSP = data.data.segments[index].headshot_percentage;
  hsp_slider.value(HSP * 100);
  //KD = data.data.segments[index].kills_deaths;
  //kd_slider.value(KD);
  KPR = data.data.segments[index].kills_per_round;
  kpr_slider.value(KPR);

  if (index == 11){ // A little easter egg
    username = 'THIS PLAYER IS A CHEATER. Please file a report at https://support-valorant.riotgames.com/hc/en-us/articles/360050787693-Report-Players-After-Game-Here';
  }
}



