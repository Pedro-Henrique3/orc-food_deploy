import React from "react";
import { Link } from "react-router-dom";

function DetalhePedidoAdmin() {
    return (
        <div>
            <p>Pedido (página do admin).</p>
            <p><Link to="/pedidosadmin">Voltar para "pedidos"</Link></p>
        </div>
    )
}

export default DetalhePedidoAdmin