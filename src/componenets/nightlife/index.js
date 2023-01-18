import React from 'react';
import{ nightLife} from '../../data/nightlife';
import Collection from '../common/collection';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import"./nightlife.css";

const nightFilters = [

  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders  absolute-center "></i>,
    title: 'Filters',

  },


  {
    id: 2,
    title: "Rating: 4.0+",
  },


  {
    id: 3,
    title: "Safe and Hygienic",
  },

  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i class="fi fi-rr-apps-sort  absolute-center "></i>,
  },

  {
    id: 6,
    title: "Great Offers",
  },









];
const collectionList=[

  {
  id:"1",
  title:"9 Great Buffets in Chennai ",
  cover:"https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
  places:"9 places",
  },
  
  {
    id:"2",
    title:"Top 11 Picturesque Cafes ",
    cover:"	https://b.zmtcdn.com/data/collections/b90996d69bfe8d8c7e36d3a56893df74_1657000323.jpg",
    places:"11 places",
    },
    {
      id:"3",
      title:" 12 Romantic Dining Places ",
      cover:"https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665591886.jpg",
      places:"12 places",
      },
      {
        id:"4",
        title:"18 Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/e24437823d88300c312d46f0a313e462_1665591152.jpg",
        places:"18 places",
        },
        {
          id:"5",
          title:"6 Sea View Dining ",
          cover:"https://b.zmtcdn.com/data/collections/9fc3c01e8524abf241234234f0d6eac6_1665555386.jpg",
          places:"6 places",
          },
          {
            id:"6",
            title:"13 Places Serving world Cuisine",
            cover:"https://b.zmtcdn.com/data/collections/d9eea3ef785def3a1d4e19c89bf19b11_1660816040.jpg",
            places:"13 places",
            },
            // {
            //   id:"5",
            //   title:"trending this week ",
            //   cover:"https://b.zmtcdn.com/data/collections/9fc3c01e8524abf241234234f0d6eac6_1665555386.jpg",
            //   places:"12 places",
            //   }
            //   {
            //     id:"5",
            //     title:"trending this week ",
            //     cover:"https://b.zmtcdn.com/data/collections/9fc3c01e8524abf241234234f0d6eac6_1665555386.jpg",
            //     places:"12 places",
            //     }
            //     {
            //       id:"5",
            //       title:"trending this week ",
            //       cover:"https://b.zmtcdn.com/data/collections/9fc3c01e8524abf241234234f0d6eac6_1665555386.jpg",
            //       places:"12 places",
            //       }   
  
  ];
const nightList = nightLife;
const Nightlife = () => {
  return (
    <div>
   <Collection list={collectionList}   /> 
<div className="max-width">
  <Filters filterList={nightFilters} />
</div>
<ExploreSection list={nightList} collectionName ="Nightlife restaurants in Chennai"/>
    </div>
  )
}

export default Nightlife;
