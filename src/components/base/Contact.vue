<template>
  <v-card
    flat
    v-bind="$attrs"
  >
    <v-card-text>
      <v-row justify="center">
        <base-avatar
          :icon="icon"
          :tile="tile"
          :color="avatarColor"
          :outlined="outlined"
          :outline-color="outlineColor"
        />
      </v-row>
<!-- 
       <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text> -->

      <div
        class="text-center flex-column"
      >
        <base-subheading
          class="text-h6 primary--text mt-4"
          align="center"
          :title="title"
        />
        <base-body
          v-if="text"
          :text="text"
          align="center"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Contact',

    props: {
      // icon: {
      //   type: String,
      //   required: true,
      // },
      tile: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        default: '',
      },
      avatarColor: {
        type: String,
        default: 'primary',
      },
      outlined: Boolean,
      outlineColor: String,
    },
  }
</script>
