import React from "react";

import { useParams } from 'react-router-dom';

function Param(param) {

    const { id } = useParams();

    return (
        <div className="Param">
            <h1>Param</h1>
            <p>Valor: { id }</p>
        </div>
  );
}

export default Param;