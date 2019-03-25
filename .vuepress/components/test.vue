<script>
const tailwind = require("./../../tailwind.config");

export default {
  data() {
    return {
      config: tailwind
    };
  }
};
</script>

<template>
<div>
 <h2>A Test I say!</h2>
 {{ config }}
</div>
</template>


