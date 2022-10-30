import axios from 'axios'

const url1 = 'https://api.covid19tracker.in/data/static/data.min.json';

const url2 = 'https://api.covid19tracker.in/data/static/timeseries.min.json';

export const fetchData = async (stateCode) => {
    try {
        const { data } = await axios.get(url1);
        const active = parseInt(data[stateCode].total.confirmed)-(parseInt(data[stateCode].total.recovered)+parseInt(data[stateCode].total.deceased)+parseInt(data[stateCode].total.other));
        const totalData = {
            confirmed: data[stateCode].total.confirmed,
            active: active > 0 ? active:0,
            recovered: data[stateCode].total.recovered,
            deaths: data[stateCode].total.deceased,
            firstDose: data[stateCode].total.vaccinated1,
            secondDose: data[stateCode].total.vaccinated2,
            lastUpdate: data[stateCode].meta.last_updated,
            todayConfirmed: data[stateCode].delta.confirmed,
            todayRecovered: data[stateCode].delta.recovered,
            todayDeaths: data[stateCode].delta.deceased,
            todayFirstDose: data[stateCode].delta.vaccinated1,
            todaySecondDose: data[stateCode].delta.vaccinated2,
        }
        return totalData;
    } catch (error) {
        console.log(error);
    }
}

export const fectchDailyData = async (stateCode) => {
    try {
        const { data } = await axios.get(url2);
        const dailyData = data[stateCode].dates;
        const dates = Object.keys(data[stateCode].dates);

        const modifiedData = dates.map((date) => ({
            confirmed:dailyData[date].delta.confirmed,
            recovered:dailyData[date].delta.recovered,
            deceased:dailyData[date].delta.deceased,
            firstDose:dailyData[date].delta.vaccinated1,
            secondDose:dailyData[date].delta.vaccinated2,
            date:date,
        }))
        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}

export const fetchStateNames = async () => {
    try {
        const { data } = await axios.get(url1);
        const stateNames = Object.keys(data);
        
        return stateNames;
    } catch (error) {
        console.log(error);
    }
}