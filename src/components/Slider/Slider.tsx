import banner from "../../assets/img/slider.png"

const Slider = () => {
  return (
    <div className="bg-white">
    <div className="container mx-auto pl-4 py-10 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Have a shining smile with our{" "}
          <span className="text-orange-500">modern methods!</span>
        </h1>
        <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
          {/* Google Rating */}
          <div className="bg-gray-100 rounded-lg p-3 shadow-md">
            <div className="flex items-center gap-2">
              <img
                src={banner}
                alt="Google Rating"
                className="w-6 h-6"
              />
              <div>
                <p className="text-lg font-bold">4.8</p>
                <p className="text-gray-500 text-sm">See all our reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-5">
        <img
          src={banner}
          alt="Happy Patient"
          
          className="w-full"
        />
      </div>
    </div>

    {/* Statistics Section */}
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between text-center gap-8">
        <div className="flex-1">
          <p className="text-2xl font-bold text-orange-500">20+ Yrs</p>
          <p className="text-gray-700">Dental Care</p>
        </div>
        <div className="flex-1">
          <p className="text-2xl font-bold text-orange-500">2200+</p>
          <p className="text-gray-700">Google Reviews</p>
        </div>
        <div className="flex-1">
          <p className="text-2xl font-bold text-orange-500">50K+</p>
          <p className="text-gray-700">Happy Patients</p>
        </div>
        <div className="flex-1">
          <p className="text-2xl font-bold text-orange-500">15+</p>
          <p className="text-gray-700">Dentists</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Slider