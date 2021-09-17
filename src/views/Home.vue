<template>
  <div class="home">
    <VaccineList/>
    <b-container>
      <b-row>
        <b-col cm="6">
          <AddVaccine/>
        </b-col>
      </b-row>
      <br><br>
    </b-container>
    <StudentList/>
    <b-container>
      <b-row>
        <b-col cm="6">
          <AddStudent/>
        </b-col>
      </b-row>
      <br><br>
    </b-container>
  </div>
</template>

<script>
import AddVaccine from "@/components/AddVaccine";
import VaccineList from "@/components/VaccineList";
import AddStudent from "@/components/AddStudent";
import StudentList from "@/components/StudentList";

export default {
  name: 'home',
  data() {
    return {
      vaccines: [],
      students: []
    }
  },
  components: {
    AddStudent,
    StudentList,
    VaccineList,
    AddVaccine
  }
}
</script>
