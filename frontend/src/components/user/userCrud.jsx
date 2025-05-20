import React, {Component} from "react";
import axios from "axios";
import Main from '../template/main';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Register: Include, List, Change and Remove',
}

const baseUrl = 'http://localhost:3001/users';
const initalState = {
    user: {name: '', email: ''},
    list: []
}


export default class UserCrud extends Component{
    
    state = {...initalState};

    clear(){
        this.setState({user: initalState.user}); //clean only user
    }

    save(){
        const user = this.state.user;
        //put -> change; post -> create
        const method = user.id ? 'put' : 'post';//if user exists checking by his id
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user) //function
            .then(resp =>{ //resp => user
                const list = this.getUpdatedList(resp.data);
                this.setState({user: initalState.user, list}) 
                //clean the register and return the list updated
                //with new user or changed user
            });
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id); 
        //clone list removing the user I received

        list.unshift(user);
        return list;
    }
    render(){
        return(
            <Main {...headerProps}>
                User Register
            </Main>
        )
    }
}