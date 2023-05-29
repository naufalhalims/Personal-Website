/* eslint-disable @next/next/no-img-element */
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_0bb7yod", // service id
          "template_xkfhrji", // template id
          mailData,
          "uxv9clU1BLxESYljG" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="edrea_tm_section hidden animated" id="contact">
      <div className="section_inner">
        <div className="edrea_tm_contact">
          <div className="edrea_tm_main_title">
            <h3>
              Get in <span className="coloring">Touch</span>
            </h3>
          </div>
          <div className="wrapper">
            <div className="left">
              <ul>
                <li>
                  <div className="list_inner">
                  <img src="img/logo/instagram.png" width={40} height={40} alt=""/>
                    <a href="https://www.instagram.com/naufalhal">Instagram : @naufalhal</a>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                  <img src="img/logo/tiktok.png" width={40} height={40} alt=""/>
                    <a href="https://www.tiktok.com/@naufalhal">Tiktok : @naufalhal</a>
                  </div>
                </li>

                <li>
                  <div className="list_inner">
                  <img src="img/logo/email.png" width={40} height={40} alt=""/>  
                    <a href="mailto:naufalhalim46@gmail.com">naufalhalim46@gmail.com</a>
                  </div>
                </li>
                {/* <li>
                  <div className="list_inner">
                  <img src="img/logo/wa.png" width={40} height={40} alt=""/>  
                    <a href="https://wa.me/6287785165430">Whatsapp : (+62) 877-8516-5430</a>
                  </div>
                </li> */}
                <li>
                  <div className="list_inner">
                  <img src="img/logo/podcast.png" width={40} height={40} alt=""/>
                    <a href="https://spotifyanchor-web.app.link/e/NxlQrvQ1Txb">Podcast : Query & Answer</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="fields">
                <form
                  className="contact_form"
                  id="contact_form"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="first">
                    <ul>
                      <li>
                        <div className="list_inner">
                          <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={(e) => onChange(e)}
                            value={name}
                          />
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={(e) => onChange(e)}
                            value={email}
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <input className="a" type="submit" value="Submit Message" />
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
