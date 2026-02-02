<script setup>
import ThemeLayout from '@sugarat/theme'

const footerHTML = `
<div style="text-align: center; padding: 15px 0; font-size: 14px; color: var(--vp-c-text-2);">
  <div>
    This blog has running : <span id="blogRunTime">0 d 0 h 0 m 0 s</span>
    <span style="animation: my-face 5s infinite ease-in-out; display: inline-block; margin: 0 5px;">ღゝ◡╹)ノ♡</span>
  </div>
  <div>Copyright © <span id="year">${new Date().getFullYear()}</span> 勋染 Powered by .NET 8.0 on Kubernetes</div>
  <style>
    @keyframes my-face {
      2%, 25%, 80% { transform: translate(0, 1.5px) rotate(1.5deg); }
      4%, 68%, 98% { transform: translate(0, -1.5px) rotate(-.5deg); }
      38%, 6% { transform: translate(0, 1.5px) rotate(-1.5deg); }
      8%, 86% { transform: translate(0, -1.5px) rotate(-1.5deg); }
      10%, 72% { transform: translate(0, 2.5px) rotate(1.5deg); }
      12%, 64%, 78%, 96% { transform: translate(0, -0.5px) rotate(1.5deg); }
      14%, 54% { transform: translate(0, -1.5px) rotate(1.5deg); }
      16% { transform: translate(0, -0.5px) rotate(-1.5deg); }
      18%, 22% { transform: translate(0, 0.5px) rotate(-1.5deg); }
      20%, 36%, 46% { transform: translate(0, -1.5px) rotate(2.5deg); }
      26%, 50% { transform: translate(0, 0.5px) rotate(.5deg); }
      28% { transform: translate(0, 0.5px) rotate(1.5deg); }
      30%, 40%, 62%, 76%, 88% { transform: translate(0, -0.5px) rotate(2.5deg); }
      32%, 34%, 66% { transform: translate(0, 1.5px) rotate(-.5deg); }
      42% { transform: translate(0, 2.5px) rotate(-1.5deg); }
      44%, 70% { transform: translate(0, 1.5px) rotate(.5deg); }
      48%, 74%, 82% { transform: translate(0, -0.5px) rotate(.5deg); }
      52%, 56%, 60% { transform: translate(0, 2.5px) rotate(2.5deg); }
      58% { transform: translate(0, 0.5px) rotate(2.5deg); }
      84% { transform: translate(0, 1.5px) rotate(2.5deg); }
      90% { transform: translate(0, 2.5px) rotate(-.5deg); }
      92% { transform: translate(0, 0.5px) rotate(-.5deg); }
      94% { transform: translate(0, 2.5px) rotate(.5deg); }
      0%, 100% { transform: translate(0, 0) rotate(0); }
    }
  </style>
</div>
`
</script>

<template>
  <ThemeLayout>
    <template #footer>
      <div v-html="footerHTML" />
    </template>
  </ThemeLayout>
</template>
