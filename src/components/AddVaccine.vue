<template>
  <div>
    <b-container fluid>
      <b-form>
        <b-row class="mt-2">
          <b-col sm="2" offset="2">
            <b-input v-model="newName" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Naziv vakcine"></b-input>
          </b-col>
          <br>
          <b-col sm="2" offset="0">
            <b-input v-model="newCountry" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Država porekla"></b-input>
          </b-col>
          <br><br>
          <b-col sm="2" offset="0">
            <b-input v-model="newDoses" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Broj doza"></b-input>
          </b-col>
          <br>
          <b-col sm="2" offset="1">
            <b-button variant="primary" size="mb" @click="addNew">Dodaj vakcinu</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
const Joi = require('joi');

const vaccineSchema = Joi.object().keys({
  name: Joi.string().trim().min(1).max(45).required(),
  country: Joi.string().trim().min(1).max(45).required(),
  doses: Joi.number().min(1).max(20).required(),
})

export default {
  name: "AddVaccine",
  props: {
    name: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    doses: {
      type: Number,
      default: ''
    }
  },
  data() {
    return {
      newName: '',
      newCountry: '',
      newDoses: ''
    }
  },
  mounted: function () {
    this.newName = this.name;
    this.newCountry = this.country;
    this.newDoses = this.doses;
  },
  methods: {
    ...mapActions(['new_vaccine']),

    addNew: function() {

      let {error} = vaccineSchema.validate({name: this.newName, country: this.newCountry, doses: this.newDoses});

      if(error) {
        alert(error.details[0].message);
      }else {
        alert("Uspešno ste dodali novu vakcinu!")
      const newVaccine = JSON.stringify({name: this.newName, country: this.newCountry, doses: this.newDoses});

      this.new_vaccine(newVaccine);

      this.newName = '';
      this.newCountry = '';
      this.newDoses = '';
    }
    }
  }
}
</script>


<style scoped>

</style>