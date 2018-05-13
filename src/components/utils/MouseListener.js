/** Tracker for x, y coordinates */
class MouseListener {
  constructor() {
    this.offsetX=0;
    this.offsetY=0;
    this.x=0;
    this.y=0;
    this.mouseListenerElement=null;
  }
  /** Mouse event coordinates detection, very browser specific part of code */
  onMouseMove(e) {
    this.x=e.clientX;
    this.y=e.clientY;
    let t = this.mouseListenerElement == null ? e.target : this.mouseListenerElement;
    while(t!=null) {
      let s = window.getComputedStyle(t); //t.style      
      if(s.position=="relative") {
	this.offsetX=t.getBoundingClientRect().left;// + window.scrollX;
	this.offsetY=t.getBoundingClientRect().top;// + window.scrollY;
        break;
      }
      t = t.parentElement;
    }
    //x and y now are from top corner
    //check target parents to identify iframe, 
    //if iframe found x, and y must be recalculated
  }
  
  getX() {
	return this.x-this.offsetX;
  }
  getY() {
	return this.y-this.offsetY;
  }
}
export default MouseListener;