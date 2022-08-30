export const PostPago =async (detallePago)=>{
    const response=fetch(`${process.env.REACT_APP_API_URL_BACKEND}/pagos`,{
        method:"POST",
        headers:{
          'Authorization':`Bearer ${localStorage.getItem('token')}`,
          'Accept':'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "numero_tarjeta":detallePago.numero_tarjeta,
          "fecha_vencimiento_tarjeta":detallePago.fecha_vencimiento_tarjeta,
          "cvv_tarjeta":detallePago.cvv_tarjeta,
          "nombre_tarjeta":detallePago.nombre_tarjeta,
          "apellido_tarjeta":detallePago.apellido_tarjeta,
          "email_tarjeta":detallePago.email_tarjeta,
          "cuotas":detallePago.cuotas,
          "monto":detallePago.monto
        })
      });
    
      return response
}