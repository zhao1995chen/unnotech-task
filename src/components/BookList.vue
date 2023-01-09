<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import BookCard from './BookCard.vue'
import TIcon from './common/TIcon.vue'
import CreateBook from './dialogs/CreateBook.vue'

export default {
  components: {
    BookCard,
    TIcon,
    CreateBook
  },
  data() {
    return {
      showCreate: false,
      overflow: true
    }
  },
  computed: {
    ...mapFields('route/books', {
      list: 'list'
    })
  },
  mounted() {
    this.GET_BOOK_LIST()
  },
  methods:{
    ...mapActions({
      GET_BOOK_LIST: 'api/GET_BOOK_LIST'
    }),
    toggleShowCreate() {
      this.showCreate = !this.showCreate
      this.overflow = !this.overflow
    }
  }
}
</script>

<template>
<div class="w-full h-15 md:h-20 lg:h-25 bg-white absolute sticky top-0 shadow-lg shadow-gray-200 flex justify-center items-center text-2xl md:text-3xl relative">
  書本列表
  <TIcon class="text-blue-500 hover:text-blue-800 absolute right-5 cursor-pointer" name="add" @click="toggleShowCreate()" />
</div>
<div :class="['grid grid-cols-2 gap-8 px-6 py-4 md:p-6 bg-gray-100', showCreate ? 'hidden' : 'block']">
  <BookCard v-for="book in list" :key="book.id" :book="book" @getList="GET_BOOK_LIST" />
</div>
<CreateBook :class="['transition duration-500', showCreate ? 'visible opacity-100': 'invisible opacity-0']" :show-create="showCreate" @update="toggleShowCreate()" />
</template>

<style lang="scss" scoped></style>
