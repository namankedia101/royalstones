import axios from "axios";

export const baseUrl='https://bayut.p.rapidapi.com';

export const fetchApi = async (url,locationexternalIDs,prps,categoryexternalIDs,bathsmin,rentfrequency,minPrice,maxPrice,roomsmin,sort,areamax,hpp,externalID)=>{
    const options={
        params: {
            locationExternalIDs: locationexternalIDs, 
            purpose: prps, 
            categoryExternalIDs: categoryexternalIDs,
            bathsMin:bathsmin,            
            rentFrequency:rentfrequency,
            priceMin:minPrice,
            priceMax:maxPrice,
            roomsMin:roomsmin,
            sort:sort,
            areaMax:areamax,
            hitsPerPage: hpp,
            externalID:externalID,
        },
        headers: {
            'X-RapidAPI-Key': process.env.KEY,
            'X-RapidAPI-Host': process.env.HOST
        }
    }
    const {data}=await axios.get(url,options);

    return data;

}