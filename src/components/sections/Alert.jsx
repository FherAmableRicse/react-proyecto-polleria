const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error &&
        "align-self-center mt-3 w-100 py-3 text-uppercase badge bg-warning text-dark"
      }`}
    >
      {alert.message}
    </div>
  );
};

export default Alert;
