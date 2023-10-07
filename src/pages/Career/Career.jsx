import { BsSearch } from "react-icons/bs";

const Career = () => {
  return (
    <div>
      <div className="flex p-6 lg:p-0 flex-col-reverse lg:flex-row container mx-auto items-center min-h-[90vh] ">
        <div className="flex-1 space-y-6 ">
          <h3 className=" text-3xl lg:text-5xl font-bold mb-5">
            Want to build in your carrer in event management?
          </h3>
          <p className="font-medium text-gray-400 text-xl">
            Join us on this incredible voyage, where events become experiences,
            where strategy meets spectacle, and where teamwork transforms into
            triumph.Explore the opportunities that await you, and embark on a
            career.
          </p>
          <div>
            <a href="#jobs">
              <button className="btn btn-neutral ">
                {" "}
                <BsSearch></BsSearch> Find job
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://i.ibb.co/BVyjDLh/interview.png" alt="" />
        </div>
      </div>

      <div className="my-12  container mx-auto p-6">
        <h3 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h3>

        <div className="flex gap-6 flex-col-reverse lg:flex-row items-center">
          <div className="flex flex-1 flex-col gap-3">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Why should you work with us ?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Our company operates in the exciting and dynamic fields of
                  tech and gaming event management. Working here means being at
                  the forefront of cutting-edge technology and gaming trends,
                  offering employees the chance to stay engaged and passionate
                  about their work.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What are the chances to improve creativity?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  Our company encourages creativity and innovation in event
                  planning. Team members have the opportunity to brainstorm and
                  implement creative ideas, pushing the boundaries of {
                    "what's"
                  }{" "}
                  possible in event management.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What are the benfits of working here ?
              </div>
              <div className="collapse-content">
                <p>
                  Offering flexible work arrangements and recognizing the
                  importance of work-life balance, our company prioritizes the
                  well-being of its employees. As our company continues to grow
                  and expand its reach, employees have the chance to grow with
                  it. This could mean advancement opportunities and the ability
                  to take on greater responsibilities.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://i.ibb.co/sbSxx9t/faq.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
