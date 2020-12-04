import React, { Fragment } from "react";
import { revisarPresupuesto } from "../herpers";
import PropTypes from "prop-types";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget:{presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Rest:{restante}
      </div>
    </Fragment>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
