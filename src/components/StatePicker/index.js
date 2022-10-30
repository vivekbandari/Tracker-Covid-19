import React, {useState, useEffect} from 'react';

// Styles
import styles from './StatePicker.module.css'

// material ui
import { FormControl, NativeSelect } from '@mui/material';
// API
import { fetchStateNames } from '../../api';

export const StatePicker = ({ handleStateChange }) =>{
    const [stateNames,setStateNames] = useState([]);
    const stateMap = {
        'TT':'All India',
        'AP':"Andhra Pradesh",
        'AR':"Arunachal Pradesh",
        'AS':"Assam",
        'BR':"Bihar",
        'CT':"Chhattisgarh",
        'GA':"Goa",
        'GJ':"Gujarat",
        'HR':"Haryana",
        'HP':"Himachal Pradesh",
        'JH':"Jharkhand",
        'KA':"Karnataka",
        'KL':"Kerala",
        'MP':"Madhya Pradesh",
        'MH':"Maharashtra",
        'MN':"Manipur",
        'ML':"Meghalaya",
        'MZ':"Mizoram",
        'NL':"Nagaland",
        'OR':"Odisha",
        'PB':"Punjab",
        'RJ':"Rajasthan",
        'SK':"Sikkim",
        'TN':"Tamil Nadu",
        'TG':"Telangana",
        'TR':"Tripura",
        'UT':"Uttarakhand",
        'UP':"Uttar Pradesh",
        'WB':"West Bengal",
        'AN':"Andaman and Nicobar Islands",
        'CH':"Chandigarh",
        'DN':"Dadra and Nagar Haveli and Daman and Diu",
        'DL':"Delhi",
        'JK':"Jammu and Kashmir",
        'LA':"Ladakh",
        'LD':"Lakshadweep",
        'PY':"Puducherry"
    }
    useEffect(() => {
        const fetchAPI = async () =>{
            const states = await fetchStateNames();
            setStateNames(states);
        }
        fetchAPI();
    },[]);

    return(
        <div className={styles.container}>
            <FormControl className={styles.formcontrol}>
                <NativeSelect className={styles.select} defaultValue="" onChange={(e)=> handleStateChange(e.target.value)}>
                    {stateNames.map((state,id)=>(
                        <option className={styles.option} key={id} value={state}>{stateMap[state]}</option>
                    ))
                    }
                </NativeSelect>
            </FormControl>
            
        </div>
    )
}