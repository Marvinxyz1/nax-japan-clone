# 任务计划：将 SBL株式会社 信息整合到当前网站

## 目标

将 <https://www.top-sbl.jp/> 网站的公司信息替换到当前项目中，保持设计风格统一。

---

## 用户确认的方案

- Logo：使用 SBL 官方 Logo
- 颜色主题：保持现有橙色调
- 服务描述：保持不变
- 外部链接：保持不变

---

## 需要替换的信息

| 项目 | 原始 (NAX JAPAN) | 目标 (SBL) |
| ---- | ---------------- | ---------- |
| 公司名称 | NAX JAPAN株式会社 | SBL株式会社 |
| 电话 | 03-3541-3480 | 0476-37-8508 |
| 传真 | 无 | 0476-37-8535 |
| 邮编 | 〒104-0061 | 〒270-1369 |
| 地址 | 東京都中央区銀座5-13-3 いちかわビル4階 | 千葉県印西市鹿黒南4丁目2グッドマンビジネスパーク イーストゲート A区画 4F |

### Slogan

- 主标语：「多様な物流ニーズを、シンプルに」
- 副标语：「信頼を運び、価値を届ける」

---

## 任务清单

- [x] 修改 Header 组件 - 替换 Logo
- [x] 修改 Footer 组件 - 公司名/地址/电话/传真/Logo/版权
- [x] 修改 Hero 组件 - 添加 Slogan（可选）
- [x] 更新 index.html 页面标题
- [x] 全局搜索替换 NAX 相关引用
- [x] 测试验证页面效果

---

## 状态：✅ 已完成

---

## Review

### 修改的文件

1. **src/components/Header/index.tsx**
   - Logo URL 替换为 SBL 官方 Logo

2. **src/components/Header/MobileMenu.tsx**
   - 版权信息更新为 SBL

3. **src/components/Footer/index.tsx**
   - Logo 替换
   - 公司名称：SBL株式会社
   - 地址：〒270-1369 千葉県印西市鹿黒南4丁目2グッドマンビジネスパーク イーストゲート A区画 4F
   - 电话：0476-37-8508
   - 传真：0476-37-8535（新增）
   - 版权：© 2025 SBL CO.,LTD All Rights Reserved.

4. **src/components/Hero/index.tsx**
   - alt 文字更新为 SBL株式会社

5. **src/components/Message/index.tsx**
   - 公司描述文字替换为 SBL 相关

6. **src/components/Solutions/index.tsx**
   - 公司介绍替换为 SBL 相关

7. **src/pages/SolutionsPage.tsx**
   - 公司描述替换为 SBL 相关

8. **index.html**
   - 页面标题：SBL株式会社 | 倉庫・3PL物流サービス
   - meta description 更新

### 保留未修改

- CSS 类名（nax-orange, nax-dark 等样式变量）
- 图片资源 URL（保持 NAX 的图片）
- 外部链接（YouTube、招聘网站）

---

# 待解决：Solutions Section 手机端内容截断问题

## 问题描述
Solutions section 在手机端显示时，文字内容没有完整显示。滚动到"海外においてはアメリカ、香港、中国、タイ、ベトナムに"这一行后，继续往下滑就直接跳到下一个页面（WE LOVE section），导致：
- 第三段文字没有显示完整
- VIEW MORE 按钮没有显示

**桌面端表现正常**，所有内容完整可见。

## 当前代码状态
```tsx
// Solutions/index.tsx
<section className="sticky-section relative md:sticky z-auto md:z-[4] solutions-bg pt-[90px] pb-[100px] md:pb-[500px] md:top-0">

// WeLove/index.tsx
<section className="bg-white relative z-auto md:z-[5] py-[100px] md:py-[180px]">
```

## 已尝试的解决方案（均失败）

| 方案 | 修改内容 | 结果 |
|------|----------|------|
| 增加 padding-bottom | `pb-[800px]`, `pb-[1400px]` | 不工作 |
| 手机端禁用 sticky | `relative md:sticky` | 部分改善但仍被覆盖 |
| 调整 z-index | `z-auto md:z-[4]` | 不工作 |

## 根本原因分析
1. sticky 定位设计用于桌面端的视差滚动效果
2. 手机端内容垂直堆叠，高度超过视口
3. 后续 section 的定位/z-index 覆盖了前面的内容
4. 可能有全局 CSS 或其他组件影响布局

## 待尝试的解决方案

- [ ] **方案 A**：完全重构手机端布局，移除所有 sticky 和 z-index
- [ ] **方案 B**：使用 min-height 确保内容区域有足够空间
- [ ] **方案 C**：检查 Message、Challenge 等其他 sticky section
- [ ] **方案 D**：直接访问 naxjapan.com 手机端，分析原版处理方式

## 相关文件
- `/src/components/Solutions/index.tsx`
- `/src/components/WeLove/index.tsx`
- `/src/styles/globals.css`
- 原版参考：`/naxjapan-exports/naxjapan-export-home/components/Component_5.jsx`
