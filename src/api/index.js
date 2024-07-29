import axios from "axios";

const jsonUrl = "http://localhost:3000";

export const getHotels = async () => {

    try{
        const response = await axios.get(`${jsonUrl}/hotels`);
        const data = await response.data;
        return data;
    
    } catch (error) {
        console.log(error);
    }
};


export const getHotel = async (id) => {
    try{
        const response = await axios.get(`${jsonUrl}/hotels/${id}`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};  

export const getTopDestinations = async () => {
    try{
        const response = await axios.get(`${jsonUrl}/topDestinations`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getTopDestination = async (id) => {
    try{
        const response = await axios.get(`${jsonUrl}/topDestinations/${id}`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getTravelPackages = async () => {
    try{
        const response = await axios.get(`${jsonUrl}/travelPackages`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getTravelPackage = async (id) => {
    try{
        const response = await axios.get(`${jsonUrl}/travelPackages/${id}`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getThingsToDos = async () => {
    try{
        const response = await axios.get(`${jsonUrl}/thingsToDo`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getThingsToDo = async (id) => {
    try{
        const response = await axios.get(`${jsonUrl}/thingsToDo/${id}`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getReviews = async () => {
    try{
        const response = await axios.get(`${jsonUrl}/reviews`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getReview = async (hotelId) => {
    try{
        const response = await axios.get(`${jsonUrl}/reviews/?hotelId=${hotelId}`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};

export const getUsers = async () => {
    try{
        const response = await axios.get(`${jsonUrl}/users`);
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
};
