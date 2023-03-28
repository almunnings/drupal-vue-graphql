<template>
  <section class="border border-info rounded my-4 p-4">
    <header class="border rounded p-2">
      <slot name="top"></slot>
    </header>

    <div class="row my-4">
      <div class="col">
        <div class="border rounded p-2 h-100">
          <slot name="first"></slot>
        </div>
      </div>
      <div class="col">
        <div class="border rounded p-2 h-100">
          <slot name="second"></slot>
        </div>
      </div>
    </div>

    <footer class="border rounded p-2">
      <slot name="bottom"></slot>
    </footer>
  </section>
</template>
