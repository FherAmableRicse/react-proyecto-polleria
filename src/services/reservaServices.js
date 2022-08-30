import axios from "axios";

export const GetReservas=async ()=>{
    const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL_BACKEND}/reserva`
      };
      const { data } = await axios(options);
      return data;
}

export const PostReserva=async (reserva)=>{
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: reserva,
        url: `${process.env.REACT_APP_API_URL_BACKEND}/reserva`
      };
      const { data } = await axios(options);
    
    return data;
}

export const GetReserva=async (_id)=>{
    const options = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL_BACKEND}/reserva/${_id}`
      };
      const { data } = await axios(options);

    return data;
}

export const UpdateReserva=async (reserva)=>{
    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        data: reserva,
        url: `${process.env.REACT_APP_API_URL_BACKEND}/reserva/${reserva._id}`
      };
      const { data } = await axios(options);

    return data;
}

export const DeleteReserva=async (_id)=>{
    const options = {
        method: 'DELETE',
        url: `${process.env.REACT_APP_API_URL_BACKEND}/reserva/${_id}`
      };
      const { data } = await axios(options);
    return data;
}