import PurchaseInfo from "./PurchaseInfo";
import PurchasePrice from "./PurchasePrice";

function PurchaseMain() {
  return (
      <section className="bg-white">
        <div className="pb-5">
          <PurchaseInfo />
          <PurchasePrice />
        </div>
      </section>
  );
}

export default PurchaseMain;
