<template>
  <v-card
    width="400"
  >
    <v-card-text>
      <v-row
        justify="center"
      >
  
        <base-subheading
          class="text-h6 primary--text mt-4"
          align="center"
          :title="heading"
        />

        <base-body
          v-if="body"
          :text="body"
          align="center"
        />


        <v-btn
          depressed
          outlined
          small
          color="primary"
          class="text-none"
          :to="to"
        >
          Read More
          <v-icon
            right
            v-text="'mdi-chevron-right'"
          />
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Feature',

    props: {
      color: {
        type: String,
        default: 'white',
      },
      icon: {
        type: String,
        required: true,
      },
      heading: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        default: '',
      },
      rounded: {
        type: Boolean,
        default: false,
      },
      tile: {
        type: Boolean,
        default: false,
      },
      avatarColor: {
        type: String,
        default: 'primary',
      },
      outlined: Boolean,
      outlineColor: String,
      to: {
        type: Object,
        default: () => ({}),
      },
    },
  }
</script>
