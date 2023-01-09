<script>
import { mapActions, mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import TIcon from './common/TIcon.vue'

export default {
  components: {
    TIcon
  },
  data() {
    const { id } = this.$route.params
    return {
      id,
      readonly: true,
    }
  },
  mounted() {
    this.GET_BOOK_DETAIL({ id: this.id })
  },
  computed: {
    ...mapFields('route/books', {
      editForm: 'editForm',
      book: 'book',
    }),
  },
  watch: {
    readonly(newVal) {
      if (!newVal) this.setEditForm()
    }
  },
  methods: {
    ...mapActions({
      GET_BOOK_DETAIL: 'api/GET_BOOK_DETAIL',
      EDIT_BOOK_DETAIL: 'api/EDIT_BOOK_DETAIL',
      DELETE_BOOK: 'api/DELETE_BOOK'
    }),
    ...mapMutations('route/books', {
      setEditForm: 'setEditForm'
    }),
    edit() {
      if (this.checkChange()) {
        this.EDIT_BOOK_DETAIL(this.editForm).then(
          () => {
            alert('修改成功')
          }
        ).catch(e => {
          alert('修改失敗')
        })
        .finally(() => {
          this.GET_BOOK_DETAIL({ id: this.id })
          this.readonly = true
        })
      }
    },
    checkChange() {
      const { title, author, description } = this.book
      const { title: newTitle, author: newAuthor, description: newDescription } = this.editForm
      
      if (title === newTitle && author === newAuthor && description === newDescription) {
        alert('資料並未修改')
        return false
      }
      if (this.editForm.title === '') {
        alert('請輸入名稱')
        return false
      }
      if (this.editForm.author === '') {
        alert('請輸入作者')
        return false
      }
      return true
    },
    async deleteBook() {
      if (await window.confirm(`確認刪除${this.book.title || ''}?`)) {
        this.DELETE_BOOK(this.book).then(() => {
          alert('刪除成功')
        }).catch(e => {
          alert('刪除失敗')
        }).finally(() => {
          this.$router.push({name: 'BookList'})
        })
      }
    },
    backHandler() {
      if (this.readonly) {
        this.$router.push({name: 'BookList'})
      } else {
        this.readonly = true
      }
    }
  }
}
</script>

<template>
  <div class="w-screen h-screen bg-gray-100 relative">
    <div class="w-full h-15 md:h-20 lg:h-25 bg-white absolute sticky top-0 shadow-lg shadow-gray-200 flex justify-center items-center text-2xl md:text-3xl relative">
      <TIcon :class="['text-gray-800 hover:text-gray-400 absolute left-5 cursor-pointer']" name="arrow" @click="backHandler" />
      <h1 class="w-3/5 truncate text-center">{{ book.title }}</h1>
      <TIcon v-if="readonly" :class="['text-blue-500 hover:text-blue-800 absolute right-15 md:right-20 cursor-pointer', readonly ? 'visible opacity-100' : 'invisible opacity-0']" name="edit" @click="readonly = false" />
      <TIcon class="text-gray-400 hover:text-gray-700 cursor-pointer absolute right-5" name="delete" @click="deleteBook" />
    </div>
    <div v-if="readonly" class="grid grid-flow-row gap-10 md:gap-15 p-5 md:p-20">
      <input type="text" class="title" v-model="book.title" placeholder="名稱" :readonly="readonly" >
      <input type="text" class="author" v-model="book.author" placeholder="作者" :readonly="readonly">
      <textarea type="textarea" class="description" v-model="book.description" placeholder="備註" :readonly="readonly" />
    </div>
    <div v-else class="grid grid-flow-row gap-10 md:gap-15 p-5 md:p-20">
      <input type="text" class="title" v-model="editForm.title" placeholder="名稱" :readonly="readonly" >
      <input type="text" class="author" v-model="editForm.author" placeholder="作者" :readonly="readonly">
      <textarea type="textarea" class="description" v-model="editForm.description" placeholder="備註" :readonly="readonly" />
    </div>
    <div :class="['grid grid-flow-col gap-10 w-full px-1/10 md:px-1/5 py-8 md:py-10 absolute bottom-0 transition duration-500', readonly ? 'invisible opacity-0' : 'visible opacity-100']">
      <button class="bg-gray-200" @click="backHandler">取消</button>
      <button class="bg-blue-400" @click="edit">修改</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  @apply h-12 md:h-20 rounded-full text-white font-bold text-base md:text-2xl;
  @apply outline-none focus:outline-none select-none;
  @apply transition duration-500;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input {
  @apply w-4/5 m-auto bg-white p-5;
  &.title, &.author {
    @apply h-15 md:h-20;
  }
}
textarea {
  @apply w-4/5 m-auto bg-white p-5 overflow-visible;
  &.description {
    @apply h-50;
  }
}
</style>
