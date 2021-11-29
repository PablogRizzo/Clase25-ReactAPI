import React from "react";

const axios = require("axios");

export default function DatosAPI(){

    const [equipo, setEquipo] = React.useState("")

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {

        const GitHubHTTP = axios.create({
            baseURL: 'https://api.github.com/users'
        });

        GitHubHTTP.get("/PablogRizzo")
        .then(res => {
            const user = res.data;
            setEquipo(user);
        })
        .catch(err=>console.log(err))
    }

    return (

        <div>
            <h1>Datos</h1>
            <ul>
                <li key="equipo.id">Usuario: {equipo.login}</li>
                <li key="equipo.html_url">URL: {equipo.html_url}</li>
                <li key="equipo.followers">Seguidores: {equipo.followers}</li>
                <li key="equipo.following">Siguiendo: {equipo.following}</li>
            </ul>
        </div>
    )

}