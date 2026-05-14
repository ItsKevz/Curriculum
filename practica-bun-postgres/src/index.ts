import { Client } from "pg";

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "admin123",
    database: "escuela",
});

async function obtenerUsuarios() {
    const result = await client.query(
        "SELECT * FROM usuarios"
    );
    return result.rows;
}

async function main() {

    try {

        await client.connect();

        console.log("Conexión exitosa a PostgreSQL");

        await client.query(
            "INSERT INTO usuarios(nombre) VALUES($1)",
            ["Pedro"]
        );

        const resultById = await client.query(
            "SELECT * FROM usuarios WHERE id = $1",
            [1]
        );

        console.log("\nUsuario con id 1:");
        console.log(resultById.rows);

        const result = await obtenerUsuarios();

        console.log("\nUsuarios registrados:");

        console.log(result);

    } catch (error) {

        console.error(
            "Error al conectar:",
            error
        );

    } finally {

        await client.end();

    }

}

main();
