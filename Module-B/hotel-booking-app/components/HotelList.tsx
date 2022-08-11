import HotelItem from "./HotelItem";
function HotelList(props: any) {
  return (
    <div className="bg-white ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Hotels</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {props.hotels.map((hotel: any) => (
            <HotelItem
              key={hotel.id}
              id={hotel.id}
              image={hotel.image}
              title={hotel.title}
              address={hotel.address}
              description={hotel.description}
              price={hotel.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelList;
