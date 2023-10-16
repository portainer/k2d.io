const codeTheme = require('./src/utils/prism');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'K2D',
    // tagline: 'All the tools you need to build modern transactional notification experience',
    url: 'https://www.k2d.tech',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'k2d', // Usually your GitHub org/user name.
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
                docs: {
                    sidebarCollapsed: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/k2d/k2d/blob/main/',
                    breadcrumbs: false,
                    routeBasePath: '/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
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
                appId: '1',
                apiKey: '1',
                indexName: '1',
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
                    srcDark: 'img/logo.png',
                    href: '/',
                    target: '_self',
                    width: 50,
                },
                items: [
                    {
                        type: 'search',
                        position: 'right',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'developmentSidebar',
                        position: 'left',
                        label: 'Development',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'contributingSidebar',
                        position: 'left',
                        label: 'Contributing',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'communitySidebar',
                        position: 'left',
                        label: 'Community',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'showcaseSidebar',
                        position: 'left',
                        label: 'Showcase',
                    },
                    { to: '/blog', label: 'Blog', position: 'right' },
                    {
                        href: 'https://github.com/',
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
                        title: 'Docs',
                        items: [
                            {
                                label: 'TEST',
                                to: 'https://google.com/',
                            },
                            {
                                label: 'TEST',
                                to: 'https://google.com/',
                            },
                            {
                                label: 'TEST',
                                to: 'https://google.com/',
                            },
                        ],
                    },
                    {
                        title: 'DocSearch',
                        items: [
                            {
                                label: 'Apply',
                                to: 'https://google.com/',
                            },
                            {
                                label: 'Issues',
                                to: 'https://google.com/',
                            },
                            {
                                label: 'Privacy',
                                to: 'https://google.com/',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Forum',
                                to: 'https://google.com/',
                            },
                            {
                                label: 'Discord',
                                to: 'https://google.com/',
                            },
                        ],
                    },
                    {
                        title: 'Social',
                        items: [
                            {
                                label: 'GitHub',
                                to: 'https://google.com/',
                            },
                            {
                                label: 'Twitter',
                                to: 'https://google.com/',
                            },
                            {
                                label: 'Blog',
                                to: 'https://google.com/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} K2D`,
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
