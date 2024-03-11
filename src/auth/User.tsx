interface Props {
    data: {
        admin:boolean,
        data_created:string,
        email:string,
        g_auth_verify:boolean,
        id:string,
        password:string,
        token:string
    }
}

export class User{
    id:string;
    email:string;
    admin:boolean;
    token:string;

    constructor(props: Props) {
        this.id = props.data.id || '';     
        this.email = props.data.email || '';
        this.admin = props.data.admin || false;
        this.token = props.data.token || '';
    }

    GetId(){
        return this.id;
    }
    GetEmail(){
        return this.email;
    }
    GetAdmin(){
        return this.admin;
    }
    GetToken(){
        return this.token;
    }
}