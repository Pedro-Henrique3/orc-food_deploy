import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <p>Acesso não autorizado.</p>
            <p><Link to="/login">Entrar/Cadastrar-se</Link></p>
        </>
    )
}

export default ErrorPage