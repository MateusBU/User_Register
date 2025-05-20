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

    updateField(event){
        const user = {...this.state.user}; //clone
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    //add in other file
    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-grup">
                            <label>Name</label>
                            <input type="text" className="form-control" 
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Type the name..."/>
                        </div>
                    </div>
                    {/*big device => use all 12 columns
                       small devices => col-md-6 */}
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail Address</label>
                            <input type="text" className="form-control" 
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Type the email address..."/>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Save
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}