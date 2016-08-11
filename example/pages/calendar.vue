<template>
  <div class="page-calendar">
    <div class="page-title">Calendar</div>
    <mt-calendar></mt-calendar>
    <mt-calendar
      :decorate="decorate"
      :view="'month'"
      :selected.sync="selected">
    </mt-calendar>
    <mt-calendar
      :decorate="decorate"
      :view="'week'"
      :selected.sync="selected">
    </mt-calendar>
    <mt-calendar
      :start-monday="true"
      :decorate="decorate"
      :view="'week'"
      :selected.sync="selected">
    </mt-calendar>
  </div>
</template>

<script>
export default {
  name: 'page-calendar',
  data() {
    return {
      selected: new Date(),
      decorate: {
        '2016-08-09': true,
        '2016-08-10': true,
        '2016-08-11': true
      }
    };
  }
};
</script>
