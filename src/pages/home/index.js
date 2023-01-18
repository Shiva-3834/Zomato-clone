import React, { useState } from 'react';
import Header from '../../componenets/header';
import TabOptions from '../../componenets/tabOptions';
import Footer from '../../componenets/footer';
import Nightlife from '../../componenets/nightlife';
import Delivery from '../../componenets/delivery';
import DinningOut from '../../componenets/dinningOut';
const HomePage = () => {

  const [activeTab, setActiveTab] = useState("Dinning Out")


  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      { /*this function decides that which screen to show. Like it has 3 screens dinning , delivery,night life so it decides that ehich to show */}
      <Footer />
    </div>
  );
};
const getCorrectScreen = (tab) => {

  switch (tab) {

    case "Delivery":
      return <Delivery />;
    case "Dinning Out":
      return <DinningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;

  };

};
export default HomePage;
