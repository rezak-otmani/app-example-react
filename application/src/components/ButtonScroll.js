import React from 'react'
import image1 from '../img/image_link1.png';
import image2 from '../img/image_link2.png';


class ButtonScroll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: {image1}
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: {image2}
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: {image1}
    });
  }

  render() {
    return (
      <div>
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/>
      </div>
    );
  }

}

ButtonScroll.propTypes = {
}

ButtonScroll.defaultProps = {
}

export default ButtonScroll;
