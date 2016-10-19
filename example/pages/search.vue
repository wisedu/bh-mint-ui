<template>
  <div class="page-search">
    <mt-search :value.sync="value" :result="defaultResult | filterBy value" @cancel="cancel"></mt-search>
  </div>
</template>

<script>
export default {
  name: 'page-search',

  data() {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    };
  },
  methods: {
    cancel() {
      console.log('cancel');
    }
  }
};
</script>

<style lang="css">
  .page-search {
    height: 100%;
  }
</style>
