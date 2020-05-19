export interface UserOnLogin {
    email: string;
    password: string;
}

export interface UserOnRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    handle: string;
}
