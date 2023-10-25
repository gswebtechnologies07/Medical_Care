import validator from 'is_js';


const checkName = (val, key) => {
    if (validator.empty(val.trim())) {
        return `Please enter ${key}`
    } else {
        return ''
    }
}
const checkMob = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `Please enter ${key}`
    } else {
        return ''
    }
}
const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `Please enter ${key}`
    } else {
        return ''
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return ''
    }
}


export default function (data) {
    const { name, email, password, mobileNum, passwordConfirm, Degree, State, district, city, sector, address, regNumber, desc, Speciality } = data;

    if (name !== undefined) {
        let emptyValidationText = checkName(name, "name");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(name, 3, "name");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, "email");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            if (!validator.email(email)) {
                return "Please enter valid email";
            }
        }
    }

    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, "password");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(password, 6, "password");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }
    if (passwordConfirm !== undefined) {
        let emptyValidationText = checkEmpty(passwordConfirm, "Confirm_Password");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(passwordConfirm, 6, "Confirm_Password");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }

    if (mobileNum !== undefined) {
        let emptyValidationText = checkMob(mobileNum, "mobileNum");
        if (emptyValidationText !== '') {
            return emptyValidationText
        }
        else {
            let minLenghtValidation = checkMinLength(mobileNum, 10, "mobileNum");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }

    if (Degree !== undefined) {
        let emptyValidationText = checkName(Degree, "Degree");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(Degree, 3, "Degree");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }

    if (State !== undefined) {
        let emptyValidationText = checkName(State, "  State,");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(State, 3, "  State,");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }

    if (district !== undefined) {
        let emptyValidationText = checkName(district, "district");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(district, 3, "district");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }

    if (city !== undefined) {
        let emptyValidationText = checkName(city, "city");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(city, 3, "city");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }

    if (sector !== undefined) {
        let emptyValidationText = checkName(sector, "sector");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(sector, 1, "sector");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }
    if (address !== undefined) {
        let emptyValidationText = checkName(address, "address");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(address, 3, "address");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }
    if (regNumber !== undefined) {
        let emptyValidationText = checkName(regNumber, "regNumber");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(regNumber, 3, "regNumber");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }
    if (desc !== undefined) {
        let emptyValidationText = checkName(desc, "desc");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength(desc, 3, "desc");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }
    if ( Speciality !== undefined) {
        let emptyValidationText = checkName( Speciality, " Speciality");
        if (emptyValidationText !== '') {
            return emptyValidationText
        } else {
            let minLenghtValidation = checkMinLength( Speciality, 3, " Speciality");
            if (minLenghtValidation !== '') {
                return minLenghtValidation;
            }
        }
    }





}



