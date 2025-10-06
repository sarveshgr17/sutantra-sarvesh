import React from "react";

const Description = () => {
  return (
    <section className="w-full bg-white py-10 px-8 md:px-20 lg:px-32">
      {/* Heading - Full Width */}
      <h2 className="text-4xl font-semibold text-gray-800 leading-snug w-full mb-8 text-center lg:text-left">
        WELCOME TO SU-TANTRA EQUIPMENTS PVT. LTD.
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Side - Text */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-xl text-gray-700">
            Pulp & paper Machinery Equipment Manufacturer in India
          </p>

          <p className="text-gray-500 leading-relaxed">
            <strong>SU-TANTRA EQUIPMENTS PVT. LTD.</strong> introduces itself as one of
            the leading manufacturers & exporters of complete pulp, paper and allied
            machinery equipments located at historical city Aurangabad (Maharashtra).
            Aurangabad has its own history in pulp and paper making since the decades
            as many paper mills and pulp machinery manufacturers have their base in
            this city.
          </p>

          <p className="text-gray-500 leading-relaxed">
            <strong>SU-TANTRA</strong> is a combination of SU and TANTRA, a symbol for
            excellence and technology. Representing the name, our company provides a
            variety of equipments and product-based services efficiently guided by a
            group of experts with their profound experience.{" "}
            <strong>SU-TANTRA</strong> is a global supplier well equipped with skilled
            labour & technical expertise.{" "}
            <strong>SU-TANTRA</strong> has glowing recognition in national as well as
            in international market. We have over 100 installations in India and
            abroad.
          </p>
        </div>

        {/* Right Side - YouTube Video */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="w-full h-[280px] md:h-[340px] lg:h-[380px]">
            <iframe
              className="w-full h-full rounded-md shadow-sm"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy video link
              title="Su-Tantra Equipments Pvt Ltd | Corporate Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
