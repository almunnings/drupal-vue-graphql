<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { ParagraphTable } from '@/services/drupal'
import ParagraphTableItem from './ParagraphTableItem.vue'

const props = defineProps({
  paragraph: {
    type: Object as PropType<ParagraphTable>,
    required: true
  }
})

const caption = computed(() => props.paragraph.table.caption)

const rows = computed(() => Array.from(props.paragraph.table.rows || []))

const thead = computed(() => rows.value.slice(0, 1)[0] || undefined)

const tbody = computed(() => rows.value.slice(1, rows.value.length))
</script>

<template>
  <h3 v-if="paragraph.title" class="mb-0 h5">
    {{ paragraph.title }}
  </h3>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <caption v-if="caption">
        <span>{{ caption }}</span>
      </caption>

      <thead v-if="thead">
        <ParagraphTableItem :row="thead" :format="paragraph.table.format" />
      </thead>

      <tbody>
        <ParagraphTableItem
          v-for="(row, delta) in tbody"
          :key="delta"
          :row="row"
          :format="paragraph.table.format"
        />
      </tbody>
    </table>
  </div>
</template>
