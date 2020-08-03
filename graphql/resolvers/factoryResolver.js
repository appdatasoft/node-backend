const getAll = async(Model) => {
    try {
        const data = await Model.find();
        return data;
    } catch (error) {
        throw error;
    }
};

const create = async(Model, input) => {
    try {
        const data = await Model.create(input);
        return data;
    } catch (error) {
        throw error;
    }
};

const update = async(Model, input) => {
    try {
        const data = await Model.findByIdAndUpdate(input.id, input, {
            new: true,
            runValidators: true,
        });
        return data;
    } catch (error) {
        throw error;
    }
};

const deleteOne = async(Model, id) => {
    try {
        const data = Model.findByIdAndDelete(id);
        return "deleted";
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    create,
    update,
    delete: deleteOne,
};