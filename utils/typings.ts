export type UserResponse = {
    data: User,
    message: string,
    status: string,
    statusCode: number
}

export type User = {
id: string,
lastname: string,
firstname: string,
phone: string,
address: string,
email: string,
isLoggedIn: boolean,
is_admin: boolean,
created_at: string,
updated_at: string
}