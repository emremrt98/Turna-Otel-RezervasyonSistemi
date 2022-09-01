import Carousel from 'react-bootstrap/Carousel';

function carousel({ img1, img2, img3 }) {
    return (
        <Carousel fade >
            <Carousel.Item><img className="d-block w-100" src={img1} alt="First slide" /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100" src={img2} alt="Second slide" /></Carousel.Item>
            <Carousel.Item><img className="d-block w-100" src={img3} alt="Third slide" /></Carousel.Item>
        </Carousel>
    );
}

export default carousel;