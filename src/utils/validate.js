export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValidate =/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);

    if(!isEmailValid) return "Invalid Email !";
    if(!isPasswordValid) return "Invalid Password !";
    // if(!isNameValidate) return "Invalid Name !";

    return null;
};