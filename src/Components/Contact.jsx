import "../StyleSheets/Contact.css"


const Contact = () => {
    return (
        <div>
            <div className='backContact'>
                <div className='textContact'>
                    <h2>Contact</h2>
                </div>
            </div>
            <div>
                <div className="pageContact">
                    <div className="contactForm">
                        <form className="form">
                <p className="fs-3 mb-3 text-dark fw-bold">Get in Touch</p>
                            <p> <textarea name="" className="inpForm" cols={70} rows={9} id="" placeholder="Enter Message"></textarea> </p>
                            <div className="int1">
                                <input type="text" placeholder="Enter your name" className="inpForm" />
                                <input type="email" placeholder="Email" className="inpForm" />
                            </div>
                            <input type="text" className="intSubject inpForm" placeholder="Enter Subject" />
                            <p><button type="submit" className="btnSubmit">SEND</button></p>
                        </form>
                    </div>
                    <div className="contactInfo">
                        <div className="d-flex itemContactInfo">
                            <div><i className="fa fa-home iconContactInfo"></i></div>
                            <div>
                                <span>Buttonwood, California.</span>
                                <p className="text-secondary">Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="d-flex itemContactInfo">
                            <div><i className="fa fa-tablet iconContactInfo"></i></div>
                            <div>
                                <span>+1 253 565 2365</span>
                                <p className="text-secondary">Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="d-flex itemContactInfo">
                            <div><i className="fa fa-envelope-o	 iconContactInfo"></i></div>
                            <div>
                                <span>support@colorlib.com</span>
                                <p className="text-secondary">Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
