import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "../Axios/Axios";
import { useDispatch, useSelector } from "react-redux";
import { setTripPlaces } from "../Store/Reducers/TripSlice";


const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const navigate = useNavigate();
const {tripData} = useSelector(state => state.trip);
    const dispatch = useDispatch();
  
    const setter = (data)=>{
        
        dispatch(setTripPlaces(data))
        console.log(tripData);
    }

  useEffect(() => {

    const fetchPlaceDetails = async () => {
      try {
        const response = await Axios.get(
          `/api/place/details/json?place_id=${id}&key=${import.meta.env.VITE_API_KEY}`
        );
        setPlace(response.data.result);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  if (!place) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-full h-screen p-10 bg-zinc-800 mx-auto p-4">
        <div><h1 onClick={()=>navigate(-1)} className="text-2xl font-semibold text-white capitalize" >back</h1></div>
      {/* Name & Icon */}
      <div className="flex items-center justify-between   space-x-3">
      <div className="flex gap-2 items-center p-2">
      <img src={place.icon} alt="Place Icon" className="w-10 h-10 " />
      <h1 className="text-3xl text-zinc-100 font-bold">{place.name}</h1>
      </div>
      <div>
        <button  onClick={()=>setter(({placeName : place.name,placeLocation:place.geometry.location}))} className="px-4 py-2 cursor-pointer rounded-md bg-blue-500 text-white font-semibold" >Select for Trip</button>
      </div>
      </div>

      {/* Address & Status */}
      <p className="text-gray-500 mt-2">{place.formatted_address}</p>
      <p className={`text-sm font-bold mt-1 ${place.opening_hours?.open_now ? "text-green-600" : "text-red-600"}`}>
        {place.opening_hours?.open_now ? "Open Now" : "Closed"}
      </p>

      {/* Rating & Total Reviews */}
      <div className="mt-3 flex items-center space-x-2">
        <span className="text-yellow-500 font-bold">{place.rating} ★</span>
        <span className="text-gray-500">({place.user_ratings_total} reviews)</span>
      </div>

      {/* Editorial Summary */}
      {place.editorial_summary && (
        <p className="mt-2 italic text-gray-500">{place.editorial_summary.overview}</p>
      )}

      {/* Image Gallery */}
      {place.photos && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
          {/* {place.photos.slice(0, 6).map((photo, index) => (
            <img
              key={index}
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo.photo_reference}&key=${import.meta.env.VITE_API_KEY}`}
              alt="Place"
              className="rounded-lg shadow-sm"
            />
          ))} */}
        </div>
      )}

      {/* Google Maps Link */}
      <div className="mt-4">
        <a
          href={place.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
};

export default PlaceDetails;
