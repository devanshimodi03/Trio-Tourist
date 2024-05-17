import Mountain1 from "../assets/7.jpg";
import Mountain2 from "../assets/Service.jpg";
import Mountain3 from "../assets/4.jpg";
import Mountain4 from "../assets/img.jpg";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";


const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Tours give you the opportunity to see a lot,within a time frame.
      </p>
      <DestinationData 
       className="first-des"
      heading="Rishikesh,Uttarakhand"
      text="Famously known as the Yoga capital of the world, Rishikesh is a quiet haven for those who seek tranquility from a fast-paced life.
       Located in Uttarakhand, about twenty-five kilometers from Haridwar, Rishikesh is a small town that encapsulates faith and Hinduism like no other town in India. 
       Situated on the banks of the holy river the Ganges and the foothills of the mighty Himalayas, Rishikesh attracts flocks of tourists throughout the year.
       The town is one of the famous pilgrimage sites in the country. 
       Rishikesh is also a premium holiday destination because of the stretch of the River Ganges that allows adventurers for river rafting and kayaking.
       Other locations near the town let them opt for other adventure sports such as mountaineering, cliff jumping, hiking, trekking, bungee jumping, etc.
       The best way to experience this beautiful town and understand its actual relevance is to visit it."

       img1={Mountain1}
       img2={Mountain2}
       />

       <DestinationData className="first-des-reverse"
      heading="Manali,Himachal Pradesh"
      text="Manali, at the northern end of the Kullu Valley in Himachal Pradesh, is a hill station situated at a height of 2050m (6398 ft) in the Himalayas. 
      Situated on the Beas river (Vyaas in Hindi) and near its source, it is a popular tourist spot for Indians in summer and a magical, snow-covered place in winter.
      A staging point for a number of treks (Beas Kund, Chandrakhani Pass) and sports such as white-water rafting, 
      Manali is also on the road to Ladakh via the valley of Lahaul and Spiti and the Rohtang Pass which is the main attraction near Manali."
       
       img1={Mountain3}
       img2={Mountain4}
       />








    </div>
  );
};

export default Destination;
