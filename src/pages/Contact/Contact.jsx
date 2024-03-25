import { FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaWifi } from "react-icons/fa";
import "./Contact.scss"
import Aos from "aos";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return(
        <>
            <section class="contact v1 py-12">
                <div class="container mx-auto">
                    <div class="flex gap-5">
                        <div class="w-[40%]">
                            <div class="get-in-touch" 
                            data-aos="fade-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <div class="section-title v1">
                                    <h3 class="text-3xl font-bold">Get In Touch</h3>
                                    <p class="text-md mt-4">Certainly! it seems like you like to get in touch please feel free to provide more details or ask any questions you have, and I will do my best ot assist you. How can I help you today?</p>
                                </div>
                                <h6 class="text-lg font-bold mt-5">Opening Hours</h6>
                                <ul class="date mt-6">
                                    <li>
                                        <p class="text-md">Monday</p>
                                        <p class="text-md">8.00 - 21.00</p>
                                    </li>
                                    <li>
                                        <p class="text-md">Tuesday</p>
                                        <p class="text-md">8.00 - 21.00</p>
                                    </li>
                                </ul>
                                <div className="flex gap-5 mt-5">
                                    <FaFacebook className="hover:text-rose-600 text-3xl font-bold"></FaFacebook>
                                    <FaGoogle className="hover:text-rose-600 text-3xl font-bold"></FaGoogle>
                                    <FaTwitter className="hover:text-rose-600 text-3xl font-bold"></FaTwitter>
                                    <FaInstagram className="hover:text-rose-600 text-3xl font-bold"></FaInstagram>
                                    <FaWifi className="hover:text-rose-600 text-3xl font-bold"></FaWifi>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="w-[60%]">
                            <section class="contact-map"
                            data-aos="fade-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14613.167032861855!2d90.433811!3d23.701273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b767a022cd4b%3A0xaf33907e219d127!2sRayerbag%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1675146270950!5m2!1sen!2sbd"></iframe>
                            </section>
                            <form action="#" class="contact-form mt-10">
                                <h3 class="text-3xl font-bold">Quick Information.</h3>
                                <div class="form-box">
                                    <label for="name-1">Name</label>
                                    <input id="name-1" type="text" placeholder="Name*" required />
                                </div>
                                <div class="form-box">
                                    <label for="email-2">Email</label>
                                    <input id="email-2" type="email" placeholder="Enter Your Email*" required />
                                </div>
                                <div class="form-box">
                                    <label for="message-3">Message</label>
                                    <textarea id="message-3" placeholder="Type Hare" required></textarea>
                                </div>
                                <button class="bg-rose-700 hover:bg-rose-800 mt-4 text-white font-semibold px-4 py-2 rounded-lg">Request A Quote</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;