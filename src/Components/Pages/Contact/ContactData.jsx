import {
  faEnvelope,
  faFax,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactData = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1  gap-8 place-items-start  mx-auto w-11/12">
        <div>
          <div className="my-10">
            <h3 className="text-4xl my-4 font-bold">Drop us message</h3>
            <p className="text-xl font-medium">
              Connect with us and experience exceptional customer service and
              support.
            </p>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Ente your name"
              className="my-6 w-full focus:outline-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black"
              required
            />
            <input
              type="email"
              placeholder="Ente your email"
              className="my-6 w-full focus:outline-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black"
              required
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="my-6 w-full focus:outline-none resize-none border-b-[2px] focus:border-b-black border-b-gray-300 pb-1 text-xl text-black "
              placeholder="Enter your message"
              required
            ></textarea>
            <button className="bg-[#73841B] w-full py-4 text-white text-xl">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="my-10">
            <h3 className="text-4xl my-4 font-bold">Find Our Office</h3>
            <p className="text-xl font-medium">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Cras mattis consectetur purus sit amet fermentum. Sed posuere
              est at lobortis.
            </p>
          </div>
          <div className="py-8">
            <ul>
              <li className="text-xl font-light py-4">
                <FontAwesomeIcon icon={faPhone} />
                <span className="pl-3"> Call us on (646) 663-4575</span>
              </li>
              <li className="text-xl font-light py-4">
                <FontAwesomeIcon icon={faFax} />
                <span className="pl-3"> Fax : +(1) 111-1230-981-11</span>
              </li>{" "}
              <li className="text-xl font-light py-4">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="pl-3"> Mail : help@engotheme.com</span>
              </li>{" "}
              <li className="text-xl font-light py-4">
                <FontAwesomeIcon icon={faLocation} />
                <span className="pl-3">Address : 1201 Broadway Suite 600</span>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      <div className="my-20 w-full h-96 bg-gray-300 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0 w-full"
          frameBorder="0"
          title="map"
          marginWidth="0"
          marginHeight="0"
          scrolling="yes"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: " grayscale(0) contrast(1.2) opacity(0.9) " }}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactData;
