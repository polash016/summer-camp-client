import { Roll } from "react-awesome-reveal";


const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      {subHeading && <Roll>
        <p className="text-blue-600 mb-2 text-2xl"> {subHeading} </p>
      </Roll>}
      <Roll>
        <h3 className="text-5xl text-blue-500 uppercase border-y-4 py-4">{heading}</h3>
      </Roll>
    </div>
  );
};

export default SectionTitle;
