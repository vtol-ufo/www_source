import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Frame from 'templates/FlatPage/organisms/Frame.js';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
//Use only 5 otherwise it will too big file
import i01 from "./01.jpg";
import i02 from "./19.jpg";
import i03 from "./06.jpg";
import i04 from "./10.jpg";
import i05 from "./17.jpg";
import i06 from "./29.jpg";

let im = [];
/* not work because vars not exported
for(var i=0;i<6;i++) {
  im[i] = eval("i"+(i+1));
}
*/

im[0] = i01;
im[1] = i02;
im[2] = i03;
im[3] = i04;
im[4] = i05;
im[5] = i06;

let items = [];
for(var i=0; i<im.length; i++) {
//  let num = "0000"+i;
//  num = num.substring(num.length()-2);
//  import im[i] from ""+num+".jpg";
  items[i] = {
    src: im[i],
    altText: 'Slide '+i,
    caption: 'Slide '+i
  }
}



class WorkProgress extends Frame {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  renderContent() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} height={600}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        height={600}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default WorkProgress;