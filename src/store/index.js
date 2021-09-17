import Vue from 'vue'
import Vuex from 'vuex'
const Joi = require('joi');

Vue.use(Vuex)

const vaccineSchema = Joi.object().keys({
  name: Joi.string().trim().min(1).max(45).required(),
  country: Joi.string().trim().min(1).max(45).required(),
  doses: Joi.number().min(1).max(20).required(),
})

const studentSchema = Joi.object().keys({
  name: Joi.string().trim().min(1).max(45).required(),
  lastname: Joi.string().trim().min(1).max(45).required(),
  year: Joi.number().min(2006).max(2021).required(),
  vaccine_id: Joi.number().min(1).max(200).required(),
})

const userSchema = Joi.object().keys({
  username: Joi.string().trim().min(1).max(45).required(),
  email: Joi.string().trim().min(1).max(45).required(),
  password: Joi.string().trim().min(1).max(45).required()
})


export default new Vuex.Store({
  state: {
    vaccines: [],
    students: [],
    users: []
  },

  mutations: {

    set_vaccines: function (state, vaccines) {
      state.vaccines = vaccines;
    },

    set_students: function (state, students) {
      state.students = students;
    },

    set_users: function (state, users) {
      state.users = users;
    },

    add_vaccine: function (state, vaccine) {
      state.vaccines.push(vaccine);
    },

    add_student: function (state, student) {
      state.students.push(student);
    },

    add_user: function (state, user) {
      state.users.push(user);
    },

    remove_vaccine: function (state, id) {
      for (let v = 0; v < state.vaccines.length; v++) {
        if (state.vaccines[v].id === id) {
          state.vaccines.splice(v, 1);
          break;
        }
      }
    },

    remove_student: function (state, id) {
      for (let s = 0; s < state.students.length; s++) {
        if (state.students[s].id === id) {
          state.students.splice(s, 1);
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
    },

    update_student: function (state, payload) {
      for (let s = 0; s < state.students.length; s++) {
        if (state.students[s].id === parseInt(payload.id)) {
          state.students[s].name = payload.students.name;
          state.students[s].lastname = payload.students.lastname;
          state.students[s].year = payload.students.year;
          state.students[s].vaccine_id = payload.students.vaccine_id;
          break;
        }
      }
    }
  },

  actions: {

    load_vaccines: function ({ commit }) {
      fetch('http://localhost:8081/api/vaccines', { method: 'get' }).then((response) => {
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

    load_students: function ({ commit }) {
      fetch('http://localhost:8081/api/students', { method: 'get' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('set_students', jsonData)
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
      fetch(`http://localhost:8081/api/vaccines/${id}`, { method: 'delete' }).then((response) => {
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

    delete_student: function({ commit }, id) {
      fetch(`http://localhost:8081/api/students/${id}`, { method: 'delete' }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('remove_student', jsonData.id)
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

      fetch('http://localhost:8081/api/vaccines/', {
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

    new_student: function({ commit }, student) {

      let {error} = studentSchema.validate(JSON.parse(student));
      if(error){
        alert("Bad input: \n" + error.details[0].message);
        return;
      }

      fetch('http://localhost:8081/api/students/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: student
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_student', jsonData);
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

    new_user: function({ commit }, user) {

      let {error} = userSchema.validate(JSON.parse(user));
      if(error){
        alert("Bad input: \n" + error.details[0].message);
        return;
      }

      fetch('http://localhost:8081/api/users/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: user
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('add_user', jsonData);
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

      fetch(`http://localhost:8081/api/vaccines/${payload.id}/`, {
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
    },

    change_student: function({ commit }, payload) {

      let {error} = studentSchema.validate(JSON.parse(payload.student));
      if(error){
        alert("Bad input: \n" + error.details[0].message);
        return;
      }

      fetch(`http://localhost:8081/api/students/${payload.id}/`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload.student
      }).then((response) => {
        if (!response.ok)
          throw response;

        return response.json();
      }).then((jsonData) => {
        commit('update_student', {id: payload.id, student: jsonData});
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