import Vue from 'vue'
import Vuex from 'vuex'
const Joi = require('joi');

Vue.use(Vuex)

const vaccineSchema = Joi.object().keys({
  name: Joi.string().trim().min(1).max(45).required(),
  country: Joi.string().trim().min(1).max(45).required(),
  doses: Joi.number().integer().min(1).max(20).required(),
})

export default new Vuex.Store({
  state: {
    vaccines: []
  },

  mutations: {

    set_vaccines: function (state, vaccines) {
      state.vaccines = vaccines;
    },

    add_vaccine: function (state, vaccine) {
      state.vaccines.push(vaccine);
    },

    remove_vaccine: function (state, id) {
      for (let v = 0; v < state.vaccines.length; v++) {
        if (state.vaccines[v].id === id) {
          state.vaccines.splice(v, 1);
          break;
        }
      }
    },

    update_vaccine: function (state, payload) {
      for (let v = 0; v < state.vaccines.length; v++) {
        if (state.vaccines[v].id === parseInt(payload.id)) {
          state.vaccines[v].name = payload.vaccine.name;
          state.vaccines[v].country = payload.vaccine.country;
          state.vaccines[v].doses = payload.vaccine.doses;
          break;
        }
      }
    }
  },

  actions: {

    load_vaccines: function ({ commit }) {
      fetch('http://localhost/api/vaccines', { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('set_vaccines', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    delete_vaccine: function({ commit }, id) {
      fetch(`http://localhost/api/vaccines/${id}`, { method: 'delete' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('remove_vaccine', jsonData.id)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    new_vaccine: function({ commit }, vaccine) {

      let {error} = vaccineSchema.validate(JSON.parse(vaccine));
      if(error){
        alert("Bad input: \n" + error.details[0].message);
        return;
      }

      fetch('http://localhost/api/vaccines', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: vaccine
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_vaccine', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    change_vaccine: function({ commit }, payload) {

      let {error} = vaccineSchema.validate(JSON.parse(payload.vaccine));
      if(error){
        alert("Bad input: \n" + error.details[0].message);
        return;
      }

      fetch(`http://localhost/api/vaccines/${payload.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload.vaccine
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('update_vaccine', {id: payload.id, vaccine: jsonData});
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    }
  }
})