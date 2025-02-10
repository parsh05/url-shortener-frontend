const LandingPage = () => {
  let desc =
      "Generate short, memorable links with ease using Linklytics intuitive interface. Share URLs effortlessly across platforms. Optimize your marketing campaigns with detailed analytics.";

  return (
      // <div>Landing Page</div>
      <div className="min-h [calc(100vh-64px] lg:px-14 sm:px-8 px-4">
        <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between">
          <div className="flex-1">
            <h1
                className="font-bold font-roboto text-slate-600 md:text-4xlxl text-3xl md:leading-[55px] sm-leading-[45px]
                    leading-10 lg:w-full md:w-[70%] w-full"
            >
              LinkLytics Simplifies URL shortener for Efficient sharing.
            </h1 >


            <p className="text-slate-600 text-sm my-5">
              Linklytics streamlines the process of URL shortening, making sharing
              links effortless and efficient. With its user-friendly interface,
              Linklytics allows you to generate concise, easy-to-share URLs in
              seconds. Simplify your sharing experience with Linklytics today.
            </p>

            <div className="flex items-center gap-3">
              <button className="bg-custom-gradient w-40 text-white rounded-lg px-4 py-2">Manage Links</button>
            </div>

            <div className="flex items-center gap-3">
              <button>Manage Links</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
