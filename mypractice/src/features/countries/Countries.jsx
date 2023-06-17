import React from "react";
import { useGetAllCountriesQuery } from "../../services/countriesApi";

function Countries(){
    var{isLoading,data}=useGetAllCountriesQuery();
    return (
        <div className="border border-2 border-secondary m-2 p-2">
            <h1>Countries</h1>
            {
                isLoading && (<h1>Loading...plz wait</h1>)
            }
            {
                !isLoading && (
                    data.map((c)=>{
                        return <li>{c.name.common}</li>
                    })
                )
            }
        </div>
    )
}
export default Countries;