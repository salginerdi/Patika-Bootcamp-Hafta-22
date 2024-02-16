import Info from "./Info";
import Buttons from "./Buttons";
import Lessons from "./Lessons";


function MainSection() {
  return (
      <section className="bg-white" id="classes">
        <Info />
        <Buttons />
        <Lessons />
      </section>
  );
}

export default MainSection;
