export const checkValidData = ( email, password) => {
    // const isNameValidate =/^[a-zA-Z ]{2,30}$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    // if(!isNameValidate) return "Invalid Name !";
    if(!isEmailValid) return "Invalid Email !";
    if(!isPasswordValid) return "Invalid Password !";

    return null;
};