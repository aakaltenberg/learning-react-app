import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name:"Jhon C.", salary:800, increase: false, id:1},
                {name:"Alex M.", salary:3000, increase: true, id:2},
                {name:"Carl W.", salary:5000, increase: false, id:3}
            ]
        }
    }

    deleteEmployee = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(el => el.id !== id)
            }
        })
    }

    addEmployee = (name, salary) => {
        if(name === '' || salary === 0) return;
        const newEmployee= {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newEmployee];
            return {
                data: newArr
            }
        });
    }



    render(){
    return ( 
        <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteEmployee}
        />
        <EmployeesAddForm onAdd={this.addEmployee}/>
    </div>
    );}
}

export default App;