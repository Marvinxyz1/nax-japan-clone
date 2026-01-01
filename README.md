# NAX JAPAN 网站复刻项目

## 项目概述

本项目是对 [NAX JAPAN 官网](https://naxjapan.com/) 的完整复刻，基于 React + TypeScript + Vite + Tailwind CSS 技术栈构建。

## 当前进度

### ✅ 已完成

1. **项目初始化**
   - 创建 Vite + React + TypeScript 项目
   - 配置 Tailwind CSS
   - 配置自定义字体（DIN Condensed, DNP Shuei Gothic, Noto Sans JP）
   - 配置自定义颜色主题

2. **组件开发**
   - ✅ Header - 顶部导航栏（含移动端菜单）
   - ✅ Hero - 首屏大图区域（含视差滚动效果）
   - ✅ Message - 品牌理念文字区
   - ✅ Solutions - 服务解决方案（粘性滚动效果）
   - ✅ WeLove - 特色服务展示（含视频背景）
   - ✅ Challenge - 挑战精神区块
   - ✅ News - 新闻列表
   - ✅ Recruitment - 招聘信息卡片
   - ✅ Contact - 联系我们CTA
   - ✅ Footer - 页脚导航

3. **动画效果**
   - ✅ GSAP ScrollTrigger 视差滚动
   - ✅ 粘性区块滚动效果
   - ✅ 悬停动画效果

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.3.1 | UI框架 |
| TypeScript | 5.6.2 | 类型安全 |
| Vite | 5.4.21 | 构建工具 |
| Tailwind CSS | 3.4.17 | 样式框架 |
| GSAP | 3.12.5 | 动画库 |
| Lucide React | 0.468.0 | 图标库 |

---

## 项目结构

```
nax-japan-clone/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── index.tsx        # 顶部导航
│   │   │   └── MobileMenu.tsx   # 移动端全屏菜单
│   │   ├── Hero/
│   │   │   └── index.tsx        # 首屏大图
│   │   ├── Message/
│   │   │   └── index.tsx        # 品牌理念
│   │   ├── Solutions/
│   │   │   └── index.tsx        # 服务方案
│   │   ├── WeLove/
│   │   │   └── index.tsx        # 特色服务
│   │   ├── Challenge/
│   │   │   └── index.tsx        # 挑战精神
│   │   ├── News/
│   │   │   └── index.tsx        # 新闻列表
│   │   ├── Recruitment/
│   │   │   └── index.tsx        # 招聘信息
│   │   ├── Contact/
│   │   │   └── index.tsx        # 联系CTA
│   │   └── Footer/
│   │       └── index.tsx        # 页脚
│   ├── styles/
│   │   └── globals.css          # 全局样式
│   ├── App.tsx                  # 主应用入口
│   └── main.tsx                 # React 入口
├── tailwind.config.ts           # Tailwind 配置
├── vite.config.ts               # Vite 配置
├── tsconfig.json                # TypeScript 配置
└── package.json                 # 依赖配置
```

---

## 自定义配置

### 颜色主题

```typescript
colors: {
  'nax-orange': '#ff8201',  // 主题橙色
  'nax-dark': '#121212',    // 深色背景
  'nax-gray': '#231f20',    // 灰色文字
}
```

### 字体配置

```typescript
fontFamily: {
  'noto': ['"Noto Sans JP"', 'sans-serif'],      // 日文正文
  'din': ['din-condensed', 'sans-serif'],         // 英文标题
  'dnp': ['dnp-shuei-gothic-kin-std', 'sans-serif'], // 日文标题
}
```

---

## 运行项目

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

开发服务器地址: http://localhost:5173/

---

## 原网站分析

详细的原网站分析报告请参考：[NAX_JAPAN_网页分析报告.md](../NAX_JAPAN_网页分析报告.md)

### 原网站技术栈
- WordPress 6.5.4
- GSAP 3.11.2
- jQuery 3.7.1
- Adobe Typekit 字体

### CSS命名规范
- `l-` : Layout 布局类
- `p-` : Page 页面特有类
- `c-` : Component 组件类
- `u-` : Utility 工具类
- `js-` : JavaScript 钩子类
- `is-` : 状态类

---

## 页面区块对照

| 序号 | 区块名称 | 组件文件 | 描述 |
|------|----------|----------|------|
| 1 | Header | Header/index.tsx | 固定顶部导航 |
| 2 | Hero | Hero/index.tsx | 全屏背景+橙色夹克人物 |
| 3 | Message | Message/index.tsx | "人間力で超えていく" 理念 |
| 4 | Solutions | Solutions/index.tsx | 服务方案图标网格 |
| 5 | WeLove | WeLove/index.tsx | 三个特色服务+视频 |
| 6 | Challenge | Challenge/index.tsx | 挑战精神引用 |
| 7 | News | News/index.tsx | 新闻文章列表 |
| 8 | Recruitment | Recruitment/index.tsx | 招聘信息卡片 |
| 9 | Contact | Contact/index.tsx | 联系我们CTA |
| 10 | Footer | Footer/index.tsx | 公司信息+导航链接 |

---

## 待优化项目

- [ ] 添加页面路由（React Router）
- [ ] 优化移动端响应式布局
- [ ] 添加页面加载动画
- [ ] 本地化图片资源（目前使用原站CDN）
- [ ] 添加更多交互动画细节
- [ ] SEO优化（meta标签等）

---

## 开发笔记

### 视差滚动实现

使用 GSAP ScrollTrigger 实现首屏夹克图片的视差滚动效果：

```typescript
gsap.to('.parallax-jacket', {
  x: -200,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});
```

### 粘性区块效果

通过 CSS `position: sticky` 和 `z-index` 层叠实现区块滚动覆盖效果：

```css
.sticky-section {
  position: sticky;
  top: 0;
}
```

---

## 许可证

本项目仅供学习研究使用，原网站版权归 NAX JAPAN 株式会社所有。

---

*文档更新时间: 2026-01-01*
