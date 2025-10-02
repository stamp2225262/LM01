export default function PetHomePage({name,id,email,link,icon} : {name:any,id:any,email:any,link:any,icon:any}){
    return(
        
          <h1 className="text-xl md:text-1xl font-bold text-center text-white-800 mb-10">
            {name} <br />
            {id} <br />
            {email}
        <a href={link}>
        <img src={icon} className="w-1/6 mx-auto" 
        />
        </a>
        </h1>
    );
}
 
