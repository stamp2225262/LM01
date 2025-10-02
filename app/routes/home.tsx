import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";     
import PetHomePage from "./Component/PetHomePage";

export default function HomePage () {
  return (
    <div className="min-h-screen py-10 px-6">
                 <div className="text-center font-bold text-3xl"> Contact </div> 
      <PetHomePage name="Atthapron Samangyad"
                    id ="026730491003-2"
                   email={"atthapron.sam@rmutto.ac.th"}
                   link={"https://www.instagram.com/tamx_taam/"}
                   icon={"https://static.vecteezy.com/system/resources/previews/018/930/473/original/instagram-logo-instagram-icon-transparent-free-png.png"}     

      />
     
      </div>
  );
}
