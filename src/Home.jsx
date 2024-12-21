import Best from "./Components/Best";
import BrowseByCategory from "./Components/BrowseByCategory";
import Enhance from "./Components/Enhance";
import Features from "./Components/Features";
import FlashSale from "./Components/FlashSale";
import Introduction from "./Components/Introduction";
import Arrival from "./Components/Arrival/";

export default function Home({ timerDate }) {
  return (
    <>
      <Introduction />
      <FlashSale timerDate={timerDate} />
      <BrowseByCategory />
      <Best all={false} />
      <Enhance timerDate={timerDate} />
      <Arrival />
      <Features />
    </>
  );
}
