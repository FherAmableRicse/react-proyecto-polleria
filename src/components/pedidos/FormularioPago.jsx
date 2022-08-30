import { useState } from "react";
import usePolleria from "../../hooks/usePolleria";
import "../../App.css";
import "../../styles/css/Reservas.css";
import Alert from "../sections/Alert";

const FormularioPago=()=>{
    const todayDate = new Date().toISOString().slice(0, 10);
    const {pedidoCliente,crearPedido, setProcederPago, realizarPago,montoTotal,setPlatosCarrito}=usePolleria();
    
    const [formPago,setFormPago]=useState({
        numero_tarjeta:"",
        fecha_vencimiento_tarjeta:"",
        cvv_tarjeta:"",
        nombre_tarjeta:"",
        apellido_tarjeta:"",
        email_tarjeta:"",
        cuotas:1,
        monto:montoTotal,
    });

    const [alert, setAlert] = useState({
        message: "",
        error: false,
    });

    const {
        numero_tarjeta,
        fecha_vencimiento_tarjeta,
        cvv_tarjeta,
        nombre_tarjeta,
        apellido_tarjeta,
        email_tarjeta,
        cuotas,
        monto
    }=formPago;

    const handleChange=(e)=>{
        setFormPago({
            ...formPago,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        realizarPago(formPago);
        console.log(pedidoCliente);
        crearPedido(pedidoCliente);
        setPlatosCarrito([]);
        localStorage.removeItem('platosCarrito');
        setProcederPago(false);
    }

    return(
        <section className="mb-auto container-reservas-form d-flex flex-column gap-3 col-md-5">
            <form className=" sectionForm text-dark rounded container" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="numero_tarjeta"
                        placeholder="Numero de la tarjeta"
                        className="form-control"
                        value={numero_tarjeta}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        Numero de tarjeta
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        min={todayDate}
                        type="date"
                        name="fecha_vencimiento_tarjeta"
                        placeholder="dd/MM/yyyy"
                        className="form-control"
                        value={fecha_vencimiento_tarjeta}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        Fecha de vencimiento
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="cvv_tarjeta"
                        placeholder="CVV"
                        className="form-control"
                        value={cvv_tarjeta}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        CVV
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="nombre_tarjeta"
                        placeholder="Nombre del titular"
                        className="form-control"
                        value={nombre_tarjeta}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        Nombre del titular
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="apellido_tarjeta"
                        placeholder="Apellido del titular"
                        className="form-control"
                        value={apellido_tarjeta}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        Apellido del titular
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="email_tarjeta"
                        placeholder="Email del titular"
                        className="form-control"
                        value={email_tarjeta}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        Email del titular
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        name="cuotas"
                        placeholder="Numero de cuotas"
                        className="form-control"
                        value={cuotas}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        Numero de cuotas
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        name="monto"
                        placeholder={montoTotal}
                        className="form-control"
                        disabled="true"
                        value={monto}
                        required
                    />
                    <label htmlFor="solicitante" className="text-dark">
                        Monto a pagar
                    </label>
                    <button type="submit" className="btn btn-dark w-100">
                        Pagar
                    </button>
                </div>
            </form>
        </section>
    );
};

export default FormularioPago;