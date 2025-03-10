import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCard=(props)=>{
    const {resData} = props;

    const { 
          cloudinaryImageId,
          name,
          cuisines,
          avgRating,
          deliveryTime,
          costForTwo
        } = resData?.info;
    return(
        <div className="res-card">
         <img className="burger-img" 
        alt="burger"
        src= { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/" 
              + cloudinaryImageId
            }
        />   
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{costForTwo}</h4> 
        </div>
    )
}

const resList = 
     [
       
        {
                          "info": {
                            "id": "61560",
                            "name": "Bombay Mishthan Bhandar (Bmb) - Durapura",
                            "city": "12",
                            "slugs": {
                              "restaurant": "bombay-mishthan-bhandar-sweets-durgapura-malviya-nagar"
                            },
                            "cloudinaryImageId": "127d6d2a1a4f3e995fba2c5dd93b574f",
                            "locality": "Durgapura",
                            "areaName": "Durgapura",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                              "North Indian",
                              "Thalis",
                              "Rajasthani",
                              "Snacks",
                              "Sweets",
                              "Indian"
                            ],
                            "avgRating": 4.6,
                            "feeDetails": {
                              "restaurantId": "61560",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "93K+",
                            "promoted": true,
                            "adTrackingId": "cid=26275167~p=0~adgrpid=26275167#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=61560~st=fantastic restaurent~eid=bd70f75c-3680-4c5f-9334-38bb754ec67a~srvts=1741581425002~collid=56861",
                            "sla": {
                              "deliveryTime": 27,
                              "minDeliveryTime": 25,
                              "maxDeliveryTime": 30,
                              "serviceability": "SERVICEABLE",
                              "slaString": "25-30 MINS",
                              "lastMileTravelString": "6.8 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-03-10 23:00:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Rxawards/_CATEGORY-Snacks.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "subHeader": "UPTO ₹100",
                              "logoCtx": {
                                "text": "BENEFITS"
                              }
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "4.2",
                                "ratingCount": "4.7K+"
                              },
                              "source": "GOOGLE",
                              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "26275167"
                          },
                          "analytics": {

                          },
                          "cta": {

                          }
                        },
        {
                          "info": {
                            "id": "598753",
                            "name": "Khandelwal Pavitra Bhojnalaya",
                            "city": "12",
                            "slugs": {
                              "restaurant": "khandelwal-bhojnalaya-malviya-nagar-malviya-nagar"
                            },
                            "cloudinaryImageId": "qlapqljxezutbzvpz3t6",
                            "locality": "Pradhan Marg",
                            "areaName": "Malviya Nagar",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                              "North Indian",
                              "South Indian",
                              "Chinese",
                              "Tandoor",
                              "Biryani"
                            ],
                            "avgRating": 4.1,
                            "feeDetails": {
                              "restaurantId": "598753",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "536",
                            "sla": {
                              "deliveryTime": 33,
                              "minDeliveryTime": 30,
                              "maxDeliveryTime": 35,
                              "serviceability": "SERVICEABLE",
                              "slaString": "30-35 MINS",
                              "lastMileTravelString": "9.0 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-03-11 03:05:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "60% OFF",
                              "discountTag": "FLAT DEAL",
                              "logoCtx": {
                                "text": "BENEFITS"
                              }
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {

                          },
                          "cta": {

                          }
                        },
        {
                          "info": {
                            "id": "271630",
                            "name": "Kanha",
                            "city": "12",
                            "slugs": {
                              "restaurant": "kanha-grocery-store-himmat-nagar-c-scheme"
                            },
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/2862fc9c-d9b2-4164-8efb-b129d26ad51a_271630.jpg",
                            "locality": "Pratap nagar",
                            "areaName": "Sec-6, Pratap nagar",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                              "Sweets",
                              "Snacks",
                              "Desserts",
                              "Italian",
                              "South Indian",
                              "Chaat",
                              "Thalis",
                              "Bakery",
                              "Jain",
                              "Fast Food"
                            ],
                            "avgRating": 4.5,
                            "feeDetails": {
                              "restaurantId": "271630",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "6.9K+",
                            "promoted": true,
                            "adTrackingId": "cid=26260179~p=1~adgrpid=26260179#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=271630~st=fantastic restaurent~eid=f79d4ea9-b66e-4b04-a5b0-52f490970356~srvts=1741581425002~collid=56861",
                            "sla": {
                              "deliveryTime": 36,
                              "minDeliveryTime": 35,
                              "maxDeliveryTime": 40,
                              "serviceability": "SERVICEABLE",
                              "slaString": "35-40 MINS",
                              "lastMileTravelString": "7.7 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-03-10 23:59:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                  "description": "Delivery!"
                                },
                                {
                                  "imageId": "Rxawards/_CATEGORY-Thali.png",
                                  "description": "Delivery!"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "ITEMS",
                              "subHeader": "AT ₹99",
                              "logoCtx": {
                                "text": "BENEFITS"
                              }
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "26260179"
                          },
                          "analytics": {

                          },
                          "cta": {

                          }
                        },
        {
                          "info": {
                            "id": "267349",
                            "name": "Trisha's Maggi and snacks",
                            "city": "12",
                            "slugs": {
                              "restaurant": "trisha's-maggi-and-snacks-pratap-nagar-pratap-nagar"
                            },
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/8b3ccba9-8c1c-4270-aa23-6c89e607b25b_267349.sss.jpg",
                            "locality": "Sector 17",
                            "areaName": "Pratap Nagar",
                            "costForTwo": "₹150 for two",
                            "cuisines": [
                              "Indian"
                            ],
                            "avgRating": 3.8,
                            "feeDetails": {
                              "restaurantId": "267349",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "98",
                            "sla": {
                              "deliveryTime": 56,
                              "minDeliveryTime": 55,
                              "maxDeliveryTime": 60,
                              "serviceability": "SERVICEABLE",
                              "slaString": "55-60 MINS",
                              "lastMileTravelString": "8.5 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-03-10 21:30:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "subHeader": "UPTO ₹50",
                              "logoCtx": {
                                "text": "BENEFITS"
                              }
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {

                          },
                          "cta": {

                          }
                        },
        {
                          "info": {
                            "id": "254458",
                            "name": "K2 Fast Food",
                            "city": "12",
                            "slugs": {
                              "restaurant": "k2-fast-food-malviya-nagar-malviya-nagar"
                            },
                            "cloudinaryImageId": "nnwb71aomr78y2maavfo",
                            "locality": "Sector 9",
                            "areaName": "Malviya Nagar",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                              "Indian"
                            ],
                            "avgRating": 4.1,
                            "feeDetails": {
                              "restaurantId": "254458",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "55",
                            "promoted": true,
                            "adTrackingId": "cid=25918025~p=2~adgrpid=25918025#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=254458~st=fantastic restaurent~eid=086a5974-4a91-4b63-811a-4a1d4e8d97a3~srvts=1741581425002~collid=56861",
                            "sla": {
                              "deliveryTime": 30,
                              "minDeliveryTime": 25,
                              "maxDeliveryTime": 30,
                              "serviceability": "SERVICEABLE",
                              "slaString": "25-30 MINS",
                              "lastMileTravelString": "7.3 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-03-10 23:45:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "20% OFF",
                              "subHeader": "UPTO ₹50",
                              "logoCtx": {
                                "text": "BENEFITS"
                              }
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "25918025"
                          },
                          "analytics": {

                          },
                          "cta": {

                          }
                        },
        {
                          "info": {
                            "id": "583183",
                            "name": "Old khandelwal Dhaba",
                            "city": "12",
                            "slugs": {
                              "restaurant": "oh-teri-!!-chinese-malviya-nagar-malviya-nagar"
                            },
                            "cloudinaryImageId": "ydikcgxyeyilhqu0bopg",
                            "locality": "Sanganer",
                            "areaName": "Manasarovar",
                            "costForTwo": "₹366 for two",
                            "cuisines": [
                              "Indian",
                              "Snacks",
                              "Beverages"
                            ],
                            "avgRating": 3.6,
                            "feeDetails": {
                              "restaurantId": "583183",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "75",
                            "sla": {
                              "deliveryTime": 49,
                              "minDeliveryTime": 45,
                              "maxDeliveryTime": 50,
                              "serviceability": "SERVICEABLE",
                              "slaString": "45-50 MINS",
                              "lastMileTravelString": "2.1 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-03-11 05:59:00",
                              "opened": true
                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV3": {
                              "header": "50% OFF",
                              "subHeader": "UPTO ₹100",
                              "logoCtx": {
                                "text": "BENEFITS"
                              }
                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                          },
                          "analytics": {

                          },
                          "cta": {

                          }
                        },
        {
                          "info": {
                            "id": "933472",
                            "name": "Rawat Mishthan Bhandar",
                            "city": "12",
                            "slugs": {
                              "restaurant": "rawat-mishthan-bhandar-malviya-nagar-malviya-nagar"
                            },
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/f21bed96-bbf2-496f-88af-f88447ddb834_933472.jpg",
                            "locality": "Malviya Nagar",
                            "areaName": "Malviya Nagar",
                            "costForTwo": "₹150 for two",
                            "cuisines": [
                              "Sweets",
                              "Snacks"
                            ],
                            "avgRating": 4.4,
                            "feeDetails": {
                              "restaurantId": "933472",
                              "title": "Delivery Charge",
                              "amount": "0"
                            },
                            "totalRatingsString": "889",
                            "promoted": true,
                            "adTrackingId": "cid=26260214~p=3~adgrpid=26260214#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=933472~st=fantastic restaurent~eid=4eaace66-b0ad-4fcb-a5ab-ab3ab0cf5405~srvts=1741581425002~collid=56861",
                            "sla": {
                              "deliveryTime": 34,
                              "minDeliveryTime": 30,
                              "maxDeliveryTime": 35,
                              "serviceability": "SERVICEABLE",
                              "slaString": "30-35 MINS",
                              "lastMileTravelString": "8.1 km",
                              "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                              "nextCloseTime": "2025-03-10 23:00:00",
                              "opened": true
                            },
                            "aggregatedDiscountInfo": {

                            },
                            "badges": {
                              "imageBadges": [
                                {
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Ghewar.png",
                                  "description": "Delivery!"
                                }
                              ]
                            },
                            "aggregatedDiscountInfoV2": {

                            },
                            "externalRatings": {
                              "aggregatedRating": {
                                "rating": "--"
                              }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "26260214"
                          },
                          "analytics": {

                          },
                          "cta": {

                          }
                        }
];
    
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                { 
                    resList.map(restaurant => <ResCard key={restaurant.info.id} resData={restaurant}/>)
                }
                
            </div>
        </div>
    )
}

const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer-items">
                <ul>
                    <li>@all Copyright rights reserved</li>
                    <li>Social Links</li>
                    <li>Available in 20 cities</li>
                    <li>Life at Eatify</li>
                        
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
            <Footer/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
