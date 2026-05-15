import { Client } from "pg";

const client = new Client({
    host: "postgres",
    port: 5432,
    user: "admin",
    password: "admin123",
    database: "escuela",
});

await client.connect();
console.log("CONECTADO A LA BASE DE DATOS");

interface Usuario {
    id?: number;
    nombre?: string;
    email?: string;
}

function validarUsuario(usuario: Usuario): { valido: boolean; error?: string } {
    if (!usuario.nombre || usuario.nombre.trim() === "") {
        return { valido: false, error: "El nombre es requerido" };
    }
    if (!usuario.email || usuario.email.trim() === "") {
        return { valido: false, error: "El email es requerido" };
    }
    if (!usuario.email.includes("@")) {
        return { valido: false, error: "Email inválido" };
    }
    return { valido: true };
}

function logHttp(metodo: string, ruta: string, status: number, duracion: number) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${metodo} ${ruta} -> ${status} (${duracion}ms)`);
}

async function handleGetUsuarios() {
    const result = await client.query("SELECT * FROM usuarios;");
    return { status: 200, data: result.rows };
}

async function handlePutUsuario(id: string, body: Usuario) {
    const validation = validarUsuario(body);
    if (!validation.valido) {
        return { status: 400, data: { error: validation.error } };
    }

    try {
        const result = await client.query(
            "UPDATE usuarios SET nombre = $1, email = $2 WHERE id = $3 RETURNING *;",
            [body.nombre, body.email, id]
        );

        if (result.rows.length === 0) {
            return { status: 404, data: { error: "Usuario no encontrado" } };
        }

        return { status: 200, data: result.rows[0] };
    } catch (error) {
        console.error("Error actualizando usuario:", error);
        return { status: 500, data: { error: "Error interno del servidor" } };
    }
}

async function handleHealth() {
    try {
        await client.query("SELECT 1");
        return { status: 200, data: { status: "OK", database: "conectada" } };
    } catch (error) {
        return { status: 503, data: { status: "ERROR", database: "desconectada" } };
    }
}

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const inicio = Date.now();
        const url = new URL(req.url);
        const metodo = req.method;

        let response;

        if (url.pathname === "/health") {
            const { status, data } = await handleHealth();
            logHttp(metodo, "/health", status, Date.now() - inicio);
            return Response.json(data, { status });
        }

        if (metodo === "GET" && url.pathname === "/usuarios") {
            const { status, data } = await handleGetUsuarios();
            logHttp(metodo, "/usuarios", status, Date.now() - inicio);
            return Response.json(data, { status });
        }

        if (metodo === "PUT" && url.pathname.startsWith("/usuarios/")) {
            const id = url.pathname.split("/")[2];
            const body = await req.json();
            const { status, data } = await handlePutUsuario(id, body);
            logHttp(metodo, `/usuarios/${id}`, status, Date.now() - inicio);
            return Response.json(data, { status });
        }

        logHttp(metodo, url.pathname, 404, Date.now() - inicio);
        return Response.json({ error: "Ruta no encontrada" }, { status: 404 });
    },
});

console.log("Servidor corriendo en http://127.0.0.1:" + server.port);