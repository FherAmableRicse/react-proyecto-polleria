import usePolleria from "../../hooks/usePolleria";
const BuscadorPlatos = () => {
  const {platos}=usePolleria();
  console.log(platos);

//   const getPlatos = async () => {
//     try {
//       const options = {
//         method: "GET",
//         // url: `${process.env.REACT_APP_URL_PLATOS_JSON_URL}`,
//         url: `https://fheramablericse.github.io/api-test/db.json`,
//       };
//       const { data } = await axios(options);
//       platos=data;
//       console.log(platos);
//     } catch (error) {
//       console.log(error.response.data.message);
//     } finally {
//         //mostrat platos
//     }
//   };

  return (
    <div className="my-8 col-sm-8">
      <div>
        <h2>Carta</h2>
      </div>
      <div className="buscador__container">
        <input
          type="text"
          className="buscador__input"
          placeholder="Ingrese su plato"
          id="buscadorInput"
          required
        />
        <div className="buscador__resultados" id="buscadorResultados"></div>
      </div>
    </div>
  );
};

export default BuscadorPlatos;
