<!-- Button.vue -->
<template>
    <router-link
      :to="url"
      class="button-link"
      @click="handleClick"
      :class="customClass"
      v-bind="attributes"
    >
      {{ label }}
    </router-link>
  </template>
  
  <script>
  export default {
    name: "button-link",
    props: {
      label: {
        type: String,
        required: true,
      },
      url: {
        type: [String, Object],
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
      attributes: {
        type: Object,
        default: () => ({}),
      },
    },
    methods: {
      handleClick() {
        this.$emit("click");
      },
    },
  };
  </script>
  
  <style scoped>
  .button-link {
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .button-link:hover {
    background-color: #2980b9;
  }
  
  .button-link:active {
    background-color: #1f5a8c;
  }
  </style>
  