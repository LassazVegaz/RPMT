import { Template } from "../models/template.model"

const createTemplate = async (template) => {
    const _template = new Template(template);
    await _template.save();
    return _template.toJSON();
};

const getAllTemplates = async() => {
    const templates = await Template.find();
    return templates;
}

const getTemplate = async (id) => {
    const template = await Template.findById(id);
    return template;
}

export const templateService = {
    createTemplate,
    getAllTemplates,
    getTemplate
};
