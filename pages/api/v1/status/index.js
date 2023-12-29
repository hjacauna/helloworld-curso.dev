import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const versionDb = await database.query("SHOW server_version;");
  const dataBaseVersionValue = versionDb.rows[0].server_version;
  const maxConnections = await database.query("SHOW max_connections;");
  const maxConnectionsValue = maxConnections.rows[0].max_connections;
  const dataBaseName = process.env.POSTGRES_DB;
  const startConnections = await database.query({
    text: "SELECT count(*) FROM pg_stat_activity where datname = $1;",
    values: [dataBaseName],
  });

  const dataBaseOpenConnectionsValue = startConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dataBaseVersionValue,
        max_connections: parseInt(maxConnectionsValue),
        opened_connections: parseInt(dataBaseOpenConnectionsValue),
      },
    },
  });
}
export default status;
