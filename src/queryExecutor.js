// src/queryExecutor.js

async function executeDELETEQuery(query) {
    const { table, whereClauses } = parseDeleteQuery(query);
    let data = await readCSV(`${table}.csv`);

    if (whereClauses.length > 0) {
        // Filter out the rows that meet the where clause conditions
        // Implement this.
    } else {
        // If no where clause, clear the entire table
        data = [];
    }

    // Save the updated data back to the CSV file
    await writeCSV(`${table}.csv`, data);

    return { message: "Rows deleted successfully." };
}

module.exports = { executeSELECTQuery, executeINSERTQuery, executeDELETEQuery };