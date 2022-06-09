import { Link } from "react-router-dom";
import "../../src/styles/css/Page404.css";
const Page404 = () => {
  return (
    <div className="container404">
      <div className="img-404_1">
        <svg id="svgWrap_2" x="0px" y="0px" viewBox="0 0 700 250">
          <g>
            <path
              id="id3_2"
              d="M195.7 232.67h-37.1V149.7H27.76c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98H158.6V29.62h37.1v203.05z"
            />

            <path
              id="id1_2"
              d="M688.33 232.67h-37.1V149.7H520.39c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98h112.57V29.62h37.1v203.05z"
            />
          </g>
        </svg>
        <div className="img-404_2">
          <svg id="svgWrap_1" x="0px" y="0px" viewBox="0 0 700 250">
            <g>
              <path
                id="id3_1"
                d="M195.7 232.67h-37.1V149.7H27.76c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98H158.6V29.62h37.1v203.05z"
              />
              <path
                id="id1_1"
                d="M688.33 232.67h-37.1V149.7H520.39c-2.64 0-5.1-.5-7.36-1.49-2.27-.99-4.23-2.31-5.88-3.96-1.65-1.65-2.95-3.61-3.89-5.88s-1.42-4.67-1.42-7.22V29.62h36.82v82.98h112.57V29.62h37.1v203.05z"
              />
            </g>
          </svg>
        </div>
        <div className="img-logo">
          <img
            src="https://i.postimg.cc/pLgmgMDd/logo.png"
            alt="Logo polleria"
            className="logo"
          />
        </div>
      </div>

      <h2 className="mensaje1">Página no encontrada</h2>
      <Link to="/" className="link">
        <h3 className="mensaje2">¡Haz clic aquí para regresar!</h3>
      </Link>
    </div>
  );
};

export default Page404;
