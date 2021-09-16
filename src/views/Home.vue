<template>
  <div class="home">
    <VaccineList/>
    <b-container>
      <b-row>
        <b-col cm="6">
          <AddVaccine/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddVaccine from "@/components/AddVaccine";
import VaccineList from "@/components/VaccineList";

export default {
  name: 'home',
  data() {
    return {
      vaccines: []
    }
  },
  components: {
    VaccineList,
    AddVaccine
  }
}
</script>
