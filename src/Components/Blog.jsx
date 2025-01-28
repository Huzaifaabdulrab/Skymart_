import React, { useState } from "react";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="text-gray-600 w-[90%] m-auto body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap flex-col">
       
          <div className="flex flex-wrap justify-center sm:justify-start mb-10">
            <a
              onClick={() => handleTabChange("description")}
              className={`cursor-pointer sm:px-6 px-4 py-3 w-1/2 sm:w-auto text-center border-b-2 title-font font-medium inline-flex items-center leading-none ${
                activeTab === "description"
                  ? "bg-gray-100 border-[#A52A2A] text-[#A52A2A]"
                  : "border-gray-200 hover:text-[#A52A2A]"
              }`}
            >
              <svg
                fill="currentColor"
                className="w-5 h-5 mr-3 hidden sm:block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 16H5V5h14v9h-6v5zm0-6v-3h3v3h-3z" />
              </svg>
              Description
            </a>
            <a
              onClick={() => handleTabChange("reviews")}
              className={`cursor-pointer sm:px-6 px-4 py-3 w-1/2 sm:w-auto text-center border-b-2 title-font font-medium inline-flex items-center leading-none ${
                activeTab === "reviews"
                  ? "bg-gray-100 border-[#A52A2A] text-[#A52A2A]"
                  : "border-gray-200 hover:text-[#A52A2A]"
              }`}
            >
              <svg
                fill="currentColor"
                className="w-5 h-5 mr-3 hidden sm:block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3 14l-3-1.5L9 16l.5-3.5L7 9h3.5L12 5l1.5 4H17l-2.5 2.5L15 16z" />
              </svg>
              Reviews (0)
            </a>
          </div>

         
          <div className="flex flex-col text-start w-full">
            {activeTab === "description" && (
              <div>
                <h1 className="text-xl font-medium title-font mb-4">
                  Kylie Cosmetics Matte Lip Kits let you create long-lasting
                  matte lip looks. The highly pigmented formulas are available
                  in multiple shades.
                </h1>
                <p className="lg:w-full leading-relaxed text-base">
                  <li className="mt-3">SET INCLUDES:</li>
                  <li className="mt-3">Matte Liquid Lipstick; Lip Liner</li>
                  <li className="mt-3">WHAT IT IS:</li>
                  <li className="mt-3">
                    The perfect ready-to-go lip routine with a light vanilla
                    aroma
                  </li>
                  <li className="mt-3">WHAT IT DOES:</li>
                  <li className="mt-3">
                    Matte Liquid Lipstick: Long-lasting 8-hour wear; true-matte
                    non-sticky finish
                  </li>
                  <li className="mt-3">
                    Lip Liner: Ultra-creamy, waterproof, transfer-proof,
                    smudge-proof; long-lasting 24-hour wear; ideally pairs with
                    all lip textures, including Matte, Velvet and Gloss
                  </li>
                  <li className="mt-3">SKIN TYPES:</li>
                  <li className="mt-3">For all skin types</li>
                  <li className="mt-3">HOW TO USE:</li>
                  <li className="mt-3">
                    For the best result, line and fill in your lips with Lip
                    Liner then top with one coat of Matte Liquid Lipstick
                  </li>
                  <li className="mt-3">RESULTS:</li>
                  <li className="mt-3">Matte Liquid Lipstick:</li>
                  <li className="mt-3">
                    100% agreed the formula is non-sticky*
                  </li>
                  <li className="mt-3">
                    *Based on consumer acceptance test conducted with 50 women
                    age 18-40, current users of matte liquid lipstick; product
                    use for 1 week
                  </li>
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex border-b-2 border-gray-300 items-center justify-between flex-wrap">
                  <h1 className="font-bold title-font mb-4">Reviews</h1>
                  <h1 className="font-bold">
                    Be the first to review “Beverly Hills 5Pc Set”
                  </h1>
                </div>
                <div className="flex items-center mt-2 justify-between flex-wrap">
                  <p className="title-font mb-4">There are no reviews yet.</p>
                  <h1 className="">
                    Your email address will not be published. Required fields
                    are marked
                  </h1>
                </div>

                <form className="mt-6 flex justify-center sm:justify-end">
                  <div className="flex flex-col space-y-4 w-full sm:w-[50%]">
                    
                    <div>
                      <label className="block text-gray-700 text-medium mb-2">
                        Your rating *
                      </label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className={`text-xl ${
                              (hoverRating || rating) >= star
                                ? "text-[#A52A2A]"
                                : "text-gray-300"
                            }`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>

                   
                    <div>
                      <label
                        htmlFor="review"
                        className="block text-gray-700 text-medium mb-2"
                      >
                        Your review *
                      </label>
                      <textarea
                        id="review"
                        className="focus:outline-none w-full h-32 border p-2 rounded-lg"
                        placeholder="Write your review here..."
                        required
                      />
                    </div>

                   
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 text-medium mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="focus:outline-none w-full border p-2 rounded-lg"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 text-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="focus:outline-none w-full border p-2 rounded-lg"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                   
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="saveInfo"
                        className="form-checkbox"
                      />
                      <label
                        htmlFor="saveInfo"
                        className="text-sm text-gray-600"
                      >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>

                   
                    <div>
                      <button
                        type="submit"
                        className="px-6 py-2 text-white font-semibold rounded-lg bg-black hover:bg-[#AD6237] transition w-full sm:w-auto"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
