import axios from 'axios';


class WebsiteHelper {

    getEvents(state, setState) {
        var selectedDate = new Date(state.selectedMonth);
    
        var parameters = {eventType: [], language: [], age: state.filter[1].age > 0 ? state.filter[1].age : -1, 
          startDate: (new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)).getTime() / 1000, 
          endDate: (new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0)).getTime() / 1000}//1661983200, endDate: 1664575199}
        
        if (state.filter[0].allActis) {
          parameters.eventType.push(-1);
        } else {
          for (let i = 0; i < state.filter[0].actiOpts.length; i++) {
            if (state.filter[0].actiOpts[i].selected) {
              parameters.eventType.push(state.filter[0].actiOpts[i].id);
            }
          }
        }
        if (parameters.eventType.length == 0) {
          parameters.eventType.push(-1);
        }
    
        if (state.filter[2].allLangs) {
          parameters.language.push(-1);
        } else {
          for (let i = 0; i < state.filter[2].langOpts.length; i++) {
            if (state.filter[2].langOpts[i].selected) {
              parameters.language.push(state.filter[2].langOpts[i].id);
            }
          }
        }
        if (parameters.language.length == 0) {
          parameters.language.push(-1);
        }
    
        console.log(parameters);
    
        axios.get("https://www.73743355.xyz:23892/events/calendar", { params: parameters })
        .then(response => response.data)
        .then((data) => {
          console.log(data);
          if (data.events != null) {
            state.events = data.events;
          } else {
            state.events = [];
          }
          setState({...state});
        });
      }
}
export const WebHelper = new WebsiteHelper()