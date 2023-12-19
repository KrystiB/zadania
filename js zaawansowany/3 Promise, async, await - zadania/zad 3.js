async function job(result, database, errorManager){
    try {
        const id = await result;
        const info = await database.get(id);
        return info.name;
    }
    catch (error) {
        errorManager.notify(error);
        throw error;
    }
}