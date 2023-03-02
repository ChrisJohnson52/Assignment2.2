// Christian-Thomas Douglas De Guzman Johnson
// CSC 2463 Assignment 2.2
// Synths and Sequencers
let sounds = 
{
  'q': 'C4',
  'w': 'D4',
  'e': 'E4',
  'r': 'F4',
  't': 'G4',
  'y': 'A4',
  'u': 'B4'
}

let slider;
const synth = new Tone.PluckSynth();
const reverb = new Tone.JCReverb(0.4);

function setup() 
{
  createCanvas(370, 70);

  reverb.toDestination();
  synth.connect(reverb);
  synth.release = 2;
  synth.resonance = 0.98;

  slider = new Nexus.Slider("#slider");
  slider.on('change', (v) =>  
  {
    reverb.roomSize.value = v;
  }); 
}

function draw() 
{
  background('#c4a5e8');
  textSize(20);
  text("move slider to change reverb", 0, 15);
  text("press letters q, w, e, r, t, y, u to play notes", 0, 60);
}

function keyPressed() 
{
  let play = sounds[key];
  console.log(play);
  synth.triggerAttackRelease(play, 0.5);
}