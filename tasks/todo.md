# 导航栏重构任务计划

## 目标
将 cofo.jp 网站顶部导航栏样式应用到 NAX JAPAN 项目，并将分类改为运输行业相关内容。

## 参考结构 (cofo.jp)
- Logo区 (左侧)
- 主导航 (中间)：包含下拉菜单的导航项
- 语言切换 (Global 下拉)
- 图标区 (右侧)：账户、搜索、购物车

## NAX JAPAN 导航分类设计
将椅子相关分类改为运输行业：
1. **事業紹介** (Services) - 带下拉
   - 国際輸送 (International Shipping)
   - 国内配送 (Domestic Delivery)
   - 倉庫管理 (Warehouse)
2. **ソリューション** (Solutions) - 带下拉
   - 企業向け (For Business)
   - 個人向け (For Personal)
3. **会社概要** (About)
4. **ニュース** (News)
5. **採用情報** (Careers)
6. **お問い合わせ** (Contact)

## 任务清单

- [x] 阅读理解 cofo.jp 导航栏组件结构
- [x] 创建任务计划文件
- [x] 重构 Header 组件应用新样式
  - [x] 透明/白色背景切换、固定定位
  - [x] Logo 左侧布局 (滚动时反色)
  - [x] 中间导航带下拉菜单
  - [x] 右侧语言切换和图标
- [x] 实现下拉菜单悬停效果 (CSS group-hover)
- [x] 实现滚动透明效果
- [x] 更新 MobileMenu 组件
- [x] 测试验证导航栏功能 (构建通过)

---

## Review

### 变更摘要
1. **Header 组件** (`src/components/Header/index.tsx`)
   - 完全重构，应用 cofo.jp 样式
   - 添加滚动监听：顶部透明，滚动后白色背景
   - Logo 在透明状态时使用 CSS filter 反色
   - 导航分类改为运输行业相关
   - 下拉菜单使用 CSS `group-hover` 实现
   - 右侧添加语言切换、搜索、联系图标

2. **MobileMenu 组件** (`src/components/Header/MobileMenu.tsx`)
   - 重新设计为白色背景简洁风格
   - 添加可展开/收起的子菜单
   - 底部添加语言切换和联系按钮
   - 修复所有按钮的 `type` 和 `aria-label` 属性

### 技术要点
- 使用 `useEffect` 监听 `scroll` 事件
- CSS `transition-all duration-300` 实现平滑过渡
- Tailwind `group` + `group-hover` 实现纯 CSS 下拉菜单
- `brightness-0 invert` filter 实现 Logo 反色效果
