import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query(
    "SELECT current_user, current_database()"
  );
  console.log(result.rows);
  response.status(200).json({ chave: "teste api" });
}
export default status;
