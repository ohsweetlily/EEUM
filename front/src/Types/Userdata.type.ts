export type UserdataRequest = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    nickname: string;
    phoneNumber: string;
    gender: string;
    birthYear: number;
    birthMonth: number;
    birthDate: number;
    profilePhotoUrl: string;
    zipCode: number;
    mainAddress: string;
    detailAddress: string;
};

export type UserDetail = {
    item: {
        id: number;
        email: string;
        nameInfo: {
            firstName: string;
            lastName: string;
        };
        nickname: string;
        phoneNumber: string;
        gender: string;
        birthInfo: {
            year: number;
            month: number;
            date: number;
        };
        profilePhotoUrl?: string;
        role: string;
        status: string;
        addressInfo: {
            zipCode: number;
            mainAddress: string;
            detailAddress: string;
        };
        createdAt?: string;
        updatedAt?: string;
    };
    success: boolean;
};

export type LoginUser = {
    email: string;
    password: string;
};

export type LoginInfo = {
    // 타입지정을 명확히 해줘야 타입 에러가 발생하지 않음
    item: { jwtToken: string };
    success: string;
};
