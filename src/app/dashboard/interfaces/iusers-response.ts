export interface IUsersResponse {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        IUser[];
    support:     Support;
}

export interface IUser {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
export interface IUserResponse {
    data: IUserResponse,
    support: Support
}
