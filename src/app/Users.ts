export class Users
{
    id : string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;

    constructor(id,email ,first_name,last_name,avatar)
    {
        this.id=id;
        this.email=email;

        this.first_name=first_name;
        this.last_name=last_name;
        this.avatar=avatar;
    }
    
}