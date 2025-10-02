import { useState } from "react";
export default function PetForm({Pet}: {Pet:any}){
  return (
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl mx-auto p-5 text-center"
                >
                    <div className=" text-gray-500 text-sm font-semibold">
                      <p >Name:</p> <input type="text"className="bg-gray-50 border border-gray-300 mx-auto" />
                      <p>Birthdate:</p> <input type="date" className="bg-gray-50 border border-gray-300 mx-auto"  />
                      <p>Category:</p> <input type="text" className="bg-gray-50 border border-gray-300 mx-auto"  />
                      <p>Sex:</p> 
                      <input type="radio" name="Other"className="bg-gray-50 border border-gray-300 mx-auto"  />
                      Other
                      <input type="radio" name="Male" className="bg-gray-50 border border-gray-300 mx-auto"  />
                      Male
                      <input type="radio" name="Female" className="bg-gray-50 border border-gray-300 mx-auto" />
                      Female
                      <p>Description: </p> <input type="text" className="bg-gray-50 border border-gray-300 mx-auto"  />
                      <p>Owner:</p>
                      <p>Owner Name:</p> <input type="text" className="bg-gray-50 border border-gray-300 mx-auto"  />
                      <p>Owner Email:</p> <input type="text" className="bg-gray-50 border border-gray-300 mx-auto"  />
                      <br />

                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                        Submit
                      </button>
                    </div>
                  </div>
               
              );
}