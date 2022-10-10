import Listagent from "./Agentslist/Listagent";


const index = (props) => {
  return (
    <>
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div className="w-full px-4 mb-4 mt-10">
        <Listagent {...props} />
        </div>
      </div>
    </>
  );
};

Listagent.defaultProps = {
  url: 'http://localhost:8000/api/v1/createagent/',
}
export default index;