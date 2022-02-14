import '../../styles/components/layout/Header.css';
import Lg from './svg';


const Header = (props) => {

    return (
        <header >

            <div className="social">
                <a href='https://www.instagram.com/' target="_blank">
                    <img src="/img/instagram.png" alt="Logo alt" /></a>
                <a href='https://www.facebook.com/' target="_blank">
                    <img src="/img/facebook.png" alt="Logo alt" /></a>
                <a href='https://www.twitter.com/' target="_blank">
                    <img src="/img/twitter.png" alt="Logo alt" /></a>

                <h4>Visita nuestras redes</h4>
            </div>
            <div className="svg">
                <a href="/">
                    <Lg />
                </a>
            </div>

        </header >
    );
}

export default Header;