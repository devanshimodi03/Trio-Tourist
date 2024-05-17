import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/1.jpg";
import Trip2 from "../assets/5.jpg";
import Trip3 from "../assets/delhi.jpeg";
function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
         <p>
            You can discover unique destinations using Google Maps.
         </p>
         <div className="tripcard">
            <TripData 
            image={Trip1}
            heading="Mount Abu,Rajasthan"
            text="This is a historic desert town that sits high up in the mountains, surrounded by lush forests, with flowing waterfalls and full lakes, towering peaks and beautiful temples, marvellous forts and a teeming wildlife sanctuary."
            
            />

           <TripData 
            image={Trip2}
            heading="Srinagar,Jammu and Kashmir"
            text="Famously referred to as “Heaven on Earth ”, Srinagar is known for the static houseboats and gondola-type boats- Shikaras in Dal Lake. 
            Decorated with serene Dal Lake & Nigeen Lake, Srinagar is the ideal place for honeymoon and family vacations."
            />

            <TripData 
            image={Trip3}
            heading="India Gate,Delhi"
            text="It was a must-visited monument, which almost visitor to Delhi would drop by.
            It is a tall,imposing structure, in many ways, similar to Paris Arch de Triomphe.
            It serves to remember and commemorate the glorious dead, who gave their lifes during the World War and civil war."
            />
            </div>
    </div>
  );
};
export default Trip;