import { useRef } from "react";
import Card from "./Card";
import React from "react";

function NewHotelForm(props:any) {
  const titleInputRef :any  = useRef();
  const imageInputRef:any  = useRef();
  const addressInputRef:any  = useRef();
  const descriptionInputRef:any   = useRef();

  function submitHandler(event:any) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const hotelData = {
      title : enteredTitle ,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddHotel(hotelData);
  }

  return (
   

<div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
<h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Hotel</h2>
<form action="" onSubmit={submitHandler}>
<div className="relative mb-4">
  <label  className="leading-7 text-sm text-gray-600">Title</label>
  <input type="text" required id="title" ref={titleInputRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>
<div className="relative mb-4">
  <label  className="leading-7 text-sm text-gray-600">Address</label>
  <input type="text" required id="address" ref={addressInputRef}  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>
<div className="relative mb-4">
  <label  className="leading-7 text-sm text-gray-600">Description</label>
  <input type="text" required id="description"   ref={descriptionInputRef} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>
<div className="relative mb-4">
  <label  className="leading-7 text-sm text-gray-600">Image URL</label>
  <input type="url" required id="image" ref={imageInputRef}  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>
<button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Hotel</button>
<p className="text-xs text-gray-500 mt-3">**** Terms Apply</p>
</form>
</div>

  );
}

export default NewHotelForm;






 // <Card>
    //   <form  onSubmit={submitHandler}>
    //     <div className=''>
    //       <label className="" htmlFor='title'>Hotel Title</label>
    //       <input className="" type='text' required id='title' ref={titleInputRef} />
    //     </div>
    //     <div className=''>
    //       <label htmlFor='image'>Meetup Image</label>
    //       <input type='url' required id='image' ref={imageInputRef} />
    //     </div>
    //     <div className="">
    //       <label htmlFor='address'>Meetup Address</label>
    //       <input type='text' required id='address' ref={addressInputRef} />
    //     </div>
    //     <div className=''>
    //       <label htmlFor='description'>Meetup Description</label>
    //       <textarea
    //         id='description'
    //         ref={descriptionInputRef}
    //       ></textarea>
    //     </div>
    //     <div className='bg-purple-50'>
    //       <button>Add Hotel</button>
    //     </div>
    //   </form>
    // </Card>