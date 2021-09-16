<template>
  <div class="home">
    <VaccineList/>
    <br>
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
  name: 'vaccines',
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