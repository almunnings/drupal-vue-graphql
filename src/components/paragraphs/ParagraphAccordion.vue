<script setup lang="ts">
import { Collapse } from 'bootstrap'
import { computed, ref, onMounted } from 'vue'
import type { PropType } from 'vue'
import type { ParagraphAccordion } from '@/services/drupal'
import { getParagraphComponent } from '.'

const props = defineProps({
  paragraph: {
    type: Object as PropType<ParagraphAccordion>,
    required: true
  }
})

const collapse = ref<HTMLElement | null>(null)

onMounted(() => {
  if (collapse.value) {
    new Collapse(collapse.value, { toggle: false })
  }
})
</script>

<template>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          aria-expanded="false"
          :aria-controls="paragraph.id"
          data-bs-toggle="collapse"
          :data-bs-target="`#${paragraph.id}`"
        >
          {{ props.paragraph.accordionTitle }}
        </button>
      </h2>
      <div
        :id="paragraph.id"
        ref="collapse"
        class="accordion-collapse collapse"
      >
        <div class="accordion-body d-grid gap-3">
          <component
            v-for="child in paragraph.items"
            :is="getParagraphComponent(child)"
            :paragraph="child"
            :key="child.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>
