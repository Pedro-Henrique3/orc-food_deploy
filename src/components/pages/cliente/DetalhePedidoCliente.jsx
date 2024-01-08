import React from "react";
import { Link } from "react-router-dom";

function DetalhePedidoCliente() {
    return (
        <div>
            <p>Pedido (página do cliente).</p>
            <p><Link to="/carrinho">Voltar para o carrinho.</Link> </p>
        </div>
    )
}

export default DetalhePedidoCliente