import { GetFunc as GetFuncRepo, ValidateEmailFunc as ValidateEmailFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = async (req, res) => {

    let LocalFromRepo = await GetFuncRepo();

    if (LocalFromRepo.KTF === false) return res.status(404).json({});

    res.json(LocalFromRepo.JsonData);
};

let ValidateEmailFunc = async (req, res) => {
    let LocalUuid = req.params.Id;

    let LocalFromRepo = await ValidateEmailFuncRepo({ inUuid: LocalUuid});

    if (LocalFromRepo.KTF === false) return res.status(404).json({});

    res.json(LocalFromRepo.JsonData);
};

export { GetFunc, ValidateEmailFunc };