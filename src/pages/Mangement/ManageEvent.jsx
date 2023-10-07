import { BsFillSendFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
AOS.init();

const ManageEvent = () => {
  const handleEvent = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Thanks for Contacting , We will be in touch");
  };

  return (
    <div>
      <div>
        <section className="bg-gray-100">
          <div className="mx-auto container  py-16  lg:px-0">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div
                data-aos="fade-down"
                className="lg:col-span-2 p-4 text-center lg:text-start lg:py-12"
              >
                <h3 className=" text-xl lg:text-2xl text-black font-bold">
                  Elevate Your Event Experience by{" "}
                </h3>
                <h3 className="font-bold bg-clip-text py-3 bg-gradient-to-r from-[#ef4136] to-[#fbb040] text-transparent text-4xl bg xl:text-6xl">
                  Customizing <br /> and <br />
                  Collaborating
                </h3>
                <h3 className="lg:text-2xl text-xl text-black font-bold">
                  With us.
                </h3>

                <p className="mt-6 font-medium text-gray-400">
                  Host events and talk with wour superviser and event mangers to
                  make sure how to give your audience the proper experience of a
                  lifetime event.For Any kind of information you can send query
                  to us with choosing your current event plan and our experts
                  will be in touch with you.
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
              >
                <form onSubmit={handleEvent} className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-black p-3 text-sm"
                      placeholder="Customized Event name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        text
                      </label>
                      <input
                        className="w-full rounded-lg border border-black p-3 text-sm"
                        placeholder="Event address"
                        type="text"
                        id="text"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border border-black p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border border-black p-3 text-sm"
                        placeholder="Approximate Audience"
                        type="number"
                        id="number"
                      />
                    </div>

                    <div>
                      <input
                        className="w-full rounded-lg border border-black p-3 text-sm"
                        placeholder="Enter your date"
                        type="date"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <input
                        className="peer sr-only border border-black"
                        id="option1"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option1"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0"
                      >
                        <span className="text-sm cursor-pointer">
                          {" "}
                          Basic Event{" "}
                        </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="peer sr-only  border border-black"
                        id="option2"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option2"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0"
                      >
                        <span className="text-sm cursor-pointer">
                          {" "}
                          Premium Package{" "}
                        </span>
                      </label>
                    </div>

                    <div>
                      <input
                        className="peer sr-only  border border-black"
                        id="option3"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option3"
                        className="block  w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                        tabIndex="0"
                      >
                        <span className="text-sm cursor-pointer">
                          {" "}
                          Mega Event{" "}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full resize-none rounded-lg border border-black p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4 flex flex-col  md:items-center  xl:items-start">
                    <button className=" btn btn-neutral bg-black hover:bg-black">
                      Send Enquiry <BsFillSendFill></BsFillSendFill>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageEvent;
