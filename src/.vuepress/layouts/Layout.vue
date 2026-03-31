<script lang="ts">
import { defineComponent, h, computed, resolveComponent } from 'vue';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import CommonWrapper from '@theme-hope/components/CommonWrapper';
import FadeSlideY from '@theme-hope/components/transitions/FadeSlideY';
import HomePage from '@theme-hope/components/HomePage';
import NormalPage from '@theme-hope/components/NormalPage';
import SkipLink from '@theme-hope/components/SkipLink';
import { useMobile } from '@theme-hope/composables/index';
import { useThemeData, useThemeLocaleData } from '@theme-hope/composables/index';
import WechatDonate from '../components/WechatDonate.vue';

export default defineComponent({
  name: 'Layout',
  setup() {
    const themeData = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const isMobile = useMobile();

    const sidebarDisplay = computed(
      () =>
        themeLocale.value.blog?.sidebarDisplay ||
        themeData.value.blog?.sidebarDisplay ||
        'mobile'
    );

    return () => [
      h(SkipLink),
      h(CommonWrapper, {}, {
        default: () =>
          frontmatter.value.home
            ? h(HomePage)
            : h(FadeSlideY, () =>
                h(NormalPage, { key: page.value.path }, {
                  bottom: () => h(WechatDonate),
                })
              ),
        ...(sidebarDisplay.value !== 'none'
          ? { navScreenBottom: () => h(resolveComponent('BloggerInfo')) }
          : {}),
        ...(!isMobile.value && sidebarDisplay.value === 'always'
          ? { sidebar: () => h(resolveComponent('BloggerInfo')) }
          : {}),
      }),
    ];
  },
});
</script>
