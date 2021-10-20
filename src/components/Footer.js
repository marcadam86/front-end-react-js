import React from 'react'
import footer from '../assets/footer.png'
import footerLogo from '../assets/footer-logo.png'
import android from '../assets/google-play.png'
import iphone from '../assets/app-store.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer mt-4 mb-4">
            <hr />
            <div className="upper-footer">
                <Link to="/"><img src={footerLogo} alt="" srcset="" /></Link>
            </div>
            <div className="lower-footer">
                <ul>
                    <li><h6>Locators</h6></li>
                    <li><a href="">Lorem ipsum dolor sit amet.</a></li>
                    <li><a href="">Voluptates recusandae iusto rerum et.</a></li>
                    <li><a href="">Minima, ratione dignissimos? Sed, labore?</a></li>
                </ul>
                <ul>
                    <li><h6>Contacts</h6></li>
                    <li><a href="">Lorem ipsum dolor sit amet.</a></li>
                    <li><a href="">Rem aliquam perferendis commodi accusantium!</a></li>
                </ul>
                <ul>
                    <li><h6>Products</h6></li>
                    <li><a href="">Voluptates recusandae iusto rerum et.</a></li>
                    <li><a href="">Minima, ratione dignissimos? Sed, labore?</a></li>
                </ul>
                <ul>
                    <li><h6>Get in touch</h6></li>
                    <li><a href="">Lorem ipsum dolor sit amet.</a></li>
                </ul>
                <ul>
                    <li><a href=""><img src={android} alt="" srcset="" /></a></li>
                    <li><a href=""><img src={iphone} alt="" srcset="" /></a></li>
                </ul>
            </div>
            <div className="mb-4">
                <img src={footer} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Footer
