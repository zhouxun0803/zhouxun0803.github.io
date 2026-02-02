<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useHomeFooterConfig } from '../composables/config/blog'
import packageJSON from '../../package.json'
import { copyrightSVG, icpSVG, themeSVG } from '../constants/svg'
import { vOuterHtml } from '../directives'

const footerConfig = useHomeFooterConfig()

// 响应式数据
const blogRunTime = ref('0 d 0 h 0 m 0 s')
const currentYear = ref('2026')

// 计算运行时间
function updateRunTime() {
  const targetDate = new Date('2023-12-29T00:00:00')
  const currentDate = new Date()
  const timeDiff = currentDate.getTime() - targetDate.getTime()

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

  blogRunTime.value = `${days} d ${hours} h ${minutes} m ${seconds} s`
}

// 更新年份
function updateYear() {
  currentYear.value = String(new Date().getFullYear())
}

onMounted(() => {
  updateRunTime()
  updateYear()
  // 每秒更新运行时间
  setInterval(updateRunTime, 1000)
})

const renderData = computed(() => {
  const footerData = footerConfig.value
  // 总是返回至少一个 footer 对象
  const flatData = footerData ? [footerData].flat() : [{}]
  return flatData.flat().map((footer, idx) => {
    const { icpRecord, securityRecord, copyright, version, message, bottomMessage, list } = footer
    const data: ({
      name: string
      link?: string
      icon?: string | boolean
    } | string) [] = []
    // message - 使用固定内容
    const messageData = [{
      runTime: blogRunTime.value,
      year: currentYear.value
    }]
    const bottomMessageData = [bottomMessage || []].flat()

    // version
    const isLast = idx === flatData.length - 1
    if ((version !== false && isLast) || version) {
      const versionItem = typeof version === 'object' ? version : {}

      data.push({
        name: versionItem?.name || `@sugarat/theme@${packageJSON.version}`,
        link: versionItem?.link || 'https://theme.sugarat.top/',
        icon: versionItem?.icon || themeSVG
      })
    }
    // copyright
    if (typeof copyright === 'string') {
      data.push({
        name: copyright,
        icon: copyrightSVG
      })
    }
    if (copyright instanceof Object) {
      data.push({
        icon: copyrightSVG,
        name: copyright.message,
        ...copyright
      })
    }
    // 备案信息
    if (icpRecord) {
      data.push({
        icon: icpSVG,
        ...icpRecord
      })
    }
    // 网备信息
    if (securityRecord) {
      data.push({
        icon: 'security',
        ...securityRecord
      })
    }
    if (list) {
      const listData = [list || []].flat()
      data.push(...listData.map((v) => {
        if (typeof v === 'string') {
          return v
        }
        return {
          name: v.text,
          icon: v.icon,
          link: v.link
        }
      }))
    }
    return {
      data,
      messageData,
      bottomMessageData
    }
  })
})
</script>

<template>
  <footer class="blog-footer">
    <!-- eslint-disable vue/require-v-for-key -->
    <!-- see https://cn.vuejs.org/guide/essentials/list.html#v-for-on-template -->
    <template v-for="({ data, messageData, bottomMessageData }) in renderData">
      <!-- 在内置footer上方渲染 -->
      <div v-for="msg in messageData" class="footer-message">
        <div>
          This blog has running : <span>{{ msg.runTime }}</span>
          <span class="animated-face">ღゝ◡╹)ノ♡</span>
        </div>
        <div>Copyright © <span>{{ msg.year }}</span> 勋染 Powered by .NET 8.0 on Kubernetes</div>
      </div>
      <!-- 内置的列表 -->
      <p class="footer-item-list">
        <template v-for="item in data">
          <span v-if="typeof item !== 'string'" class="footer-item">
            <i v-if="item.icon === 'security'">
              <img src="./../styles/gongan.png" alt="公网安备">
            </i>
            <i v-else-if="item.icon" v-html="item.icon" />
            <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">
              {{ item.name }}
            </a>
            <span v-else>{{ item.name }}</span>
          </span>
          <!-- TODO: 理论上存在问题，待优化 -->
          <span v-else v-outer-html="item" />
        </template>
      </p>
      <!-- 在内置的footer下方渲染 -->
      <p v-for="message in bottomMessageData" v-html="message" />
    </template>
  </footer>
</template>

<style scoped>
footer.blog-footer {
  text-align: center;
  position: relative;
  border-top: 1px solid var(--vp-c-gutter);
  padding: 20px 12px;
  background-color: var(--vp-c-bg);
}
footer.blog-footer p {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.footer-message {
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 24px;
}

.animated-face {
  animation: my-face 5s infinite ease-in-out;
  display: inline-block;
  margin: 0 5px;
}

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

.footer-item-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  display: none;
}

@media (max-width: 719px) {
  .footer-item-list {
    flex-direction: column;
    align-items: center;
  }
}
.footer-item {
  display: flex;
  align-items: center;
  margin: 0 8px;
}
.footer-item i {
  margin-right: 4px;
  font-style: normal;
}
.footer-item i :deep(svg) {
  fill: var(--vp-c-text-2);
  width: 16px;
  height: 16px;
}
.footer-item i :deep(img) {
  width: 16px;
  height: 16px;
}
.footer-item a:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-decoration-color: var(--vp-c-brand-1);
  text-decoration-style: dashed;
}
</style>
