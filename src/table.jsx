
import React, { Component } from 'react'
import { tableList } from './mock';
export default class Table extends Component {
    state = {
        data:tableList,
    }
    render() {

        const onChange = (e) =>{
            this.setState((state) => {
                const newData = tableList.filter((value) => value.name.includes(e.target.value))
                return {data:newData}
            });
        }

        const OnSelect = () =>{
            alert('salom')
        }

        return (
            <div>
                <input onChange={onChange} type="text" placeholder='Enter text' />
                <select name="" onClick={OnSelect} id="">
                    <option value=''>ID</option>
                    <option value=''>Name</option>
                    <option value=''>Status</option>
                </select>
                <table border='1' style={{borderCollapse:'collapse'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(({id, name, status})=>(
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td> 
                                    <td>{status}</td>
                                </tr>
                            ))  

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
