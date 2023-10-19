const codeTheme = require('./src/utils/prism');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Kubernetes to Docker',
    // tagline: 'All the tools you need to build modern transactional notification experience',
    url: 'https://www.k2d.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Portainer', // Usually your GitHub org/user name.
    projectName: 'k2d', // Usually your repo name.
    plugins: [
        'docusaurus-plugin-sass',
        [
            'docusaurus-plugin-plausible',
            {
                domain: 'k2d.tech',
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
                blog: {
                    blogSidebarCount: 0,
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            announcementBar: {
                id: 'github_star_1',
                content:
                    '⭐️ If you like k2d, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/">GitHub</a> ⭐️',
                backgroundColor: '#212121',
                textColor: '#fff',
            },
            metadata: [
                { name: 'robots', content: 'max-image-preview:large' },
                { name: 'twitter:card', content: 'summary_large_image' },
                {
                    name: 'keywords',
                    content: 'k2d',
                },
            ],
            image: '/img/social-preview.png',
            algolia: {
                appId: 'US57DJD9KR',
                apiKey: 'af46586a1dad15cabac33362a3f4413d',
                indexName: 'singular-valkyrie-213f39',
                contextualSearch: true,
                insights: true,
                // externalUrlRegex: '',
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                },
            },
            navbar: {
                title: '',
                hideOnScroll: true,
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.png',
                    srcDark: 'img/logo-dark.png',
                    href: '/',
                    target: '_self',
                    width: 50,
                },
                items: [
                    {
                        type: 'search',
                        position: 'right',
                    },
                    {   to: '/blog',
                        label: 'Blog',
                        position: 'left',
                    },
                    {
                        href: 'https://docs.k2d.io',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/portainer/k2d',
                        position: 'right',
                        className: 'header-github-link',
                    },
                ],
            },
            // footer: {
            //     style: 'dark',
            //     copyright: `Copyright © ${new Date().getFullYear()} K2D.`,
            // },
            footer: {
                links: [
                    {
                        title: 'Quick Links',
                        items: [
                            {
                                label: 'Documentation',
                                to: 'https://docs.k2d.io/',
                            },
                            {
                                label: 'Github Project',
                                to: 'https://github.com/portainer/k2d',
                            },
                            {
                                label: 'Gituhub Organization',
                                to: 'https://github.com/portainer/',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discussions',
                                to: 'https://github.com/portainer/k2d/discussions',
                            },
                        ],
                    },
                    {
                        title: 'Social',
                        items: [
                            {
                                label: 'Twitter',
                                to: 'https://twitter.com/portainerio',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Portainer`,
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 2,
            },
            prism: {
                theme: codeTheme,
                additionalLanguages: ['php', 'ruby', 'java', 'csharp', 'go', 'kotlin', 'python'],
            },
        }),
};
