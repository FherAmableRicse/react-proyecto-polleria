export const PostPedido=async (pedido)=>{
    const response=fetch(`${process.env.REACT_APP_API_URL_BACKEND}/pedidos`,{
        method:"POST",
        headers:{
          'Authorization':`Bearer ${localStorage.getItem('token')}`,
          'Accept': 'application/json',
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          "fecha_registro":pedido.fecha_registro,
          "cliente_id":pedido.cliente_id,
          "lista_platos":pedido.lista_platos
        }),
      });

    return response;
}