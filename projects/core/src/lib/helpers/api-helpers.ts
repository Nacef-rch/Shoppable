export const handleSuccess = (res: any): object => {
    return res.body || {};
};

export const handleError = (error: any): Promise<any> => {
    const err: any = error.error || error;
    throw {
        status: err.status || error.status,
        code: err.code || err.status || error.status || -1,
        message: err.client_message || err.message || error.error
    };
};
