import { Template } from "../models/template.model"

const createTemplate = async (template) => {
    const _template = new Template(template);
    await _template.save();
    return _template.toJSON();
};

export const templateService = {
    createTemplate
};
