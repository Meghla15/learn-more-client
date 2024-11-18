const Banner = () => {
  return (
    <div className="container mx-auto ">
      <div
        className="hero min-h-screen rounded-xs "
        style={{
          backgroundImage:
            "url(https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg)",
        }}
      >
        <div className="hero-overlay rounded-xs bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-white text-5xl font-bold">
              Welcome to Learn More
            </h1>
            <p className="mb-5 w-2/3 mx-auto">
              Discover a dynamic online space where students and professionals
              come together to share knowledge, collaborate on projects, and
              achieve academic success. Join us at Learn More to experience
              real-time collaboration, resource sharing, and interactive
              learning tools designed to enhance your study experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
