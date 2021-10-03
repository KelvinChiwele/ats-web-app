<template>
    <v-card
      max-height="480"
      width="auto"
      tile
    >
        <v-card-text
        class="pt-3 my-6"
        style="position: relative;"
      >

         <base-subheading
           v-text="name"
          class="black--text"
        />

        <base-btn
          rounded
          :color="color"
          class="text-none white--text"
          :to="to"
        >
        <span
          class="font-weight-black text-none"
          v-text="`View Products ...`"
        />
          <v-icon
            right
            v-text="'mdi-chevron-right'"
          />
        </base-btn>


      </v-card-text>
      <v-img
        height="100%"
        :src="src"
      >
      </v-img>
  
    </v-card>
</template>

<script>
  export default {
    name: 'BaseProduct',

    props: {
       color: {
        type: String,
        required: false,
      },
       to: Object,
      name: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
      title: String,
      socialLinks: {
        type: Array,
        default: () => ([]),
        validator: (val) => {
          return val.every(v => ({}).hasOwnProperty.call(v, 'link') && ({}).hasOwnProperty.call(v, 'icon'))
        },
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
