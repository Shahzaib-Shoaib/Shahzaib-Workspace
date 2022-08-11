import HotelItem from "./HotelItem";
function HotelList(props:any) {
  return (
    <div>
        {props.hotels.map((hotel:any) => (
          <HotelItem
            key={hotel.id}
            id={hotel.id}
            image={hotel.image}
            title={hotel.title}
            address={hotel.address}
            description={hotel.description}
          />
        ))}
    </div>
  );
}

export default HotelList;