interface Props {
    data: string []
}

export class User{
    private static data:string[];
    private static id:string;
    private static email:string;
    private static admin:boolean;
    private static token:string;

    User(){
        User.data = [];
        User.id = '';
        User.email = '';
        User.admin = false;
        User.token = '';
        return User;
    }
    SetUser(props:Props){
        User.data = props.data;
        User.id = User.data[0];
        User.email = User.data[1];
        User.admin = Boolean(User.data[4]);
        User.token = User.data[5];
        return User;
    }
    GetId(){
        return User.id;
    }
    GetEmail(){
        return User.email;
    }
    GetAdmin(){
        return User.admin;
    }
    GetToken(){
        return User.token;
    }
}