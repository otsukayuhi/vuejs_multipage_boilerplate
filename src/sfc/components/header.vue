<template lang="pug">
//- global settings
include ../../pug/global/global

header.c-header
  h1.c-header-Ttl Development Environment

  button.c-header-Btn(
    @click="toggle",
    :class="{'-close': isActive}",
    type="button",
    aria-label="グローバルナビゲーション"
    )
    span.c-header-Btn_Line

  nav.c-header-Nav(
    :class="{'-show': isActive}",
  )
    ul
      li: a(href=CONF.top.relativePath) Go to Top Page
      li: a(href=CONF.sfc.relativePath) Go to SFC Page
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';


@Component({})
export default class cHeader extends Vue {
  private isActive: boolean = false;

  toggle(): void {
    this.isActive = !this.isActive;
  };
}
</script>

<style lang="scss" scoped>
.c-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: #fff;
}
.c-header-Ttl {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 2rem;
}
.c-header-Btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  margin: auto;
  width: 6rem;
  height: 6rem;
  border: none;
  outline: none;
  background-color: transparent;
  transition: all $main-ease-time $main-ease;
}
.c-header-Btn_Line {
  position: relative;
  width: 2rem;
  height: 0.2rem;
  background-color: #000;
  transition: all $main-ease-time $main-ease;
  @include breakpoint-up(lg) {
    width: 3rem;
  }

  .-close & {
    background-color: transparent;
  }
  &::before {
    @include pseudo(100%,0.2rem,left,0,0,0);
    background-color: #000;
    transform: translateY(-0.7rem);
    transition: all $main-ease-time $main-ease;
    @include breakpoint-up(lg) {
      transform: translateY(-1.1rem);
    }

    .-close & {
      transform: translateY(0) rotate(45deg);
    }
  }
  &::after {
    @include pseudo(100%,0.2rem,left,0,0,0);
    background-color: #000;
    transform: translateY(0.7rem);
    transition: all $main-ease-time $main-ease;
    @include breakpoint-up(lg) {
      transform: translateY(1.1rem);
    }

    .-close & {
      transform: translateY(0) rotate(-45deg);
    }
  }
}

.c-header-Nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 6rem;
  left: 0;
  width: 100vw;
  height: calc(100vh - 6rem);
  background: rgba(0,0,0,0.9);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: all $main-ease $main-ease-time;

  &.-show {
    opacity: 1;
    visibility: visible;
  }

  a {
    display: block;
    padding: 10px 0;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }
}
</style>