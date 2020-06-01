export interface AuthenticateSuccessType {
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
}
export interface AuthResponseData {
    token: string;
}
