import React from "react";
import useCart from "../context/addToContext";

const Buttons = () => {
  const { addToCart, removeToCart } = useCart();
  const AddShopping = () => {
    console.log("Add");
    addToCart();
  };
  const RemShopping = () => {
    console.log("Remove");
    removeToCart();
  };
  return (
    <div className="flex gap-5">
      <div className=" w-52  border bg-slate-300 h-fit">
        <div>
          <img
            src="https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662"
            alt=""
            className="w-52 h-52"
          />
          <br />
          <div>
            <p>Iphone 11</p>
            <p>8GB Ram & 128GB Rom</p>
            <p>price : 90000</p>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <button onClick={AddShopping} className="border border-black rounded-xl mr-4 p-2">
              Add
            </button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className=" w-52  border bg-slate-300 h-fit">
        <div>
          <img
            src="https://regen.pk/cdn/shop/products/iphone-12-pro-451726_e0de9640-4bd6-4ba1-bbfa-f9729b57c376.jpg?v=1674907298"
            alt=""
            className="w-52 h-52"
          />
          <br />
          <div>
            <p>Iphone 11</p>
            <p>8GB Ram & 128GB Rom</p>
            <p>price : 90000</p>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <button className="border border-black rounded-xl mr-4 p-2">
              Add
            </button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className=" w-52  border bg-slate-300 h-fit">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Yqeldid0g2EhHWXbxM_T2QuYp3U31Behrw&usqp=CAU"
            alt=""
            className="w-52 h-52"
          />
          <br />
          <div>
            <p>Iphone 11</p>
            <p>8GB Ram & 128GB Rom</p>
            <p>price : 90000</p>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <button className="border border-black rounded-xl mr-4 p-2">
              Add
            </button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className=" w-52  border bg-slate-300 h-fit">
        <div>
          <img
            src="https://regen.pk/cdn/shop/products/REGEN-iPhone14ProMax-Frontback-DeepPurple-Pakistan_1.png?v=1681907325&width=1946"
            alt=""
            className="w-52 h-52"
          />
          <br />
          <div>
            <p>Iphone 11</p>
            <p>8GB Ram & 128GB Rom</p>
            <p>price : 90000</p>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <button className="border border-black rounded-xl mr-4 p-2">
              Add
            </button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className=" w-52  border bg-slate-300 h-fit">
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-52 h-52"
          />
          <br />
          <div>
            <p>Iphone 11</p>
            <p>8GB Ram & 128GB Rom</p>
            <p>price : 90000</p>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <button className="border border-black rounded-xl mr-4 p-2">
              Add
            </button>
            <button>Remove</button>
          </div>
        </div>
      </div>
      <div className=" w-52  border bg-slate-300 h-fit">
        <div>
          <img
            src="https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662"
            alt=""
            className="w-52 h-52"
          />
          <br />
          <div>
            <p>Iphone 11</p>
            <p>8GB Ram & 128GB Rom</p>
            <p>price : 90000</p>
          </div>
          <br />
          <div className="flex justify-center items-center">
            <button className="border border-black rounded-xl mr-4 p-2">
              Add
            </button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
