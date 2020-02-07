import React, {useState, useEffect} from "react";
import axios from "axios";
import {postStrainSearch} from '../Actions/index';
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux';
// import {useDispatch} from 'react-redux';


const StrainSearch = (props) => {
    const [data, setData] = useState([]);
    // const [query, setQuery] = useState('');
    const [searchStrain, setSearchStrain] = useState({ strain: '' });
    const [postStrains, setPostStrains] = useState([])
    // const dispatch = useDispatch();
    // const strain = props.strain;

    useEffect(() => {
        axiosWithAuth()
            .get('https://med-cab-backend.herokuapp.com/api/strain/:str')
            .then(res => {
                // setPostStrains(res.data)
                console.log(res)
                const filtered = res.data.results.filter(item => {
                    return item.name.toLowerCase().includes(searchStrain.toLowerCase());
                });
                setData(filtered);
            })
            .catch(err => console.error('Error Finding Strain', err))
        }, [searchStrain]);
              
    const handleInputChange = e => {
        setSearchStrain({
            ...searchStrain,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // setPostStrains(searchStrain.strain); //need to check function here
        props.postStrainSearch(searchStrain)
        setSearchStrain({ strain: '' });
    };

    const postStrain = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/display', data)
            .then(res => {
                setPostStrains({
                    strain: ''
                })
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    };

    return (
        < div className="strains">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchStrain.strain}
                    name="strain"
                    id="strain"
                    placeholder="Search Strains"
                    onChange={handleInputChange}
                />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={postStrain}>Add Strain!</button>
            {postStrains.map(prop => {
                return (
                    <div>
                        <h3>Strain: {prop.strain}</h3>
                    </div>
                )
            })}
            {/* {data.map((item, index) => (
                <div key={index} str={item}>
                    <h2>{data.strain}</h2>
                </div>
            ))} */}
            </form>
        </div>
    );  
};

const mapStateToProps = state => {
    return {
        ...state,
        strain: state.strain
    };
};
const mapDispatchToProps = {
    postStrainSearch
}
export default connect(mapStateToProps, mapDispatchToProps)(StrainSearch);