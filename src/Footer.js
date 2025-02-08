import restaurantImage from './images/restaurant.jpg'

function Footer() {
    return (
        <footer>
            <img src={restaurantImage} height="200" width="150" style={{objectFit: "cover"}} alt="footer image"/>
        </footer>
    );
}

export default Footer;