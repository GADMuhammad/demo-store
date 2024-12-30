import Best from "./Best";
import BrowseByCategory from "./BrowseByCategory";
import Enhance from "./Enhance";
import Features from "./Features";
import FlashSale from "./FlashSale";
import Introduction from "./Introduction";
import Arrival from "./Arrival/";

export default function Home({ timerDate }) {
  return (
    <>
      <Introduction />
      <FlashSale timerDate={timerDate} />
      <BrowseByCategory />
      <Best filter={false} />
      <Enhance timerDate={timerDate} />
      <Arrival />
      <Features />
    </>
  );
}
