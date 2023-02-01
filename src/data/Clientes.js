export async function obtenerClientes() {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`)
    const resultado = await respuesta.json()
    return resultado;
}
export async function obtenerCliente(id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`)
    const resultado = await respuesta.json()
    return resultado;
}

export async function agregarCliente(datos){

    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}

export async function actualizarCliente(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`, {
            method: 'DELETE'
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}