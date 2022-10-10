import Login from "../components/Login";
import { Image } from "@vechaiui/react";

const Home = (props) => {
  return (
    <>
      <div className="item  flex-inline items-center">
        <div>
          <Image
            alt="bruce wayne"
            htmlWidth={100}
            htmlHeight={50}
            className="object-cover mx-auto mt-20"
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/grins-and-giggles_grins-and-giggles-huruf-blue-foil-l-balon_full02.jpg"
          />
        </div>

        <div className="item  h-20 w-1/2 mx-auto mb-7">
          <h1 className="text-center text-6xl font-bold text-sky-400">
            {" "}
           Luad Game
          </h1>
        </div>
        <div className="item ">
          <Login url="/customer" is_redirect="true" method="post" {...props} />
        </div>
      </div>
    </>
  );
};

export default Home;
