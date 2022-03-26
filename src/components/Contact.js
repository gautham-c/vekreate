import React from 'react';
import Popup from 'reactjs-popup';

const Contact = () => {
    return (
        <div id="contact" class="container-fluid bg-grey">
            <h2 class="text-center">CONTACT</h2>
            <div class="row">
                <div class="col-sm-5">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><span class="glyphicon glyphicon-map-marker"></span> Uttrakhand, India</p>
                    <p><span class="glyphicon glyphicon-phone"></span> +91 9515151515</p>
                    <p><span class="glyphicon glyphicon-envelope"></span>{" "}myemail@something.com</p>
                </div>
                <div class="col-sm-7 slideanim">
                    <div class="row">
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
                        </div>
                        <div class="col-sm-6 form-group">
                            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                        </div>
                    </div>
                    <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                    <div class="row">
                        <div class="col-sm-12 form-group">
                    <Popup class="rounded" trigger={<button class="btn btn-default pull-right" type="submit">Send</button>} modal><p class="text-center">We will get back to you within 24 hours</p></Popup>         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;