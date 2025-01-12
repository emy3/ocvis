import { Rcon } from "rcon-client"

const rcon = await Rcon.connect({
    host: "localhost",
    port: 25575,
    password: "test123"
});

console.log(await rcon.send("list"));

async function getServerStatus() {
    await rcon.connect();
    // sends list command to server
    const response = await rcon.send('list');
    await rcon.end();
    return response;
}

export { getServerStatus };