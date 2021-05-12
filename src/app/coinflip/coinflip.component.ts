import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coinflip',
  templateUrl: './coinflip.component.html',
  styleUrls: ['./coinflip.component.css']
})
export class CoinflipComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {
     //there is a bug in this where the very first flip does not correctly expose the tails side
//but every flip thereafter shows the tails side properly

//if you can help with this, I'd be mighty appreciative haha Please send me an email at marcus@marcusparsons.com
var toggler = false;
var degflag = false;
var enddegflag = false;
var min = 10;
var max = 17;
var randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
var counter = 1;

var quheads = "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png";
var qutails = "https://upload.wikimedia.org/wikipedia/commons/a/af/2008_HI_Proof.png";
var myimg = <HTMLImageElement>document.querySelector("#myimg");
var result = <HTMLSpanElement>document.querySelector("#result");
var posrotInterval, negrotInterval;

//css way
myimg.addEventListener("click", function() {
  counter = 1;
  toggler = false;
  degflag = false;
  enddegflag = false;
  randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  myimg.style.transform = "rotateY(89deg)";
}, false);

myimg.addEventListener("transitionend", function () {
  if (counter < randNumber) {
    toggler = (toggler) ? false : true;
    if (toggler) {
      myimg.src = (myimg.src == quheads) ? qutails : quheads;
      myimg.style.transform = "rotateY(0deg)";
      degflag = false;
    }
    else {
      myimg.style.transform = "rotateY(89deg)";
      degflag = true;
    }
    counter += 1;
  }
  else {
    if (degflag && !enddegflag) {
      myimg.style.transform = "rotateY(0deg)";
      enddegflag = true;
    }
    else {

      if (myimg.src == quheads) {
        result.innerHTML = "HEADS";
        result.style.color = "#00aaff";
      }
      else {
        result.innerHTML = "TAILS";
        result.style.color = "#cc0000";
      }
      document.querySelector("#lasttime").innerHTML = new Date().toLocaleString();
    }
  }
}, false);
  }

}
