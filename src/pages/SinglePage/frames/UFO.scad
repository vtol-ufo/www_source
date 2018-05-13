include <screwprop.scad>;

bigCircle = 350;
topH = 50;
wdth =5;

smallCircle = 80;

motorCircle = 100;

leftW = sqrt( (bigCircle/2)*(bigCircle/2) - ((bigCircle/2-topH))*((bigCircle/2-topH)));

diskWing();
center();

module center() {
translate([0,0,bigCircle/2-topH-smallCircle/4])    
rotate([90,0,0])
union() {
  wl = motorCircle/2-wdth;  
  screwprop(wl, wl/6, 20, wl/4);
  rotate(a=[0,90,0])  {screwprop(wl, wl/6, 20, wl/4);};
  rotate(a=[0,180,0]) {screwprop(wl, wl/6, 20, wl/4);};
  rotate(a=[0,270,0]) {screwprop(wl, wl/6, 20, wl/4);};
  translate([0,1,0])rotate(a=[90,0,0]) cylinder(h = wl/4, r=wl/6+1, $fn=60);
}

}

module diskWing() {
rotate_extrude(angle = 360-90, convexity = 2)
union() {    
translate([- motorCircle/2 -leftW, 0])
union() {
  cover();
  walls();
}
centerWalls();
}
}
module centerWalls() {
translate([0,bigCircle/2-topH])
difference() {
  circle(d=motorCircle+2*wdth);
  circle(d=motorCircle);
  translate([-motorCircle/2-wdth,-motorCircle/2-wdth])
    square([motorCircle+2*wdth,motorCircle/2+wdth]);
  square([motorCircle+2*wdth,motorCircle/2+wdth]);  
}

polygon([[0,bigCircle/2-topH+wdth]
,[0,bigCircle/2-topH-smallCircle/2]
,[- motorCircle/2,bigCircle/2-topH-smallCircle/2]
,[- motorCircle/2,bigCircle/2-topH-smallCircle/2+wdth]
,[- wdth,bigCircle/2-topH-smallCircle/2+wdth]
,[- wdth,bigCircle/2-topH]
,[- wdth-motorCircle/2,bigCircle/2-topH]
,[- wdth-motorCircle/2,bigCircle/2-topH+wdth]
]);
}

module cover() {
difference() {
  circle(d=bigCircle);
  circle(d=bigCircle-wdth*2);
  translate([0,-topH])
    square([bigCircle, bigCircle],center=true);
  translate([80,0])  
    square([20,bigCircle]);
}

translate([-leftW + smallCircle/4, bigCircle/2 - topH])
  left();
}

module left() {
  difference() {
    circle(d=smallCircle);
    circle(d=smallCircle - wdth*2);
    translate([0, -smallCircle/2])
      square(smallCircle);
  }
}
module walls() {
polygon([[-leftW+smallCircle/4,bigCircle/2-topH-smallCircle/2], [leftW, bigCircle/2-topH-smallCircle/2], [leftW, bigCircle/2-topH-smallCircle/2+wdth]
, [-leftW+smallCircle/4, bigCircle/2-topH-smallCircle/2+wdth]]);

polygon([
 [-wdth, bigCircle/2-topH-smallCircle/2+wdth+smallCircle/4]
, [leftW, bigCircle/2-topH-smallCircle/2+wdth+smallCircle/4]
, [leftW, bigCircle/2-topH-smallCircle/2+wdth+smallCircle/4+wdth]
, [wdth, bigCircle/2-topH-smallCircle/2+wdth +smallCircle/4+wdth]
, [wdth, bigCircle/2-wdth/2]
, [-wdth, bigCircle/2-wdth/2]

]);
    
}