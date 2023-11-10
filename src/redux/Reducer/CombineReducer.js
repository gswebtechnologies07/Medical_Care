import { LoginReducer } from "./LoginReducer";
import { SignupReducer } from "./SignupReducer";
import { ForgotPasswordReducer } from './ForgotPasswordReducer';
import { ChemistProfileReducer, GetChemistProfileReducer, EditChemistProfileReducer, getAllChemistProfileReducer } from './ChemistProfileReducer';
import { DoctorProfileReducer, GetDoctorProfileReducer, EditDoctorProfileReducer } from './DoctorProfileReducer';
import { Diaganostic_ProfileReducer, GetDiaganosticProfileReducer, EditDiaganosticProfileReducer } from './Diagnostic_CenterReducer';
import { GetProfileReducer } from './GetProfileReducer';
import { GetLaboratoryProfileReducer, Laboratory_ProfileReducer, EditLaboratoryProfileReducer } from './Laboratory_ProfileReducer';
import { Physiotherapist_ProfileReducer, GetPhysiotherapistProfileReducer, EditPhysiotherapistProfileReducer } from './PhysiotherapistProfileReducer';
import { OrderPlaceReducer, EditOrderPlaceReducer } from './OrderPlaceReducer';
import { HomeChemistReducer } from './HomeChemistReducer';
//
export const combineReducer = ({
    LoginReducer,
    SignupReducer,
    ForgotPasswordReducer,
    DoctorProfileReducer,
    GetDoctorProfileReducer,
    EditDoctorProfileReducer,
    Diaganostic_ProfileReducer,
    GetDiaganosticProfileReducer,
    EditDiaganosticProfileReducer,
    GetProfileReducer,
    GetLaboratoryProfileReducer,
    Laboratory_ProfileReducer,
    EditLaboratoryProfileReducer,
    ChemistProfileReducer,
    GetChemistProfileReducer,
    EditChemistProfileReducer,
    Physiotherapist_ProfileReducer,
    GetPhysiotherapistProfileReducer,
    EditPhysiotherapistProfileReducer,
    getAllChemistProfileReducer,
    OrderPlaceReducer,
    EditOrderPlaceReducer,


    HomeChemistReducer,



})