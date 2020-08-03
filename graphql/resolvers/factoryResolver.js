const getAll = async(Model) => {
    try {
        const data = await Model.find();
        return data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
};