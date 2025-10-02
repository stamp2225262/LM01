import PetFrom from "./Component/MyPetFroms";

export default function MyPetForm () {
  return (
    <div className="min-h-screen py-10 px-6">
                 <div className="text-center font-bold text-3xl text-black-900"> PetForm </div> 
        <PetFrom Pet={{Name:""}}/> 

    </div>
  );
}
