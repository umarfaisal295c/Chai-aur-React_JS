import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const images = [
    "https://icms-image.slatic.net/images/ims-web/6115ec74-fd3e-42e0-bee3-34726b641db6.jpg",
    "https://icms-image.slatic.net/images/ims-web/cb13c357-8636-4c8a-82b3-42277aae64ce.jpg",
    "https://icms-image.slatic.net/images/ims-web/8de045af-a7dd-4a89-84bf-11f0fa8e870d.jpg_1200x1200.jpg",
    "http://icms-image.slatic.net/images/ims-web/2d351faa-b64a-4b71-ac9e-bf5e6d886f1a.jpg",
    "http://icms-image.slatic.net/images/ims-web/90e9fba7-7372-4e5b-81dc-9e2800413701.jpg",
    "https://icms-image.slatic.net/images/ims-web/b3d1b002-c5f6-4a8a-a22d-871f69460c19.jpg",
    "https://icms-image.slatic.net/images/ims-web/7bf8afdc-8d60-47a9-a06e-9e7da1ab56ab.jpg",
    "https://icms-image.slatic.net/images/ims-web/93a8b245-336b-4e4e-aecf-459d0b6ea6e6.jpg",
    "https://icms-image.slatic.net/images/ims-web/cbd99c37-b6ee-4f57-bfb7-80df9ea22ee2.jpg",
    "https://icms-image.slatic.net/images/ims-web/7bf8afdc-8d60-47a9-a06e-9e7da1ab56ab.jpg",
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay interval in milliseconds (e.g., 3 seconds).
    dots: true, // Show navigation dots
    infinite: true, // Loop the slider
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
  };
  const features = [
    {
      image: "https://cdn-icons-gif.flaticon.com/7402/7402181.gif",
      title: "fast Delivery",
      para: "Over oder $200",
    },
    {
      image: "https://cdn-icons-gif.flaticon.com/11020/11020118.gif",
      title: "money returns",
      para: "30 Days Money return",
    },
    {
      image: "https://cdn-icons-gif.flaticon.com/12134/12134193.gif",
      title: "24/7 support",
      para: "Customer Support",
    },
  ];
  const length = [
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/55c642f0-250b-4515-9c8a-42cce3327098.png",
      para: "Safe Payments",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/1b7e5ccb-89fc-4383-bc27-4586e82195be.png",
      para: "Safe Payments",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/f2a7f550-3a25-478d-9879-e6aa419c7ebf.png",
      para: "Safe Payments",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/05352646-9b19-4283-a7b1-dcb16736663e.png",
      para: "Safe Payments",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/781b5194-65f0-4ae5-b7a6-003bc717054f.png",
      para: "Safe Payments",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/8faa565d-b52d-4e05-90e4-38466e764e84.png",
      para: "Safe Payments",
    },
  ];
  const martData = [
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/1440c427-d3fe-49f7-aa90-09c8eb0b84ea.png",
      para: "Mart",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png",
      para: "Fashion",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png",
      para: "Beauty",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png",
      para: "Home & Decor",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/9f2cf12a-3899-423e-9273-c752acafa387.png",
      para: "Daraz Like New ",
    },
    // {
    //   image:
    //     "https://icms-image.slatic.net/images/ims-web/cc89e68e-c809-4638-a5a6-2dc7e450d2a1.png",
    //   para: "Free Delivery ",
    // },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/a13edb2b-61bf-4dec-a410-f85b63d41490.png",
      para: "EveryDay Low Price ",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/62624b46-f8ca-43b7-a5fa-1d31920a6eb5.png",
      para: "New on PakStore ",
    },
  ];
  const items = [
    {
      image:
        "https://static-01.daraz.pk/p/2b5ac6576fb8cf8da9f6f89ee19a4f04.jpg",

      para: "Homel TWS Wireless Bluetooth 5.3 HeadPhone",
      price: "1260",
      p2: "2499",
      disc: "49",
    },
    {
      image:
        "https://static-01.daraz.pk/p/a2bec5df0c11a75186fa0630028cc4dd.jpgg",
      para: "Homel TWS Wireless Bluetooth 5.3 HeadPhone",
      price: "1260",
      p2: "2499",
      disc: "49",
    },
    {
      image:
        "https://static-01.daraz.pk/p/0dda4b43ecae8ee5bdb5611c74b8d559.jpg",
      para: "Homel TWS Wireless Bluetooth 5.3 HeadPhone",
      price: "1260",
      p2: "2499",
      disc: "49",
    },
    {
      image:
        "https://static-01.daraz.pk/p/b81175e620d23e88f9b26cf60610b463.jpg",
      para: "Homel TWS Wireless Bluetooth 5.3 HeadPhone",
      price: "1260",
      p2: "2499",
      disc: "49",
    },
  ];
  const flashData=[
    {
      image:"https://static-01.daraz.pk/p/ce5acfe9644f7a589d2e42ce5e262ac4.jpg_200x200q75-product.jpg_.webp",
      title:"Tinzzi T900 pro/U8 Ultra Smart Watch Full Touch",
      price:"1699",
      dPrice:"2499",
      dics:"33",
      rating:'887'
    },
    {
      image:"https://static-01.daraz.pk/p/d5639f94d165e63aaeac1251eef518f5.jpg_200x200q80-product.jpg_.webp",
      title:"Professional Vintage Dargon Style",
      price:"744",
      dPrice:"1499",
      dics:"50",
      rating:'557'
    },
    {
      image:"https://static-01.daraz.pk/p/8446327ac50681fa45efff734345d00f.jpg_200x200q80-product.jpg_.webp",
      title:"D20 Smart Watch Monitor",
      price:"935",
      dPrice:"2400",
      dics:"59",
      rating:'250'
    },
    {
      image:"https://static-01.daraz.pk/p/d842e46714b85eb2a8add5c352920e98.jpg_200x200q80-product.jpg_.webp",
      title:"Mini speedy Chooper Mannual Hand",
      price:"524",
      dPrice:"999",
      dics:"28",
      rating:'2890'
    },
    {
      image:"https://static-01.daraz.pk/p/450f48c025349bef96a6abfb7fa20972.jpg_200x200q80-product.jpg_.webp",
      title:"Posture Corrector Belt adjustable magenatic",
      price:"549",
      dPrice:"100",
      dics:"45",
      rating:'602'
    },
    {
      image:"https://static-01.daraz.pk/p/426d00a57bcaf48448ee0e2cf8163fce.jpg_200x200q80-product.jpg_.webp",
      title:"Trendy Couple Rings Stylish Soomas",
      price:"120",
      dPrice:"200",
      dics:"40",
      rating:'182'
    },
    {
      image:"https://static-01.daraz.pk/p/92b5cefd76779d8631be9b25122e0e2c.jpg_200x200q80-product.jpg_.webp",
      title:"Any coustomized NEON signs Board",
      price:"999",
      dPrice:"1999",
      dics:"50",
      rating:'117'
    },
    {
      image:"https://static-01.daraz.pk/p/6e575f4a665f87865d66577033f021a3.jpg_200x200q80-product.jpg_.webp",
      title:"Create Luxuary Quartz Watch set",
      price:"369",
      dPrice:"670",
      dics:"35",
      rating:'118'
    },
    {
      image:"https://static-01.daraz.pk/p/461f86b9176ce5c05cb81c84a429988b.jpg_200x200q80-product.jpg_.webp",
      title:"Al Asar Trader slims 5 slots",
      price:"235",
      dPrice:"800",
      dics:"71",
      rating:'57'
    },
    {
      image:"https://pk-live-21.slatic.net/kf/S2d92a6e4ea8c43f8a5f4b604163e4254o.jpg",
      title:"Multi Functional high Brightness ",
      price:"600",
      dPrice:"800",
      dics:"15",
      rating:'127'
    },
    {
      image:"https://static-01.daraz.pk/p/eaa156c22184be838c24d89c426ae7d4.jpg_200x200q80-product.jpg_.webp",
      title:"Caps club winter Hat cap winter season",
      price:"449",
      dPrice:"1999",
      dics:"78",
      rating:'196'
    },
    {
      image:"https://static-01.daraz.pk/p/ab791a5f0fa72d0777a08385d27805fa.jpg_200x200q80-product.jpg_.webp",
      title:"Zip card wallet Genunie Leather",
      price:"309",
      dPrice:"499",
      dics:"38",
      rating:'53'
    },
    {
      image:"https://static-01.daraz.pk/p/46e3ab5a6116bc63427132d3ca261ee2.jpg_200x200q80-product.jpg_.webp",
      title:"EVENTO wall clock 3D 24 inch",
      price:"249",
      dPrice:"899",
      dics:"72",
      rating:'2042'
    },
    {
      image:"https://static-01.daraz.pk/p/cf92e9521ce57412d1bedf3e44b55e14.jpg_200x200q80-product.jpg_.webp",
      title:"Adjustable Universal Mobile Stand",
      price:"265",
      dPrice:"800",
      dics:"67",
      rating:'337'
    },
    {
      image:"https://static-01.daraz.pk/p/65c140aa51963ce6cc0f5c39f2413714.jpg_200x200q80-product.jpg_.webp",
      title:"Double stripped Kangroo hoodie ",
      price:"899",
      dPrice:"1499",
      dics:"40",
      rating:'562'
    },
  ]
  return (
    <>
      <div className=" bg-backG">
        <section className="w-full relative top-24 clear-both container py-20">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-96">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full rounded-t-3xl rounded-b-3xl pb-6"
                />
              </div>
            ))}
          </Slider>
        </section>
        {/* Feature Section */}
        <div className="bg-pink py-2 mb-2  mt-20 rounded-3xl">
          <div className="w-10/12 flex items-center mx-auto justify-center gap-6">
            {length.map((leng, index) => (
              <div
                key={index}
                className=" rounded-3xl px-3 cursor-pointer py-0 flex justify-center items-center"
              >
                <img src={leng.image} alt="" />
                <div>
                  <p className="pl-2">{leng.para}|</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container pt-6 pb-6 ">
          <div className="bg-white py-4 rounded-3xl">
            <div className="w-10/12 grid grid-cols-3 mx-auto justify-center gap-6 ">
              {/* Single Feature */}
              {features.map((Feature, index) => (
                <div
                  key={index}
                  className="border border-primary rounded-3xl cursor-pointer px-3 py-6 flex justify-center items-center"
                >
                  <img
                    src={Feature.image}
                    alt=""
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <h4 className="font-medium capitalize text-lg">
                      {Feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{Feature.para}</p>
                  </div>
                </div>
              ))}
              {/* Single Feature End */}
            </div>
          </div>
        </div>
        {/* Feature Section End */}
        {/* Start */}

        <div className="container pt-4 pb-6 ">
          <div className="w-full bg-white py-4 rounded-3xl">
            <div className="  w-full flex items-center mx-auto justify-center gap-20 ">
              <div className=" w- gap-6 flex">
                {martData.map((data, index) => (
                  <div className="grid justify-center  w-32  " key={index}>
                    <div className="flex justify-center">
                      <img src={data.image} alt="" className=" w-20 h-20 " />
                    </div>
                    <p className="">{data.para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        {/* Start */}

        {/* End */}
        {/* Start */}

        <div className="container pt-6 pb-6">
          <h1 className="font-extrabold text-4xl text-gray-700 mb-4">
            Flash Sale
          </h1>
          <div className="bg-white py-4 rounded-3xl">
            <div className="w-10/12 grid grid-cols-4 mx-auto justify-center gap-6">
              {items.map((iData, index) => (
                <div className=" border w-56">
                  <div className=" flex justify-center">
                    <img src={iData.image} className="w-48" alt="" />
                  </div>
                  <p className="px-2 font-medium  align-center">{iData.para}</p>
                  <p className="text-red-500 font-medium text-xl px-2 pt-1">
                    Rs : {iData.price}
                  </p>
                  <div className="flex justify-between px-2">
                    <p>{iData.p2}</p>
                    <p className="text-black font-medium">{iData.disc}</p>
                  </div>
                </div>
              ))}
              {/* end */}
            </div>
          </div>
        </div>

        {/* End */}
        {/* product Wrapper */}
        <div className="container py-16 ">
          <h2 className="font-extrabold text-4xl text-gray-700 mb-4">
            Top New Arrival
          </h2>
          {/* product grid */}
          <div className="  grid grid-cols-4 gap-6 pt-4">
            {/* single product */}
            {
              flashData.map((item,index)=>(
                <div className="bg-white shadow rounded-3xl overflow-hidden group">
              {/* product img */}
              <div className="relative">
                <img
                  src={item.image}
                  alt=""
                  className='w-64 p-4 h-64'
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100">
                  <NavLink
                    to={""}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-gray-800 transition"
                  >
                    <i class="bx bx-search-alt-2"></i>
                  </NavLink>
                  <NavLink
                    to={""}
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-gray-800 transition"
                  >
                    <i class="bx bx-heart"></i>
                  </NavLink>
                </div>
              </div>
              {/* product img end */}
              {/* product content */}
              <div className="pt-4 pb-3 px-4">
                <NavLink to={""}>
                  <h4 className=" uppercase text-1xl font-medium mb-2 hover:text-primary transition">
                   {item.title}
                  </h4>
                </NavLink>
                <div className="flex items-baseline mb-1 space-x-4 font-roboto">
                  <p className="text-xl text-primary font-semibold">Rs. {item.price}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xl text-gray-400 line-through">Rs. {item.dPrice}</p>
                  <p className="text-xl text-gray-900 ">{item.dics}%</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1 text-sm pt-2 text-yellow-400">
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                    <span>
                      <i class="bx bx-star"></i>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 pt-2 ml-3">({item.rating})</div>
                </div>
              </div>
              <div>
                <NavLink
                  to={""}
                  className="block w-full py-2 text-center bg-primary border-primary rounded-b hover:bg-transparent transition"
                >
                  Add to Cart
                </NavLink>
              </div>
              {/* product content end */}
            </div>
              ))
            }
            {/* single product end */}
          </div>
          {/* product grid end */}
        </div>
        {/* product Wrapper end */}
      </div>
    </>
  );
};

export default Home;
