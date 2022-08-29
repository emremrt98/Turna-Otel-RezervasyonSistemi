import Carousel from 'react-bootstrap/Carousel';
import Hotel1 from '../../../../assets/hotels/hotel1.jpg';
import Hotel2 from '../../../../assets/hotels/hotel2.jpg';
import Hotel3 from '../../../../assets/hotels/hotel3.jpg';
function carousel() {
    return (
        <Carousel fade>
            <Carousel.Item><img className="d-block w-100" src={Hotel1} alt="First slide" /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100" src={Hotel2} alt="Second slide" /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100" src={Hotel3} alt="Third slide" /></Carousel.Item>
        </Carousel>
    );
}

export default carousel;