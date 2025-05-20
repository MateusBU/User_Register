import React, {Component} from "react";
import Main from '../template/main';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Users Register: Include, List, Change and Remove',
}
//separar esse component em mais? user table

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...headerProps}>
                User Register
            </Main>
        )
    }
}