let data;
let val;
let na_url = "https://vlrggapi.vercel.app/stats/na/{timespan}"; // calls the stats of all players in NA
//let eu_url = "https://vlrggapi.vercel.app/stats/eu/{timespan}";
//let ap_url = "https://vlrggapi.vercel.app/stats/ap/{timespan}";

let proxy_url = 'https://corsproxy.io/?';

function preload() {
  let combo = proxy_url + na_url;
  data = loadJSON(combo);
}

function setup() {
  createCanvas(400, 400);
  // print to console
  console.log(data);
}

function draw() {
  background(220);
}